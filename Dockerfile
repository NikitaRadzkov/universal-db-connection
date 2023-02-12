FROM node:16-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN apk update && apk add bash

RUN apk add --no-cache git

RUN npm install -g node-gyp

RUN npm install

COPY . .

# CMD [ "npm", "run", "start" ]
