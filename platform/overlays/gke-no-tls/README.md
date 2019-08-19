# Running the app in GKE

Getting the app running on GKE is pretty straight-forward. This assumes you have the env vars for the application set up properly.

## Creating the GKE cluster

We are creating a [regional cluster](https://cloud.google.com/blog/products/gcp/regional-clusters-in-google-kubernetes-engine-are-now-generally-available) here:

```sh
$ gcloud beta container --project "report-a-cybercrime-alpha" clusters create "rcmp-alpha" --region "northamerica-northeast1" --no-enable-basic-auth --cluster-version "1.13.7-gke.8" --machine-type "n1-standard-1" --image-type "COS" --disk-type "pd-standard" --disk-size "100" --metadata disable-legacy-endpoints=true --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" --num-nodes "1" --enable-stackdriver-kubernetes --enable-ip-alias --network "projects/report-a-cybercrime-alpha/global/networks/default" --subnetwork "projects/report-a-cybercrime-alpha/regions/northamerica-northeast1/subnetworks/default" --default-max-pods-per-node "110" --addons HorizontalPodAutoscaling,HttpLoadBalancing --enable-autoupgrade --enable-autorepair --database-encryption-key "projects/report-a-cybercrime-alpha/locations/northamerica-northeast1/keyRings/report-a-cybercrime-alpha/cryptoKeys/k8s" --identity-namespace "report-a-cybercrime-alpha.svc.id.goog"
```

## Getting things running

```sh
# Generate a key
openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout gkeNoTLSPrivate.key -out gkeNoTLSPublic.crt -subj "/CN=report-a-cybercrime-alpha-gke-no-tls"

# Add the key to the cluster in the kube-system namespace
kubectl -n kube-system create secret tls sealed-secrets-key --key=gkeNoTLSPrivate.key --cert=gkeNoTLSPublic.crt --namespace=kube-system

# Use the public key to encrypt the secrets:
kubectl create secret generic arango-secrets --namespace=cybercrime-api --from-literal=ARANGO_PASSWORD=$ARANGO_PASSWORD --dry-run -o yaml | kubeseal --cert=gkeNoTLSPublic.crt --format yaml - > platform/overlays/gke-no-tls/arango-secrets.yaml

kubectl create secret generic cybercrime-api-secrets --from-literal=DB_NAME=$DB_NAME --from-literal=DB_URL=$DB_URL --from-literal=DB_USER=$DB_USER --from-literal=DB_PASSWORD=$DB_PASSWORD -n cybercrime-api --dry-run -o yaml | kubeseal --cert=gkeNoTLSPublic.crt --format yaml - > platform/overlays/gke-no-tls/cybercrime-api-secrets.yaml

kubectl create secret generic minio-secrets --from-literal=MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY --from-literal=MINIO_SECRET_KEY=$MINIO_SECRET_KEY --from-literal=MINIO_BUCKET_NAME=$MINIO_BUCKET_NAME --from-file=credentials.json --dry-run -o yaml -n cybercrime-api | kubeseal --cert=gkeNoTLSPublic.crt --format=yaml - > platform/overlays/gke-no-tls/minio-secrets.yaml

# Apply our config
kubectl apply -k platform/overlays/gke-no-tls
```
