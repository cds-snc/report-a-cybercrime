# Cybercrime reporting platform

Kubernetes can be thought of as a ["platform for building
platforms"](https://twitter.com/kelseyhightower/status/935252923721793536?lang=en)
and the contents of this folder represent the Kubernetes based platform for the
cybercrime reporting application.

The configuration you see here is set up to use
[kustomize](https://kustomize.io/) to allow us to create variations for
different platforms and environments.

## Inital setup

Secrets are currently managed using [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets).
Sealed Secrets works by having a controller running inside the cluster decrypt secrets using a secret key. This secret key needs to be added to the cluster before any of the other config.

Keys are generated using the following command:

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout private.key -out public.crt -subj "/CN=report-a-cybercrime"
```

Then the keys can be used to create a secret with the following command:

```
kubectl -n kube-system create secret tls sealed-secrets-key --key=private.key --cert=public.crt --namespace=kube-system
```

### N.B.

All the secrets in the repo have been encrypted with an existing key. That's the one that needs to be in the cluster for the various services to start.

Generating your own key means you will need to recreate the secrets.

## Getting things running

If you have the full version of kustomize installed you can generate config for the AKS environment with the following command:

```sh
kustomize build platform/overlays/aks 
``` 

Kustomize is also built directly into the kubectl command, so you can also deploy everything with apply:

```sh
kubctl apply -k platform/overlays/aks 
``` 
