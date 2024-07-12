# Using Docker cli

### create a docker network

```
docker network create node-redis-nw
```

### Run a redis container

```
docker run --rm --name devredis -p 6379:6379 --network node-redis-nw redis
```

### Build an image of the node application

```
docker build -t node-app:2.0.0 .
```

### Run the node app image in a container

`use -v $(pwd):/app in development only`

#### exposing node-app directly

```
docker run --rm -p 3000:3000 -e PORT=3000 -e REDIS_PORT=6379 -e REDIS_HOST=devredis --network node-redis-nw --name node-app node-app:2.0.0
```

#### exposing node-app through nginx

```
docker run --rm -e PORT=3000 -e REDIS_PORT=6379 -e REDIS_HOST=devredis --network node-redis-nw --name node-app node-app:2.0.0
```

##### Build the nginx container

```
docker build -t testnginx:1.0.0  ./nginx
```

##### Run the nginx container

```
docker run --rm --name devnginx -p 8080:80 --network node-redis-nw testnginx:1.0.0
```

# Using docker compose file

```
docker-compose up
```

## Examples

###### 1. Take the image name from the cli

**_Build an image of the node application by passing image name and version as argument_**

```
docker build -t node-app:2.0.0 --build-arg NODE_IMAGE=node:18-alpine3.15 -f imageFromArg/Dockerfile .
```

```
docker run --rm -p 3000:3000 -e PORT=3000 -e REDIS_PORT=6379 -e REDIS_HOST=devredis --network node-redis-nw --name node-app node-app:2.0.0
```

###### 2. Take the upstream value as argument

```
docker build -t node-app:2.0.0 -f composeWithUpstreamFromArg/Dockerfile .
```

```
docker run --rm -e PORT=3000 -e REDIS_PORT=6379 -e REDIS_HOST=devredis --network node-redis-nw --name node-app node-app:2.0.0
```

```
docker build -t testnginx:1.0.0 --build-arg UPSTREAM=node-app -f composeWithUpstreamFromArg/nginx/Dockerfile .
```

```
docker run --rm --name devnginx -p 8080:80 --network node-redis-nw testnginx:1.0.0
```
