## Any valid docker file starts from FROM

# to select the base image

# CMD => should only be used once, if used multiple the last one will be used

# RUN => while building image

# CMD => to run command while container starts

# ENV <key> <value>

# ADD <hostpath> <containerpath>

# COPY <hostpath> <containerpath>

ADD lets you copy file remotely

COPY lets you copy file locally

docker discourages the use of ADD

# ENTRYPOINT

# WORKDIR => sets working directory
