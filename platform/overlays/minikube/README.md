# Minikube

On Unix systems, starting minikube looks something like the following.

```sh
minikube start
```

If you have problems on your system you might have to add appropriate options.

## Secrets

Secrets (for example, database keys) are currently managed using [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets).
Sealed Secrets works by having a controller running inside the cluster decrypt secrets using a secret key.
This secret key needs to be added to the cluster before the Sealed Secrets controller starts so that it picks it up and to successfully decrypt the secrets.
The minikube overlay contains all the secrets for the project encrypted with a key generated specifically for development.

Before deploying the app to the cluster you need to create a private / public keypair, deploy the private key to the cluster, and encrypt the required secrets with the public key.

### Generate and deploy keys

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout minikubePrivate.key   \
-out minikubePublic.crt -subj "/CN=report-a-cybercrime"

kubectl -n kube-system create secret tls sealed-secrets-key                       \
--key=minikubePrivate.key --cert=minikubePublic.crt --namespace=kube-system
```

### Encrypt secrets

With those keys created, you can now use them to encrypt secrets to be included in that overlay:

```sh
kubectl create secret generic arango-secrets              \
--from-literal=ARANGO_PASSWORD=$ARANGO_PASSWORD           \
--namespace=cybercrime-api --dry-run -o yaml              \
| kubeseal --cert=minikubePublic.crt --format yaml -      \
> platform/overlays/minikube/arango-secrets.yaml

kubectl create secret generic cybercrime-api-secrets      \
--from-literal=DB_NAME=$DB_NAME                           \
--from-literal=DB_URL=$DB_URL                             \
--from-literal=DB_USER=$DB_USER                           \
--from-literal=DB_PASSWORD=$DB_PASSWORD                   \
--namespace=cybercrime-api --dry-run -o yaml              \
| kubeseal --cert=minikubePublic.crt --format yaml -      \
> platform/overlays/minikube/cybercrime-api-secrets.yaml

kubectl create secret generic minio-secrets               \
--from-literal=MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY         \
--from-literal=MINIO_SECRET_KEY=$MINIO_SECRET_KEY         \
--from-literal=MINIO_BUCKET_NAME=$MINIO_BUCKET_NAME       \
--namespace=cybercrime-api --dry-run -o yaml              \
| kubeseal --cert=minikubePublic.crt --format=yaml -      \
> platform/overlays/minikube/minio-secrets.yaml
```

## Deploy

You are now ready to deploy the code to the cluster.

```sh
kubectl apply -k platform/overlays/minikube
```

To monitor the pods as they come up use

```
watch kubectl get pods --all-namespaces
```

It will likely take 5-10 minutes for the system to stabalize. When all pods are running you can connect to the frontend by getting the url using

```
minikube ip
```

and the port via

```
kubectl get service --namespace=kube-system traefik-ingress-service
```

To connect to the arango database to verify that the app is working,

```
kubectl port-forward -n cybercrime-api arangodb-6ff497f798-j4tzz 8529:8529
```

Note that the pod name will differ, but will start with `arangodb-`. You can now navigate your browser to `http://localhost:8529` to access the database. Use the username and password from your environment variables `DB_USR` and `DB_PASSWORD`.

Open the database "cybercrime" and the collection "reports". Go through the app and submit a report. Refresh your arango tab and the data should show in the database. Note that currently we are anonymizing personal information (names, phone numbers, addresses, ip addresses) before sending it to the database.
