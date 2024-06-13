#### Docker volumes

## check volumes

docker volume ls

## inspect volumes

docker inspect volume <vol-name>
docker inspect <vol-name>

## Types

1. Bind mounts
2. Named volumes

** Bind Mounts **

two way bind

```
docker run -it -v $(pwd):/app alpine sh
```

readonly or write only see docs

```
docker run -it -v $(pwd):ro:/app alpine sh
```

** Named volumes **
can be shared with any container
any container can be started with this volume

1. create volume

```
docker volume create <vol-name>
```

2. mount volume

```
docker run -it -v <vol-name>:/app alpine sh
```

# docker run with user

```
docker run -u www-data alpine sh
```

# map host id with container id

```
docker run -u host_user_id:host_group_id -v $(pwd):/var/www/html composer:2.3.9 sh
```

Example
`docker run -it -u $UID:$GID -v $(pwd)/laravel:/var/www/html composer:2.3.9 sh`
`docker run -it -u 501:20 -v $(pwd)/laravel:/var/www/html composer:2.3.9 sh`

create laravel project

```
docker run -it -u $UID:$GID -v $(pwd)/laravel:/var/www/html composer:2.3.9 sh
cd var/www/html
composer create-project laravel/laravel project1
cd project1
php artisan serve --host 0.0.0.0 --port 8080
```

### mysql using named volume

```
docker run -it -v mysql_vol:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=test -e MYSQL_USER=user1 -e MYSQL_PASSWORD=password --name mysql_container mysql sh
```

```
docker run -it --platform linux/x86-64  -v mysql_vol:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=test -e MYSQL_USER=user1 -e MYSQL_PASSWORD=password --name mysql_container mysql:5.7 sh
```
