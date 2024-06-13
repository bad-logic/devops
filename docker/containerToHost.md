### connect to host from inside the container

`curl host.docker.internal:3000` from inside the container will connect to the host's 3000 port

`docker run -it --add-host myapp:host-gateway --name alpinetestcat alpine sh`
from inside the container access the host machine any port using `curl myapp:<port>`
also it will add an entry to /etc/hosts

or manually add an entry in the /etc/hosts inside container
