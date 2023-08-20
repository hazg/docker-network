FROM node:18

RUN apt update
RUN apt -y \
  install \
  curl \
  iputils-ping

WORKDIR /app

CMD \
  npm install; \
  node --watch two.js