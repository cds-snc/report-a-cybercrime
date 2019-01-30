# Ingress

This is the ingress controller configuration for the report-a-cybercrime project. We are
using [Istio](https://istio.io/) to handle ingress and each of the other
microservices in this project provides virtualservices that are consumed and acted
upon by the controller.

Istio is installed during cluster creation by adding the following options to
the cluster create command:

```bash
gcloud beta container clusters create "foo" ...lots of options... --addons Istio --istio-config auth=MTLS_PERMISSIVE
```

After cluster creation, GCP automatically provisions an IP address to the Istio
ingress controller. You can find that IP with the following command:

```bash
kubectl get svc -n istio-system istio-ingressgateway -o jsonpath="{.status.loadBalancer.ingress[0].ip}"
```

## Secrets

The current configuration requires a secret for cert-manager. The secret contains service account credentials that allow cert-manager to control DNS records in Cloud DNS so that it can complete a [DNS-01 challenge](https://tools.ietf.org/html/draft-ietf-acme-acme-01#section-7.5) so that [Letsencrypt](https://www.letsencrypt.org).

The service account can be created and the credentials retrieved with the following commands:

```bash
GCP_PROJECT=my-gcp-project

gcloud iam service-accounts create dns-admin \
--display-name=dns-admin \
--project=${GCP_PROJECT}

gcloud iam service-accounts keys create ./gcp-dns-admin.json \
--iam-account=dns-admin@${GCP_PROJECT}.iam.gserviceaccount.com \
--project=${GCP_PROJECT}

gcloud projects add-iam-policy-binding ${GCP_PROJECT} \
--member=serviceAccount:dns-admin@${GCP_PROJECT}.iam.gserviceaccount.com \
--role=roles/dns.admin
```

After that, those credentials should be encrypted so they can be stored safely alongside the source code:

```bash
kubectl create secret generic cert-manager-credentials \
  --from-file=./gcp-dns-admin.json --namespace=istio-system \
  --dry-run -o yaml | kubeseal --cert=/path/to/sealed_secrets_keys/tls.crt \
  --format yaml - > ingress/manifests/cert-manager-credentials.yaml
```
