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
