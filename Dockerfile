FROM node:20-alpine

WORKDIR /parse
COPY . .
RUN npm install

EXPOSE 1337

CMD [ "node", "--import=tsx", "src/server/server.ts" ]
