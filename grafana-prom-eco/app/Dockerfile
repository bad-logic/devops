FROM node:lts-alpine AS packageInstaller

WORKDIR /home/usr

COPY ./package*.json ./

RUN npm install


FROM node:lts-alpine AS program

WORKDIR /home/usr

COPY ./src ./src
COPY package.json ./package.json
COPY --from=packageInstaller ./home/usr/node_modules ./node_modules

CMD [ "npm","run","dev" ]