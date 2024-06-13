### Networks

1. Bridge => default
2. Overlay
3. Host

Bridge Network
can be created multiple times

Overlay Network
communication between docker and docker daemon
used in orchestration (docker swarm)

Host Network
can be created one time only

### create docker network

docker network create <network_name>

### list docker networks

docker network ls

### inspect docker network

docker network inspect network_name_or_id
docker inspect network_name_or_id

### attach network to running container

docker network connect <network_name> <container_name>

### detach network to running container

docker network disconnect <network_name> <container_name>
