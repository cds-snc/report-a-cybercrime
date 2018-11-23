# Ingress

This is the ingress controller for the report-a-cybercrime project. We are
using [Traefik](https://traefik.io/) to handle ingress and each of the other
microservices in this project provides ingresses that are consumed and acted
upon by the controller.

### Deploying

You will need have a cluster-admin clusterrolebinding mapped to your Google
Cloud account to be able to install Traefik in the cluster.
After creating it, you can install it with Kustomize.

```sh
kubectl create clusterrolebinding cluster-admin-binding-$USER \
    --clusterrole=cluster-admin --user=$(gcloud config get-value account)
kustomize build manifests/overlays/gke/ | kubectl apply -f -
```
