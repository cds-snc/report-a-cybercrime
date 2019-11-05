SHELL ?= /usr/bin/bash

.PHONY: dev
dev:
	skaffold dev --port-forward --kube-context=minikube

.PHONY: secrets
secrets:
	cat << API > platform/overlays/minikube/.env.api
	DB_NAME=cybercrime
	DB_URL=http://arangodb:8529
	DB_USER=root
	DB_PASSWORD=
	API
	cat << ARANGO > platform/overlays/minikube/.env.arangodb
	ARANGO_PASSWORD=
	ARANGO
	cat << MINIO > platform/overlays/minikube/.env.minio
	MINIO_ACCESS_KEY=
	MINIO_SECRET_KEY=
	MINIO_BUCKET_NAME=
	MINIO
	ls -a1 platform/overlays/minikube/.env.*

.ONESHELL:
