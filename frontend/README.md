# Frontend for report a cybercrime project

### Running the app

```sh
npm start
```

### Running the app in dev mode

```sh
npm run dev
```

### Running the tests

```sh
npm test
```

### Deployment

```sh
# build the image
docker build -t cdssnc/cybercrime-frontend .
# push the image to Docker hub
docker push cdssnc/cybercrime-frontend
# generate the manifests for minikube and load them in
kustomize build manifests/overlays/minikube/ | kubectl apply -f -
```
