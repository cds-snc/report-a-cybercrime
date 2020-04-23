# Report a cybercrime / Signalez un crime informatique

Exploring a service that makes it easier for Canadians and businesses to report
when they encounter or are victims of a cybercrime and that helps police
analyze and investigate reports.

Explorer la possibilité de mettre en place un service permettant aux Canadiens
et aux entreprises de signaler plus aisément les crimes informatiques et
facilitant le travail d'analyse et d'enquête de la police.

## Installation

Requires node.

```
cd f2
npm install
```

## Configuration

A number of environment variables are used to configure different parts of the back end. These can be set locally in a `.env` file. As in `.env.example` we have the following.

### Data storage

As our app is currently running in Microsoft Azure, we are using storing the reports in Azure CosmosDB (using a mongodb api) and uploaded files in Azure Blob Storage. Set the following environment variables:

```sh
# database for reports
COSMOSDB_NAME=
COSMOSDB_KEY=

# Blob Storage for files
BLOB_STORAGE_NAME=
BLOB_STORAGE_KEY=
```

### Self harm words

We use a comma separated list of keywords to attempt to detect any user in serious crisis.

```sh
# self harm words
SELF_HARM_WORDS=
```

### File scanning

Files are scanned with [Clam AV](https://www.clamav.net/), an open source virus scanner we are running in the cloud. We also use Azure Content Moderator to detect adult images.

```sh
# file scanning
CLAM_URL=
CONTENT_MODERATOR_SERVICE_KEY=
```

### Encrypting the reports for the RCMP analysts

Currently the reports are sent to the RCMP via encrypted email. We use the HERMIS IDs of the RCMP staff to fetch their public key certificates.

```sh
# encrypting email to intake analyst
LDAP_URL=
LDAP_UID=
```

### Sending the encrypted reports to RCMP analysts

We use an SMTP server directly to send out reports.

```sh
# sending encrypted emails
MAIL_HOST=
MAIL_USER=
MAIL_PASS=
MAIL_FROM=
```

### Notify

We are using the Government of Canada's [Notify](https://notification.alpha.canada.ca/) tool to send confirmation emails to users as well as to send feedback to the team developing the app.

```sh
# Notify configuration
NOTIFY_API_BASE_URL=
NOTIFY_API_KEY=
NOTIFY_ENGLISH_CONFIRMATION_TEMPLATE_ID=
NOTIFY_FRENCH_CONFIRMATION_TEMPLATE_ID=
NOTIFY_FEEDBACK_TEMPLATE_ID=
FEEDBACK_EMAIL=
```

### Google Analytics

Google Analytics is being used to help us get insight into how the different parts of the app are being used.

```sh
# Google Analytics
GOOGLE_ANALYTICS_ID=
REACT_APP_GOOGLE_GTM_ID=
```

### Sentry.io

We use sentry.io to track bugs arising in production.

```sh
# Sentry.io
REACT_APP_SENTRY_DSN=
```

### Rate limiting

Finally, we are currently soft launching the app and so are rate limiting how many reports it generates.

```sh
# rate limiting
SUBMISSIONS_PER_DAY=
SECONDS_BETWEEN_REQUESTS=
```

## Running locally

Note that you must be in the `f2` directory to run the code.

### Just the frontend

```sh
npm run dev
```

### Frontend and backend

```sh
npm run prod
```

### Run project with Docker

```sh
docker build -t rac .
docker run -p 3000:3000 rac
```

### Getting the analyst email yourself

It is often useful to quickly see what the analyst email looks like. If the `LDAP_UID` environment variable is not set and the user provides their email address on the contact info screen then the server will send the analyst email unencrypted to the user. This is solely for development purposes. Note that the review apps are configured this way.

To do this locally:

- ensure that `LDAP_UID` is not set in your terminal environment nor in your `.env` file
- run `npm run prod`
- fill out the report and include your email address on http://localhost:3000/contactinfo
- you should receive the generated report email

## Load testing the frontend

There are simple scripts to load test the frontend. They use the [k6](https://docs.k6.io) package, which must first be installed (see (https://docs.k6.io/docs/installation)

To run the tests, set the environment variable `LOAD_TESTING_BASE_URL` to the url of the website, for example

```
LOAD_TESTING_BASE_URL=https://report-a-scam.azurewebsites.net
```

and then from the root repo directory run

```
k6 run -vu 150 -d10s utils/loadTesting.js
```

Notes:

- the `http_req_duration` line shows how long the requests took (from sending request to receiving response)
- the `iterations` line shows the number of requests per second (should be approximately 100/s bor both)
