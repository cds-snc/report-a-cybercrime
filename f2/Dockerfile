FROM node:12-alpine

WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start"]

COPY package* ./
RUN npm ci
COPY . .
