FROM node:18.13.0-alpine3.17 AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM alpine

WORKDIR /app

COPY --from=builder /app/dist/ /build/

ENTRYPOINT ["sh", "-c", "cp -R /build/* /app && sleep 1"]