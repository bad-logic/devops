apt-get install certbot

apt-get install python3-certbot-nginx => certbot for nginx

challenges => http, DNS

http challenge => publicly available sites
DNS challenge => not publicly available sites

certbot certonly => for port 80
certbot certonly --http-01-port 2218

follow the instruction

curl https://www.xyz.com -I
curl https://www.xyz.com -I -vvv
