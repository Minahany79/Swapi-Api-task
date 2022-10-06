    # Node server
FROM node:12-alpine as node-server
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]

