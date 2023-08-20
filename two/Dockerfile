FROM node:18

RUN apt update
RUN apt -y \
  install \
  curl \
  iputils-ping

WORKDIR /app
COPY src/package.json .
COPY src/package-lock.json .
RUN npm install

CMD node --watch two.js