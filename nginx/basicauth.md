auth-basic-user-file /etc/nginx/.htpasswd

basic auth packages:

1. apache2-utils - Debian/ubuntu
2. httpd-tools - Centos/Redhat

create a password file

```
    htpasswd -c /etc/nginx/.htpasswd <user1>
```

to add additional username hashed password pairs

```
    htpasswd /etc/nginx/.htpasswd <user2>
```

add this block to the routes that needs protection

```
    auth_basic "Protected Area";
    auth_basic_user_file /etc/nginx/.htpasswd;
```
