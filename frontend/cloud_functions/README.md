## Purpose

The point of this function is to communicate status messages from CloudBuild
back to Github. It does this by subscribing to `cloud-builds` events via
Google's pubsub. When receives a pubsub message, it's job is simply to format
it in a way that Github understands and send it on. This needs to be set up
once per project namespace.

This requires a Github token that must be created in [your
settings](https://github.com/settings/tokens). The token needs to have write
access to your repository to create the status on the PR.

To upload the function do:

```
gcloud beta functions --project=myproject deploy buildPubSub \
  --runtime=nodejs8 --trigger-resource cloud-builds \
  --trigger-event google.pubsub.topic.publish \
  --set-env-vars GITHUB_TOKEN=mytoken
```

If you need to delete the function you can do it with the following command.

```bash
gcloud beta functions --project=myproject delete buildPubSub
```

This is also visible in the UI:

https://console.cloud.google.com/functions/add
