SHELL ?= /usr/bin/bash

.PHONY: setup
setup:
	docker-compose build

.PHONY: dev
dev:
	docker-compose up

.PHONY: api
api:
	docker-compose up api minio arangodb

.PHONY: frontend
frontend:
	docker-compose up frontend

.ONESHELL:
