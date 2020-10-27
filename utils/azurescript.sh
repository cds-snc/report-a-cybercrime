#!/bin/bash

export RG_NAME=MpPcCDSCyberCrimeRg

#the ACR name should be lower case.  If it's not lowercase then it won't match the registry login server and it won't deploy.
export ACR_NAME=mppccdscybercrimeacr 
export IMAGE_NAME=f2
export VIRUS_SCANNER_IMAGE_NAME=clamav

#db & blob name can't have caps
export DB_NAME=mppccdscybercrimecosdb
export BLOB_NAME=mppccdscybercrimeblob


export PLAN_NAME=MpPcCDSCybercrimeAsp
export APP_NAME=MpPcCDSCybercrimeAsrv
export SERVICE_PRINCIPAL_NAME=MpPcCDSCybercrimeAcrSpn

# Container instances can't have caps
export VIRUS_SCANNER_NAME=mppcdscybercrimeclamavci

export COGNITIVE_NAME=MpPcCDSCybercrimeCogsrvs 

export WAF_RG=MpPCCorenetRg
export WAF_NAME=MpPCWafGw
export WAF_FRONTEND_IP=appGatewayFrontendIP
export WAF_SUBSCRIPTION=MpPSub

export LOG_ANALYTICS=MpPCSecWs
export LOG_RG=MpPCSeclogRg
export LOG_SUBSCRIPTION=MpPSub

export VNET_NAME=MpPcCDSCybercrimeVn
export VNET_ADDRESS=10.9.0.0/16
export APP_SUBNET="${APP_NAME}SN"
export APP_SUBNET_RANGE=10.9.0.0/24
export CONTAINER_SUBNET="${VIRUS_SCANNER_NAME}SN"
export CONTAINER_SUBNET_RANGE=10.9.1.0/24

## App Environment Variables
export NOTIFY_API_BASE_URL=
export NOTIFY_API_KEY=
export NOTIFY_ENGLISH_CONFIRMATION_TEMPLATE_ID=
export NOTIFY_FRENCH_CONFIRMATION_TEMPLATE_ID=
export SELF_HARM_WORDS=

export LDAP_URL=ldap://pki-dsa.rcmp-grc.gc.ca:389
export LDAP_UID=

export MAIL_HOST=
export MAIL_USER=
export MAIL_PASS=
export MAIL_FROM=

export SUBMISSIONS_PER_DAY=5
export SECONDS_BETWEEN_REQUESTS=10

export NOTIFY_FEEDBACK_TEMPLATE_ID=
export FEEDBACK_EMAIL=
export NOTIFY_REPORT_TEMPLATE_ID=

export TOTP_SECRET=

#If set to true, this will configure the server to only serve requests which have a referrer we accept in code.
export CHECK_REFERER=true

# How many days for a read-only token for blob storage to expire
export BLOB_SAS_DAYS_EXPIRY=5

# Restrict Azure blob downloads to this IP range
export BLOB_SAS_IP_LOWER=000.000.000.000
export BLOB_SAS_IP_UPPER=255.255.255.255

export ANALYST_GROUP_MAIL=NC3PublicReporting-GNCCRapportsPublics@rcmp-grc.gc.ca

export TAG_ALL="Environment=Production Cost_Centre=S0046 Owner=RCMP Classification=Unclassified Project=RCMP-CDS-FRS Division=HQ"

# Logging
export LOGGING_DIRECTORY=
export LOGGING_IGNORE_ROUTE=
export LOGGING_PRETTY_PRINT=

#### Set up Azure
## Create Resource group
az group create --name $RG_NAME --location canadacentral

# set default resource group
az configure --defaults group=$RG_NAME location=canadacentral

### Create VNET and SUBNETS for resources
az network vnet create --name $VNET_NAME --resource-group $RG_NAME --address-prefixes $VNET_ADDRESS --subnet-name $APP_SUBNET --subnet-prefixes $APP_SUBNET_RANGE
az network vnet subnet create --address-prefixes $CONTAINER_SUBNET_RANGE --name $CONTAINER_SUBNET --resource-group $RG_NAME --vnet-name $VNET_NAME

## Create Container registry
ACR_REGISTRY_ID=$(az acr create --name $ACR_NAME --sku Premium --query id --output tsv)

#### Deploy code
## Build Docker images
az acr build --registry $ACR_NAME --image $IMAGE_NAME ../$(IMAGE_NAME}
az acr build --registry $ACR_NAME --image $VIRUS_SCANNER_IMAGE_NAME 'https://github.com/cds-snc/docker-clamav.git#alpine'

## Gather credentials to access ACR
SP_PASSWD=$(az ad sp create-for-rbac --name http://$SERVICE_PRINCIPAL_NAME --scopes $ACR_REGISTRY_ID --role acrpull --query password --output tsv)
SP_APP_ID=$(az ad sp show --id http://$SERVICE_PRINCIPAL_NAME --query appId --output tsv)

## Create Antivirus Scanner Container Instance
#sometimes there is an error when creating the container - I think the service principle creation takes time to populate...
#in general, this Container instance resource creation is slow and can take minutes even when it does succeed
sleep 120
# To query the log analytics workspace for container logs query ContainerEvent_CL and ContainerInstanceLog_CL tables
az container create --resource-group $RG_NAME --name $VIRUS_SCANNER_NAME --memory 3.5 --os-type Linux --image ${ACR_NAME}.azurecr.io/${VIRUS_SCANNER_IMAGE_NAME}:latest --dns-name-label $VIRUS_SCANNER_NAME --ports 3310 --registry-login-server ${ACR_NAME}.azurecr.io --registry-password $SP_PASSWD --registry-username $SP_APP_ID --log-analytics-workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --subscription $LOG_SUBSCRIPTION --workspace-name $LOG_ANALYTICS --query customerId --output tsv) --log-analytics-workspace-key $(az monitor log-analytics workspace get-shared-keys --resource-group $LOG_RG --subscription $LOG_SUBSCRIPTION --workspace-name $LOG_ANALYTICS --query primarySharedKey --output tsv)

## Create Content Moderator - Azure Cognitive Services
az cognitiveservices account create --name $COGNITIVE_NAME --resource-group $RG_NAME --kind ContentModerator --sku F0 --location canadacentral --yes

## Create Database
az cosmosdb create --name $DB_NAME --kind MongoDB

## Create Storage account for blobs
az storage account create --name $BLOB_NAME --resource-group $RG_NAME --sku Standard_RAGRS --kind BlobStorage --access-tier Hot
az storage account blob-service-properties update --enable-delete-retention true --delete-retention-days 100 -n $BLOB_NAME -g $RG_NAME

#### App Service
## Create App Service & configure
# Note: Once created it seems like I've had to restart the app service in some unidentified situations to get it to pick up the image successfully from the ACR
# It may be that the service principle is taking longer to create and it's not ready by the time the app is configured...
az appservice plan create --name $PLAN_NAME --sku P1V2 --is-linux
az webapp create --name $APP_NAME --plan $PLAN_NAME --deployment-container-image-name ${ACR_NAME}.azurecr.io/${IMAGE_NAME}:latest
az webapp config container set --name $APP_NAME --resource-group $RG_NAME --docker-custom-image-name ${ACR_NAME}.azurecr.io/${IMAGE_NAME}:latest --docker-registry-server-url https://${ACR_NAME}.azurecr.io --docker-registry-server-user $SP_APP_ID --docker-registry-server-password $SP_PASSWD

## Environmental variables
export COSMO_KEY=`az cosmosdb keys list --name $DB_NAME --query "primaryMasterKey" | sed -e 's/^"//' -e 's/"$//'`
az webapp config appsettings set --name $APP_NAME --settings COSMOSDB_NAME=$DB_NAME COSMOSDB_KEY=$COSMO_KEY
az webapp config appsettings set --name $APP_NAME --settings BLOB_STORAGE_NAME=$BLOB_NAME BLOB_STORAGE_KEY=$(az storage account keys list --resource-group $RG_NAME --account-name $BLOB_NAME --query [0].value -o tsv)
az webapp config appsettings set --name $APP_NAME --settings CLAM_URL=${VIRUS_SCANNER_NAME}.canadacentral.azurecontainer.io
az webapp config appsettings set --name $APP_NAME --settings CONTENT_MODERATOR_SERVICE_KEY=$(az cognitiveservices account keys list --name $COGNITIVE_NAME --query key1 -o tsv)
az webapp config appsettings set --name $APP_NAME --settings NOTIFY_API_BASE_URL=$NOTIFY_API_BASE_URL NOTIFY_API_KEY=$NOTIFY_API_KEY NOTIFY_ENGLISH_CONFIRMATION_TEMPLATE_ID=$NOTIFY_ENGLISH_CONFIRMATION_TEMPLATE_ID NOTIFY_FRENCH_CONFIRMATION_TEMPLATE_ID=$NOTIFY_FRENCH_CONFIRMATION_TEMPLATE_ID SELF_HARM_WORDS="${SELF_HARM_WORDS}"
az webapp config appsettings set --name $APP_NAME --settings LDAP_URL=$LDAP_URL LDAP_UID="${LDAP_UID}" MAIL_HOST=$MAIL_HOST MAIL_USER=$MAIL_USER MAIL_PASS=$MAIL_PASS MAIL_FROM="${MAIL_FROM}"
az webapp config appsettings set --name $APP_NAME --settings SUBMISSIONS_PER_DAY=$SUBMISSIONS_PER_DAY SECONDS_BETWEEN_REQUESTS=$SECONDS_BETWEEN_REQUESTS
az webapp config appsettings set --name $APP_NAME --settings NOTIFY_FEEDBACK_TEMPLATE_ID=$NOTIFY_FEEDBACK_TEMPLATE_ID FEEDBACK_EMAIL=$FEEDBACK_EMAIL NOTIFY_REPORT_TEMPLATE_ID=$NOTIFY_REPORT_TEMPLATE_ID TOTP_SECRET=$TOTP_SECRET CHECK_REFERER=$CHECK_REFERER
az webapp config appsettings set --name $APP_NAME --settings BLOB_SAS_DAYS_EXPIRY=$BLOB_SAS_DAYS_EXPIRY BLOB_SAS_IP_LOWER="${BLOB_SAS_IP_LOWER}" BLOB_SAS_IP_UPPER="${BLOB_SAS_IP_UPPER}" ANALYST_GROUP_MAIL=$ANALYST_GROUP_MAIL
az webapp config appsettings set --name $APP_NAME --settings LOGGING_DIRECTORY=$LOGGING_DIRECTORY LOGGING_IGNORE_ROUTE=$LOGGING_IGNORE_ROUTE LOGGING_PRETTY_PRINT=$LOGGING_PRETTY_PRINT

## Continuous deployment
az webapp deployment container config --enable-cd true --name $APP_NAME

## Configure the App Service to apply network restrictions to the SCM site as well
az webapp config access-restriction set --resource-group $RG_NAME --name $APP_NAME --use-same-restrictions-for-scm-site true

## Disable FTP(S) access
az webapp config set --ftps-state Disabled --resource-group $RG_NAME --name $APP_NAME

## Get public IP address of the Application Gateway to use when configuring network restrictions
publicIpID="$(az network application-gateway frontend-ip show --resource-group $WAF_RG --gateway-name $WAF_NAME --name $WAF_FRONTEND_IP --subscription $WAF_SUBSCRIPTION --query 'publicIpAddress.id' --output tsv)"
publicIP="$(az network public-ip show --ids $publicIpID --query 'ipAddress' --output tsv)"
publicIP="${publicIP}/32"

## Configure the App Service network restrictions.
# When adding your first IP Restriction rule, the service will add an explicit deny all rule with a priority of 2147483647.
# In practice, the explicit deny all rule will be last rule executed and will block access to any IP address that is not explicitly allowed using an Allow rule.
az webapp config access-restriction add --resource-group $RG_NAME --name $APP_NAME --rule-name 'Allow from WAF' --action Allow --ip-address $publicIP --priority 1000

# Add Network Restrictions to allow communication to the ACR servers in Canada Central so that the Continuous Depoyment to the SCM / Kudu site will work.
az webapp config access-restriction add --resource-group $RG_NAME --name $APP_NAME --rule-name 'Allow Azure ACR Canada Central' --action Allow --ip-address 13.71.170.56/29 --description 'bit.ly/2xGlegR' --priority 3300
az webapp config access-restriction add --resource-group $RG_NAME --name $APP_NAME --rule-name 'Allow Azure ACR Canada Central' --action Allow --ip-address 20.38.146.144/29 --description 'bit.ly/2xGlegR' --priority 3300
az webapp config access-restriction add --resource-group $RG_NAME --name $APP_NAME --rule-name 'Allow Azure ACR Canada Central' --action Allow --ip-address 20.38.149.0/25 --description 'bit.ly/2xGlegR' --priority 3300
az webapp config access-restriction add --resource-group $RG_NAME --name $APP_NAME --rule-name 'Allow Azure ACR Canada Central' --action Allow --ip-address 52.246.154.144/29 --description 'bit.ly/2xGlegR' --priority 3300

## Configure app service for https only
az webapp update --https-only true --name $APP_NAME --resource-group $RG_NAME

## Configure resources to log to Log Analytics workspace
az monitor diagnostic-settings create --resource $(az webapp show --name $APP_NAME --resource-group $RG_NAME --query 'id' --output tsv) --name ${APP_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --subscription $LOG_SUBSCRIPTION --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logs.json --metrics @metrics.json
az monitor diagnostic-settings create --resource $(az cognitiveservices account show --name $COGNITIVE_NAME --resource-group $RG_NAME --query id --output tsv) --name ${COGNITIVE_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --subscription $LOG_SUBSCRIPTION --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logscontentmod.json --metrics @metrics.json
az monitor diagnostic-settings create --resource $(az acr show --name $ACR_NAME --resource-group $RG_NAME --query id --output tsv) --name ${ACR_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --subscription $LOG_SUBSCRIPTION --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logsacr.json --metrics @metricsgrained.json
az monitor diagnostic-settings create --resource $(az cosmosdb show --name $DB_NAME --resource-group $RG_NAME --query id --output tsv) --name ${DB_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --subscription $LOG_SUBSCRIPTION --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logscosmos.json --metrics @metricsgrained.json

## Configure Tagging for all resources created
az group update -g $RG_NAME --tags $TAG_ALL
az resource tag --tags $TAG_ALL -g $RG_NAME -n $VNET_NAME --resource-type Microsoft.Network/virtualNetworks
az resource tag --tags $TAG_ALL -g $RG_NAME -n $COGNITIVE_NAME --resource-type Microsoft.CognitiveServices/accounts
az resource tag --tags $TAG_ALL -g $RG_NAME -n $VIRUS_SCANNER_NAME --resource-type Microsoft.ContainerInstance/containerGroups
az resource tag --tags $TAG_ALL -g $RG_NAME -n $ACR_NAME --resource-type Microsoft.ContainerRegistry/registries
az resource tag --tags $TAG_ALL -g $RG_NAME -n $DB_NAME --resource-type Microsoft.DocumentDB/databaseAccounts
az resource tag --tags $TAG_ALL -g $RG_NAME -n $PLAN_NAME --resource-type Microsoft.Web/serverFarms
az resource tag --tags $TAG_ALL -g $RG_NAME -n $APP_NAME --resource-type Microsoft.Web/sites
