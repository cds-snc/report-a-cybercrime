FROM node:12.15-alpine AS build-env
WORKDIR /app
COPY . .

ARG REACT_APP_GOOGLE_ANALYTICS_ID
ENV REACT_APP_GOOGLE_ANALYTICS_ID $REACT_APP_GOOGLE_ANALYTICS_ID

ARG REACT_APP_VERSION
ENV REACT_APP_VERSION $REACT_APP_VERSION

ENV HUSKY_SKIP_INSTALL true

RUN npm ci
RUN npm run build

FROM node:12.15-alpine
LABEL maintainer="stephen.astels@cds-snc.ca"
RUN apk add --no-cache openssl
USER node

ENV NODE_ENV production

COPY --from=build-env --chown=node /app /app
WORKDIR /app
EXPOSE 3000
CMD ["node",  "server.js"]
