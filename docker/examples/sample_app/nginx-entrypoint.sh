#!/usr/bin/env sh

echo "Executing......"

cat > /etc/nginx/conf.d/default.conf << __EOF__
upstream node {
        server ${UPSTREAM}:3000; 
}
        
server {
    listen 80;

    location /api {
        rewrite ^/api/(.*) /\$1 break;
        proxy_pass http://node;
        }
}
__EOF__

echo "Starting appp...."
exec "$@"
