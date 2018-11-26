# Report a cybercrime prototype API

This is the API for the report-a-cybercrime project. It's a
[GraphQL](https://graphql.org) API backed by
[ArangoDB](https://www.arangodb.com/).

### Running the API

The API requires a few environmental variables to run. These are expected to be
in a `.env` file, which you should create based on `.env.example`.

With those in place and ArangoDB running, you can
start the API in the standard way.

```sh
# install the dependencies
npm install
# start the api
npm start
```

### Running the tests

```sh
npm test
```

### Deployment

We are using Kubernetes to deploy the API, and the manifests describing the
cluster config are in the `manifests` directory.

We are using [Kustomize](https://github.com/kubernetes-sigs/kustomize) to
generate platform/environment specific variations of our configuration.

For example to get this going in
[Minikube](https://github.com/kubernetes/minikube) you would do something like
the following.

```sh
# start minikube with a non-resource hogging driver and lots of memory
minikube start --vm-driver=kvm2 --memory=8096
# create the cybercrime-api namespace to scope access to the secrets
kubectl create namespace cybercrime-api
# create a secret for the root db password
kubectl create secret generic arango-secrets --namespace=cybercrime-api --from-literal=ARANGO_ROOT_PASSWORD=soopersecret
# create a secret from the env file
kubectl create secret generic cybercrime-api --namespace=cybercrime-api --from-env-file=.env
# generate the config and pipe it into kubectl
kustomize build manifests/overlays/minikube/ | kubectl apply -f -
```
