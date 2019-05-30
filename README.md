# Report a cybercrime / Signaler les crimes informatiques

Exploring a service that makes it easier for Canadians and businesses to report
when they encounter or are victims of a cybercrime and that helps police
analyze and investigate reports.

Explorer la possibilité de mettre en place un service permettant aux Canadiens
et aux entreprises de signaler plus aisément les crimes informatiques et
facilitant le travail d'analyse et d'enquête de la police.

## Run the project locally

We recommend running the project locally using
[Docker](https://docs.docker.com/install), and
[docker-compose](https://docs.docker.com/compose/install/). [Find out how to
install Docker on your
machine](https://www.docker.com/products/docker-desktop). To run only one
service in the project, check out the individual project readmes in the
folders.

### Set up the environment

Like all [12 factor](https://12factor.net) apps, config is stored in the
environment. To run the app locally, you will need to define some environmental
variables. This would look like pasting the following into your `~/.bashrc`
(for most Linux systems), or `~/.bash_profile` (for the Mac).

```sh
# Currently this is assumed to exist:
export DB_NAME=cybercrime
# Docker compose (or K8s) defines this DNS name.
# The API uses it to talk to the database
export DB_URL=http://arangodb:8529
# The database to use to run tests against
# (same credentials are assumed):
export TEST_DB_URL=http://localhost:8529
# Credentials to log into the ArangoDB admin UI
# Available on localhost:8529
export DB_USER=root
export DB_PASSWORD=yourpassword

# Minio credentials for the API, and Minio itself.
# These can also be used to log into the MINIO admin UI
# Available on localhost:9000
export MINIO_ACCESS_KEY=atleastthreecharacters
export MINIO_SECRET_KEY=atleasteightcharacters
# Whatever you want to name the bucket to save files into:
export MINIO_BUCKET_NAME=reports

# ENV vars for the frontend.
# These are prefixed with RAZZLE so Razzle will see them in the build step
# Start Razzle on this port
# (don't change this, hot module loading is set up on 3001)
export RAZZLE_PORT=3000
export RAZZLE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
# URL internal to Docker/K8s that data should be fetched from during SSR:
export RAZZLE_SERVER_SIDE_API_URI=http://api:3002/graphql

export API_PORT=3002
```

You will know that your environment is set up correctly if you can see those
variables in the output of the `env` command.

### Install modules

The approach we currently use for running locally requires you to install the required modules manually. From the root folder of the project run

```
cd frontend && npm install && cd ..
cd api && npm install && cd ..
```

### Run project with Docker

With those environmental vars defined, navigate to the root project folder and
run `make dev`. This will begin the process of downloading and starting up all
the project containers. If you changed your password in the last step, make
sure to also update it here.

You can can also start the frontend or backend separately with `make api` or
`make frontend`.

### Configure database

Once your project is compiled and running (you will see several messages from
frontend_1, api_1 etc), navigate to `http://localhost:8529`. You should see the
login page for the [ArangoDB](https://www.arangodb.com/) web interface. Log in
with the DB_USER and DB_PASSWORD you defined in your environment.

If this is your first time running the project, you will need to create the
cybercrime database and a collection for reports. Click 'Select DB:\_system' to
log into the web interface. In the left hand navigation bar, click 'Databases',
then 'Add Database' and name it 'cybercrime'. If you click 'DB: \_SYSTEM' on
the top right of the page, or log out and log back in, you'll be taken back to
the log in screen where you can select your newly created cybercrime database
from the drop down menu. Do this!

Once you have successfully logged into the cybercrime database, select
'Collections' in the left hand navigation bar, then 'Add Collection' and name
it 'reports'.

Once you've created you cybercrime database with a reports collection, you're
ready to explore the project!

### Explore the project

ArangoDB will be on `localhost:8529`, the application frontend on
`localhost:3000`, and the API on `localhost:3000/graphql`. You should be able
to walk through the frontend, add data, and view it using the API or database
interface.

Thank you for your interest! :tada:
