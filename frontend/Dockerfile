FROM node:11-alpine AS build-env
ARG RAZZLE_GOOGLE_ANALYTICS_ID
ENV RAZZLE_GOOGLE_ANALYTICS_ID $RAZZLE_GOOGLE_ANALYTICS_ID
ADD . /app
WORKDIR /app
RUN npm ci
RUN npm run extract
RUN npm run compile
RUN npm run build

FROM node:11-alpine
MAINTAINER Mike Williamson <mike.williamson@cds-snc.ca>
USER node

ENV NODE_ENV production

COPY --from=build-env --chown=node /app /app
WORKDIR /app
EXPOSE 3000
CMD npm start
