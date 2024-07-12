FROM nginx:alpine

ARG UPSTREAM 
ENV UPSTREAM=${UPSTREAM}

WORKDIR /app

COPY ../../nginx-entrypoint.sh ./

RUN chmod +x ./nginx-entrypoint.sh

ENTRYPOINT [ "./nginx-entrypoint.sh" ]

EXPOSE 80

CMD ["nginx","-g","daemon off;"]