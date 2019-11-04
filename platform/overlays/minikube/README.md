# Local development

This application is built in the Cloud Native style, which the [CNCF](https://www.cncf.io) [used to](https://web.archive.org/web/20180401091110/https://www.cncf.io/about/charter/) simply define as:

* Container packaged
* Dynamically managed
* Micro-services oriented

 This architectural approach optimizes for composabilty (allowing new services to be built by combining existing ones), resiliance and replaceabilty (each individual service is small enough to be rewritten in a couple of weeks). To ensure this benefits are realized by key projects in the Government of Canada, this architecture is also [a requirement](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15249#claC.2.3.10) for projects going through the GCEARB.

While a system decomposed into microservice has great organizational benefits, those benefits can only be claimed when developers adopt these tools and practices. This means that developer experience needs to be a key concern.

To that end, this project combines three key projects to create a modern developer workflow: [Minikube](https://minikube.sigs.k8s.io) and [Skaffold](https://skaffold.dev) and [Kustomize]().

## Minikube

Kubernetes is the orchestrator that gives the "Dynamically managed" part of the Cloud Native definition above. Minikube lets you run Kubernetes locally. Install Minikube on a Mac with [homebrew](https://brew.sh):

```sh
brew install minikube
```

You will also need the `kubectl` command to talk to Kubernetes instances like the one that minikube creates for you.

```sh
brew install kubernetes-cli
```

## Skaffold

Skaffold runs your application in Kubernetes and updates it as you make code changes. You can also install it via homebrew:

```sh
brew install skaffold
```

## Kustomize

Kustomize lets you create variations on your Kubernetes configuration using patches instead of programming in templates. It can also be installed via homebrew:

```sh
brew install kustomize
```

# How it all comes together

The basic idea: Minikube creates a virtual machine and runs Kubernetes inside. Skaffold generates the config needed to run your application using Kustomise and puts it inside Kubernetes using kubectl. From there it watches your files for changes and loads the changes files into Kubernetes as you work.

## Secrets

Like most applications this application needs a few secrets to run.
Running `make secrets` will create the files you need in the `platform/overlays/minikube` folder.

Take a moment and fill in the values.

## Running it

With the prerequisites installed and the secrets created in the `platform/overlays/minikube` folder, all that's left is to start minikube, and then the app itself.

```bash
minikube start
make dev
```
