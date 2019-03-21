FROM node:11-alpine
LABEL maintainer="mike.williamson@cds-snc.ca"

ENV NODE_ENV production

WORKDIR /app
COPY . .

USER node
EXPOSE 3000
CMD ["npm",  "start"]
