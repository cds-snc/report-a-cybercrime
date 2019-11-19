1 ##!/usr/local/bin/bash
  2
  3 #Create a resource group
  4 az group create --name CDSExperiment  --location CanadaCentral
  5 # Create AKS cluster
  6 az aks create --resource-group CDSExperiment  --name CDSExperiemntCluster --node-count 1 --enable-addons monitoring --gener    ate-ssh-keys
  7 #To configure kubectl to connect to Kubernetes cluster
  8 az aks get-credentials --resource-group CDSExperiment  --name CDSExperiemntCluster
  9 #Create a container registry
 10 az acr create --resource-group CDSExperiment  --name CDSContainerRegistry001 --sku Basic
 11 #change directory to baseline foldergti
 12 cd ../projects/report-a-cybercrime/baseline
 13 #docker  build an image  tagged “cdsimage” in local
 14 docker build -t cdscontainerregistry001.azurecr.io/cdsimage .
 15 #login the container registry (docker run locally), this command giving credential for docker to login Azure
 16 az acr login --name cdscontainerregistry001
 17 #pushing the image by using the following command,you see one push image in the Azure cybercrimeapi container registry
 18 docker push cdscontainerregistry001.azurecr.io/cdsimage:latest
 19 #Authenticate with Azure Container Registry from Azure Kubernetes Service:Integrate an existing ACR with existing AKS clust    ers
 20 az aks update -n CDSExperiemntCluster -g CDSExperiment --attach-acr cdscontainerregistry001
 21 #Pull image from ACR(existing image can be found from  container registry-services- repositories-click the image-click the     tag #- there is docker pull command, just copy and paste to terminal, then you can see a pull image in the Azure cybercrime    api cont#ainer registry
 22 docker pull cdscontainerregistry001.azurecr.io/cdsimage:latest
 23 # Create an Azure storage account
 24 az storage account create -n mycdsstorageaccount -g CDSExperiment  -l canadacentral --sku Standard_LRS
 25 #get key from the new storage account
26 accountkey=`az storage account keys list --account-name mycdsstorageaccount --resource-group CDSExperiment | jq 'first(.[].    value)' | tr -d \"`
 27 # Create an azure storage container (if directly use account-key, need double quote the key, container name all lowercase)
 28 az storage container create -n cdsstoragecontainer --account-name mycdsstorageaccount  --account-key $accountkey git s