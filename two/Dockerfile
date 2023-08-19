FROM node

WORKDIR /app
COPY src/package.json .
COPY src/package-lock.json .
RUN npm install

CMD node main.js