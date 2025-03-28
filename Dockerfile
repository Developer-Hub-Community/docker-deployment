FROM node:18-alpine

RUN apk update && apk add --no-cache curl

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
