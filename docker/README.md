docker run hello-world => pull from docker hub registry
docker run gitlab.com/hello-world => pull from gitlab registry

---

docker daemon ----> registry
|
docker client(cli)

---

docker daemon listens in unix socket
curl --unix-socket /var/run/docker.sock http://v1.4.1/containers/json
curl --unix-socket /var/run/docker.sock http://v1.4.1/images/json

-f => filter

docker ps -f name=<container_name> => filter running containers
docker ps -af name=<container_name> => filter from all stopped and running
docker ps -aqf name=<container_name> | xargs docker container stop

```
understanding interfaces
0.0.0.0
127.0.0.1
```

docker run nginx:alpine
docker run --name=myenginx nginx:alpine
docker run --rm --name=myenginx -p 8080:80 nginx:alpine # remove on container stop

docker run --rm --name=myenginx -p 127.0.0.1:8080:80 nginx:alpine
docker run --rm --name=myenginx -p 10.2.4.5:8080:80 nginx:alpine

# environment variables

docker run -it --env-file=.env -e MY_FLAG=roshan alpine sh

--env-file=<envfilename>
-e key=value

# change hostname

docker run --name=myenginx -p 8080:80 --hostname=myapp nginx:alpine

# working directory

docker run --name=myenginx -p 8080:80 --hostname=myapp --working-dire=/usr/app nginx:alpine

# docker container descriptions

docker inspect <container_id>
docker inspect <image_id>

docker history <container_id> => container layers

docker cp source destination

container_name:path_inside_container

# create zip file from image

docker save image_name > filename.tar.gz
docker load -i filename.tar.gz

### watch the image history

docker history <image_id>

### Monitor container

docker stats
