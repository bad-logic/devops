```bash
$ adduser <username>
$ addgroup <groupname>
$ groupmod -n <newnanem> <oldname>
$ gpasswd -a <user1> <group> // adding user to a group
$ gpasswd -A <user1> <group> // add user to group and make the user admin of that group
$ gpasswd -d <user1> <group> // removing user from a group
$ usermod -a -G <group1>,<group2> <user>
$ newgrp <groupName> // temporarily changing group context, newGroup will be the primary group
```

#### File Permissions:

`d rwx r-x r-x dirA`

|                  |      |
| ---------------- | ---- |
| type of object   | d    |
| owner permission | rwx  |
| group permission | r-x  |
| other permission | r-x  |
| object name      | dirA |

> To go inside directory, execute permission is needed.

| Permission         | value |
| ------------------ | ----- |
| Read               | 4     |
| Write              | 2     |
| Execute            | 1     |
| read,write         | 6     |
| read,execute       | 5     |
| read,write,execute | 7     |

#### changing permissions

```bash
$ chmod g+w <file> // g -> group +w add write permission
$ chmod g-w <file> // g -> group -w remove write permission
$ chmod u+x,g+rwx,o-r <file> // add execute to user/owner, add read write execute to group and remove read from others
$ chmod u=rwx,g=rw,o-rwx <file> // set user/owner to rwx group to rw and remove all permissions for others
$ chmod 760 <file> // set user/owner to rwx group to rw and remove all permissions for others
$ chown <user> <file> // change owner
$ chown :<group> <file> // change group
$ chown <user>:<group> <file> // change owner and group
$ chown -R <user> <directory>/\* // change owner for all nested files and dirs inside the directory -R implies recursive
```
