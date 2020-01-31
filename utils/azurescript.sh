#!/bin/bash

export PROJECT_NAME=rcmpcybercrime
export RG_NAME=MpSCCDSCybercrimeRG
export ACR_NAME=MpSCCDSCybercrimeacr
export IMAGE_NAME=f2
export DB_NAME=mpsccdscybercrimecosdb
export PLAN_NAME=MpSCCDSCybercrimeazappplan
export APP_NAME=MpSCCDSCybercrimeazapp
export SERVICE_PRINCIPAL_NAME=MpSCCDSCybercrimeACR-sp
export VIRUS_SCANNER_NAME=mpsccdscybercrimeclamav
export COGNITIVE_NAME=MpSCCogContMod1
export WAF_RG=MpPCCorenetRg
export WAF_NAME=MpPCWafGw
export WAF_FRONTEND_IP=appGatewayFrontendIP
export WAF_SUBSCRIPTION=MpPSub
# Set up Azure
## Resource group
az group create --name $RG_NAME --location canadacentral
az configure --defaults group=$RG_NAME location=canadacentral    # set default resource group
## Container registry
az acr create --name $ACR_NAME --sku standard
## Database
az cosmosdb create --name $DB_NAME --kind MongoDB
## Antivirus Scanner
az container create --resource-group $RG_NAME --name $VIRUS_SCANNER_NAME --image mk0x/docker-clamav:alpine --dns-name-label $VIRUS_SCANNER_NAME --ports 3310
## Azure Cognitive Services - Content Moderator
az cognitiveservices account create --name $COGNITIVE_NAME --resource-group $RG_NAME --kind ContentModerator --sku F0 --location canadacentral --yes
# Deploy code
## Docker image
az acr build --registry $ACR_NAME --image $IMAGE_NAME ../f2
## App Service
### Create
az appservice plan create --name $PLAN_NAME --sku F1 --is-linux
az webapp create --name $APP_NAME --plan $PLAN_NAME --deployment-container-image-name ${ACR_NAME}.azurecr.io/${IMAGE_NAME}:latest
### ACR access
SP_PASSWD=$(az ad sp create-for-rbac --name http://$SERVICE_PRINCIPAL_NAME --scopes $ACR_REGISTRY_ID --role acrpull --query password --output tsv)
SP_APP_ID=$(az ad sp show --id http://$SERVICE_PRINCIPAL_NAME --query appId --output tsv)
az webapp config container set --name $APP_NAME --resource-group $RG_NAME --docker-custom-image-name ${ACR_NAME}.azurecr.io/${IMAGE_NAME}:latest --docker-registry-server-url https://${ACR_NAME}.azurecr.io --docker-registry-server-user $SP_APP_ID --docker-registry-server-password $SP_PASSWD
### Environmental variables
export COSMO_KEY=`az cosmosdb keys list --name $DB_NAME --query "primaryMasterKey" | sed -e 's/^"//' -e 's/"$//'`
az webapp config appsettings set  --name $APP_NAME --settings COSMOSDB_NAME=$DB_NAME COSMOSDB_KEY=$COSMO_KEY
### Continuous deployment
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
