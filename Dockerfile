FROM node:16-alpine

RUN apk update && apk add --no-cache gcc g++ make python3

WORKDIR /opt/app

COPY package*.json ./

RUN apk update && apk add bash

RUN apk add --no-cache git

RUN npm install -g node-gyp

RUN rm -rf node_modules && npm cache clean --force

RUN npm install

COPY . .
