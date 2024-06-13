install

apt-get update && apt-get install nginx -y

configuration files => /etc/nginx/nginx.conf

additional sites configurations => /etc/nginx/sites-enabled

# make changes here

/etc/nginx/sites-available

# create symlink for sites-available/<conf_file> in sites-enabled

ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled

# check if the configuration files are correct

nginx -t

nginx -s reload

# reload nginx after changing configuration files

systemctl reload nginx
