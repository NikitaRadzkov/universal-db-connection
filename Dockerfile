FROM node:16-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN apk add --no-cache git

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]