SHELL ?= /usr/bin/bash

# set up minikube for local testing.
minikube:
		if [ -f api/.env ] && [ -f api/.env.arangodb ]; then
			kubectl config use-context minikube
			kubectl create namespace cybercrime-api
			kubectl create secret generic cybercrime-api --namespace=cybercrime-api \
				--from-env-file=api/.env
			kubectl create secret generic arango-secrets --namespace=cybercrime-api \
				--from-env-file=api/.env.arangodb
			kustomize build api/manifests/overlays/minikube/ | kubectl apply -f -
			kustomize build ingress/manifests/overlays/minikube/ | kubectl apply -f -
			kustomize build frontend/manifests/overlays/minikube/ | kubectl apply -f -
		else
			echo "You need the following files:"
			echo "api/.env.arangodb"
			echo "api/.env"
		fi
.ONESHELL:


