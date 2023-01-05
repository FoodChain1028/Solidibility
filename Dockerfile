FROM node:16-alpine

EXPOSE 4000

COPY . /app
WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh
RUN apk add --no-cache python3 make g++
RUN corepack enable
RUN yarn install:prod
RUN yarn build

CMD ["yarn", "deploy"]