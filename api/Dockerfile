FROM node:11-alpine
MAINTAINER Mike Williamson <mike.williamson@cds-snc.ca>

ENV NODE_ENV production

WORKDIR /app
ADD . .

USER node
EXPOSE 3000
CMD npm start

