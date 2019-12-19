FROM node:12.14-alpine AS build-env
WORKDIR /app
COPY . .

ARG GOOGLE_ANALYTICS_ID
ENV GOOGLE_ANALYTICS_ID $GOOGLE_ANALYTICS_ID
ENV HUSKY_SKIP_INSTALL true

RUN npm ci
RUN npm run build

FROM node:12.14-alpine
LABEL maintainer="stephen.astels@cds-snc.ca"
USER node

ENV NODE_ENV production

COPY --from=build-env --chown=node /app /app
WORKDIR /app
EXPOSE 3000
CMD ["node",  "server.js"]
