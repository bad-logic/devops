FROM alpine:latest

WORKDIR /app

ARG BUILD_IMAGE 
LABEL MAINTAINER=roshan.bhattarai
# pass --build-arg BUILD_IMAGE=1.2 while building
ENV BUILD_IMAGE=${BUILD_IMAGE}

RUN apk update && apk add curl

COPY . .

CMD ["echo" ,"Hello World"]