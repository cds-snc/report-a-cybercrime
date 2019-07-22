# Cybercrime reporting platform

Kubernetes can be thought of as a ["platform for building
platforms"](https://twitter.com/kelseyhightower/status/935252923721793536?lang=en)
and the contents of this folder represent the Kubernetes based platform for the
cybercrime reporting application.

The configuration you see here is set up to use
[kustomize](https://kustomize.io/) to allow us to create variations for
different platforms and environments.

You can see the details for the different environments we support by looking
into the overlay folders for each one:

[Minikube](https://github.com/cds-snc/report-a-cybercrime/tree/master/platform/overlays/minikube)
[AKS](https://github.com/cds-snc/report-a-cybercrime/tree/master/platform/overlays/aks)
