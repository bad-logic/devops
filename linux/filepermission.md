## File Permissions:

#### File Types

| File Type | Meaning |
| --- | --- |
| - | File |
| d | Directory |
| l | Symbolic Link |

#### User Types

| User | Meaning |
| --- | --- |
| u(user) | user access |
| g(group) | group access |
| o(other) | other access |
| a(all) | user, group, and other access |

#### Operators 

| Operator | Meaning |
| --- | --- |
| + | add specified permissions |
| - | remove specified permissions |
| = | set the specified permissions |


#### Permissions

| Permission | Number (Octal) | Meaning |
| --- | --- | --- |
| r | 4 | read |
| w | 2 | write |
| x | 1 | execute |
| - | 0 | not allowed |

| Octal Permission Representation | Meaning | Ref |
| --- | --- | --- |
| **0** | No permission | --- |
| **1** | Execute permission | --x |
| **2** | Write permission | -w- |
| **3** | Execute and write permission: 1 (execute) + 2 (write) = 3 | -wx |
| **4** | Read permission | r-- |
| **5** | Read and execute permission: 4 (read) + 1 (execute) = 5 | r-x |
| **6** | Read and write permission: 4 (read) + 2 (write) = 6 | rw- |
| **7** | All permissions: 4 (read) + 2 (write) + 1 (execute) = 7 | rwx |


#### Check for the permissions

```bash
$ ls -l
```

```bash
total 8
drwxr-xr-x  15 bad-logic  staff  480 Nov 17 16:36 api-gateway
-rwxr--r--   1 bad-logic  staff  258 Nov 21 11:03 [run.sh](http://run.sh/)
drwxr-xr-x  27 bad-logic  staff  864 Nov 18 11:20 service-center-frontend
drwxr-xr-x  10 bad-logic  staff  320 Nov 28 09:54 terminal
drwxr-xr-x   9 bad-logic  staff  288 Nov 19 14:54 terminal-test
drwxr-xr-x  30 bad-logic  staff  960 Nov 17 16:56 user-administration-service
```

Explanation:

```markdown
drwxr-xr-x  15 bad-logic  staff  480 Nov 17 16:36 api-gateway

d => directory

rwxr-xr-x => File Mode
	wxr => write, execute and read for the owner (bad-logic)
	xr => execute and read for everyone in the group (staff)
	x => execute for everyone else in the system

15 => Number of links
bad-logic => Owner of the file
staff => The Group the file belongs to
480 => Size of the file
Nov 17 16:36 => Time Stamp
api-gateway => The name of the file/directory
```

#### check groups in the system

```bash
$ groups
```

**create/change groups**
```bash
$ adduser <username>
$ addgroup <groupname>
$ groupmod -n <newnanem> <oldname>
$ gpasswd -a <user1> <group> // adding user to a group
$ gpasswd -A <user1> <group> // add user to group and make the user admin of that group
$ gpasswd -d <user1> <group> // removing user from a group
$ usermod -a -G <group1>,<group2> <user> // add user to groups group1 and group2
$ newgrp <groupName> // temporarily changing group context, newGroup will be the primary group
```

**Change File Permissions**

*Syntax*:
*Octal Mode:*

`chmod Octal Octal Octal filename`

*Symbolic Mode:*

`chmod who operator permission filename`

*Example*:

```bash
# Octal mode
# adding rwx to owner, read permission to group and others
chmod 744 run.sh
```

```bash
# Symbolic Mode
# add executable permission for owner of the file
chmod u+x  run.sh
```

```bash
# Symbolic Mode
# remove executable permission for owner of the file
chmod u-x run.sh
```

```bash
# Symbolic Mode
# set the permission for the owner of the file
chmod u=rwx run.sh
```

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
