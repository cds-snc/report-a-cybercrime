iHELL ?= /usr/bin/bash
# set up minikube for local testing.
setup:
	docker-compose build
dev:
	docker-compose up
.ONESHELL:
