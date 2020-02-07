#!/bin/bash

export PROJECT_NAME=rcmpcybercrime
export RG_NAME=MpPCCDSCybercrimeRG

export ACR_NAME=MpPCCDSCybercrimeacr
export IMAGE_NAME=f2

export DB_NAME=mppccdscybercrimecosdb

export PLAN_NAME=MpPCCDSCybercrimeazappplan
export APP_NAME=MpPCCDSCybercrimeazapp
export SERVICE_PRINCIPAL_NAME=MpPCCDSCybercrimeACR-sp

export VIRUS_SCANNER_NAME=mppccdscybercrimeclamav

export COGNITIVE_NAME=MpPCCogContMod1

export WAF_RG=MpPCCorenetRg
export WAF_NAME=MpPCWafGw
export WAF_FRONTEND_IP=appGatewayFrontendIP
export WAF_SUBSCRIPTION=MpPSub

export LOG_ANALYTICS=MpPCSecWs
export LOG_RG=MpPCSeclogRg

export VNET_NAME=MpPCCDSCybercrimeVN
export VNET_ADDRESS=10.9.0.0/16
export APP_SUBNET="${APP_NAME}SN"
export APP_SUBNET_RANGE=10.9.0.0/24
export CONTAINER_SUBNET="${VIRUS_SCANNER_NAME}SN"
export CONTAINER_SUBNET_RANGE=10.9.1.0/24


#### Set up Azure
## Create Resource group
az group create --name $RG_NAME --location canadacentral

# set default resource group
az configure --defaults group=$RG_NAME location=canadacentral

### Create VNET and SUBNETS for resources
az network vnet create --name $VNET_NAME --resource-group $RG_NAME --address-prefixes $VNET_ADDRESS --subnet-name $APP_SUBNET --subnet-prefixes $APP_SUBNET_RANGE
az network vnet subnet create --address-prefixes $CONTAINER_SUBNET_RANGE --name $CONTAINER_SUBNET --resource-group $RG_NAME --vnet-name $VNET_NAME

## Create Container registry
ACR_REGISTRY_ID=$(az acr create --name $ACR_NAME --sku standard --query id --output tsv)

## Create Database
az cosmosdb create --name $DB_NAME --kind MongoDB

## Create Antivirus Scanner Container Instance
# - Currently not using the alpine version because mk0x needs to rebuild from clamd v102.2 or 103 to pickup known azure bugfix.
# - See https://bugzilla.clamav.net/show_bug.cgi?id=12469
# To query the log analytics workspace for container logs query ContainerEvent_CL and ContainerInstanceLog_CL tables
az container create --resource-group $RG_NAME --name $VIRUS_SCANNER_NAME --image mk0x/docker-clamav --dns-name-label $VIRUS_SCANNER_NAME --ports 3310 --log-analytics-workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --workspace-name $LOG_ANALYTICS --query customerId --output tsv) --log-analytics-workspace-key $(az monitor log-analytics workspace get-shared-keys --resource-group $LOG_RG --workspace-name $LOG_ANALYTICS --query primarySharedKey --output tsv)

## Create Content Moderator - Azure Cognitive Services
az cognitiveservices account create --name $COGNITIVE_NAME --resource-group $RG_NAME --kind ContentModerator --sku F0 --location canadacentral --yes

#### Deploy code
## Build Docker image
az acr build --registry $ACR_NAME --image $IMAGE_NAME ../f2

## Gather credentials to access ACR
SP_PASSWD=$(az ad sp create-for-rbac --name http://$SERVICE_PRINCIPAL_NAME --scopes $ACR_REGISTRY_ID --role acrpull --query password --output tsv)
SP_APP_ID=$(az ad sp show --id http://$SERVICE_PRINCIPAL_NAME --query appId --output tsv)

#### App Service
## Create App Service & configure
# Note: Once created it seems like I've had to restart the app service in some unidentified situations to get it to pick up the image successfully from the ACR
# It may be that the service principle is taking longer to create and it's not ready by the time the app is configured...
az appservice plan create --name $PLAN_NAME --sku P1V2 --is-linux
az webapp create --name $APP_NAME --plan $PLAN_NAME --deployment-container-image-name ${ACR_NAME}.azurecr.io/${IMAGE_NAME}:latest
az webapp config container set --name $APP_NAME --resource-group $RG_NAME --docker-custom-image-name ${ACR_NAME}.azurecr.io/${IMAGE_NAME}:latest --docker-registry-server-url https://${ACR_NAME}.azurecr.io --docker-registry-server-user $SP_APP_ID --docker-registry-server-password $SP_PASSWD

## Environmental variables
export COSMO_KEY=`az cosmosdb keys list --name $DB_NAME --query "primaryMasterKey" | sed -e 's/^"//' -e 's/"$//'`
az webapp config appsettings set  --name $APP_NAME --settings COSMOSDB_NAME=$DB_NAME COSMOSDB_KEY=$COSMO_KEY

## Continuous deployment
az webapp deployment container config --enable-cd true --name $APP_NAME

## Configure the App Service to apply network restrictions to the SCM site as well
az webapp config access-restriction set --resource-group $RG_NAME --name $APP_NAME --use-same-restrictions-for-scm-site true

## Get public IP address of the Application Gateway to use when configuring network restrictions
publicIpID="$(az network application-gateway frontend-ip show --resource-group $WAF_RG --gateway-name $WAF_NAME --name $WAF_FRONTEND_IP --subscription $WAF_SUBSCRIPTION --query 'publicIpAddress.id' --output tsv)"
publicIP="$(az network public-ip show --ids $publicIpID --query 'ipAddress' --output tsv)"
publicIP="${publicIP}/32"

## Configure the App Service network restrictions.
# When adding your first IP Restriction rule, the service will add an explicit deny all rule with a priority of 2147483647.
# In practice, the explicit deny all rule will be last rule executed and will block access to any IP address that is not explicitly allowed using an Allow rule.
az webapp config access-restriction add --resource-group $RG_NAME --name $APP_NAME --rule-name 'Allow from WAF' --action Allow --ip-address $publicIP --priority 1000

## Configure app service for https only
az webapp update --https-only true --name $APP_NAME --resource-group $RG_NAME

## Configure resources to log to Log Analytics workspace
az monitor diagnostic-settings create --resource $(az webapp show --name $APP_NAME --resource-group $RG_NAME --query 'id' --output tsv) --name ${APP_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logs.json --metrics @metrics.json
az monitor diagnostic-settings create --resource $(az cognitiveservices account show --name $COGNITIVE_NAME --resource-group $RG_NAME --query id --output tsv) --name ${COGNITIVE_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logscontentmod.json --metrics @metricscontentmod.json
az monitor diagnostic-settings create --resource $(az acr show --name $ACR_NAME --resource-group $RG_NAME --query id --output tsv) --name ${ACR_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logsacr.json --metrics @metricsgrained.json
az monitor diagnostic-settings create --resource $(az cosmosdb show --name $DB_NAME --resource-group $RG_NAME --query id --output tsv) --name ${DB_NAME}DiagSett --workspace $(az monitor log-analytics workspace show --resource-group $LOG_RG --workspace-name $LOG_ANALYTICS --query id --output tsv) --logs @logscosmos.json --metrics @metricsgrained.json
