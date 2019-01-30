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

```sh
kubectl apply -f manifests
```

### Creating secrets

Secrets for this project are dealt with using [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets).

Creating the secret for ArangoDB looks like the following:

```sh
kubectl create secret generic arango-secrets --namespace=cybercrime-api --from-literal=ARANGO_PASSWORD=soopersecret --dry-run -o yaml \
 | kubeseal --cert=/path/to/cert/tls.crt --format yaml - > manifests/arango-secrets.yaml
```

Creating the secret for cybercrime-api looks like the following:

```sh
kubectl create secret generic cybercrime-api-secrets --namespace=cybercrime-api --from-env-file=.env --dry-run -o yaml \
 | kubeseal --cert=/path/to/cert/tls.crt --format yaml - > manifests/cybercrime-api-secrets.yaml
```
