# taking image name as build argument
# --build-arg NODE_IMAGE=node:16.4.2-alpine3.14
# adding node:16.4.2-alpine3.14 as fallback image
ARG NODE_IMAGE 
FROM ${NODE_IMAGE:-node:16.4.2-alpine3.14}

LABEL MAINTAINER=roshan.bhattarai

# creates working directory for the application
WORKDIR /app

# change folder permission to node user
RUN chown -R node: /app

#run container as node user
USER node

# copy dependency file
COPY ["../package.json","../package-lock.json","./"]

# install dependencies
RUN npm ci

# copy source code file
COPY --chown=node:node ../ .

EXPOSE 3000

CMD ["npm","start"]



