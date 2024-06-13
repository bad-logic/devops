# docker compose

#### run a docker compose file

```
docker-compose up
```

by default uses docker-compose file

```
docker-compose up -f myfile.yaml
```

##### Run docker compose in detached mode

```
docker-compose up -d
```

##### Run only a specific service from the compose file

```
docker-compose up <service_name>
```

##### build images from context of service

```
docker-compose up --build
```

##### get inside a service

```
docker-compose exec <service_name>
```

##### get logs

```
docker-compose logs <service_name>
```

#### list running services

```
docker-compose ps
```

#### validate docker-compose file

```
 docker-compose config
```

```
 docker-compose config -f <compose_file>
```
