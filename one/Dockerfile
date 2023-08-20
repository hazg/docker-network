FROM node:18

WORKDIR /app

COPY src/package.json .
COPY src/package-lock.json .
RUN npm install

CMD node --watch one.js