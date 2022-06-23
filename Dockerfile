FROM node:16-alpine as builder

WORKDIR /app

COPY package.json /app
RUN yarn

COPY . /app
EXPOSE 3000
RUN yarn build