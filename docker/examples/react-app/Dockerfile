FROM node:16.4.2-alpine3.14 as builder

LABEL MAINTAINER=roshan.bhattarai

# creates working directory for the application
WORKDIR /app

COPY ["package.json","yarn.lock","./"]

RUN yarn 

COPY . .

RUN yarn build

# using serve package
# FROM node:16.4.2-alpine3.14

# WORKDIR /app

# RUN yarn global add serve 

# COPY --from=builder /app/dist ./build

# CMD ["serve","build"]


# using nginx
FROM nginx:alpine

COPY --from=builder /app/dist /var/www/html/roshan

COPY nginx.conf /etc/nginx/nginx.conf


