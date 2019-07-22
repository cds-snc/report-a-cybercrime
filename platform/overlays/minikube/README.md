# Minikube

On Linux systems, starting minikube looks something like the following.

```sh
minikube start --vm-driver kvm2 --memory 8096
```

This starts minikube with the kvm2 driver and lots of RAM. You'll need to figure out what makes sense for your environment.

Secrets are currently managed using [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets).
Sealed Secrets works by having a controller running inside the cluster decrypt secrets using a secret key. 
This secret key needs to be added to the cluster before the Sealed Secrets controller starts so that it picks it up and  to successfully decrypt the secrets.
 The minikube overlay contains all the secrets for the project encrypted with a key generated specifically for development. 

To that end, create the `sealed-secrets-key` like this:

```sh
kubectl -n kube-system create secret tls sealed-secrets-key --key=minikubePrivate.key --cert=minikubePublic.crt --namespace=kube-system
```

With that secret in place, you can apply the rest of the config:

```sh
kubectl apply -k platform/overlays/minikube
```

## How we set this up

Each environment that we support should have a separate key created. For minikube this process consisted of first generating a key with following command:

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout minikubePrivate.key -out minikubePublic.crt -subj "/CN=report-a-cybercrime"
```

With those keys created, we can now use them to encrypt secrets to be included in that overlay:

```sh
kubectl create secret generic arango-secrets --namespace=cybercrime-api --from-literal=ARANGO_PASSWORD=$ARANGO_PASSWORD --dry-run -o yaml | kubeseal --cert=minikubePublic.crt --format yaml - > platform/overlays/minikube/arango-secrets.yaml

kubectl create secret generic cybercrime-api-secrets --from-literal=DB_NAME=$DB_NAME --from-literal=DB_URL=$DB_URL --from-literal=DB_USER=$DB_USER --from-literal=DB_PASSWORD=$DB_PASSWORD -n cybercrime-api --dry-run -o yaml | kubeseal --cert=minikubePublic.crt --format yaml - > platform/overlays/minikube/cybercrime-api-secrets.yaml

kubectl create secret generic minio-secrets --from-literal=MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY --from-literal=MINIO_SECRET_KEY=$MINIO_SECRET_KEY --from-literal=MINIO_BUCKET_NAME=$MINIO_BUCKET_NAME --from-file=credentials.json --dry-run -o yaml -n cybercrime-api | kubeseal --cert=minikubePublic.crt --format=yaml - > platform/overlays/minikube/minio-secrets.yaml
```


