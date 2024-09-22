FROM ubuntu:20.04

RUN apt update \
    && apt install openssh-server -y \
    && apt clean \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/* \
    && service ssh start

EXPOSE 22

CMD ["/usr/sbin/sshd","-D"]
