### DEBUGGING AND TROUBLESHOOTING

#### OSI layer

##### Application => HTTP, DNS (53/UDP)

##### Presentation => Display music, video

##### Session => Session

##### Transport => TCP & UDP

##### Network => Ip address, Routing

##### Data Link => MAC Address

##### Physical => wire, wireless

> Publicly available dns
> google => 8.8.8.8 8.8.4.4
> cloudfare => 1.1.1.1 9.9.9.9

> DNS(Records => A,NS,MX,TXT,CNAME) => resolve domain into ip
> A =>
> NS =>
> MX => mail
> TXT => textual values for spf , dns challenges
> CNAME => aliasing name

```txt
`xyz.com A 1.2.3.4`
`www.xyz.com CNAME xyz.com`
```

##### DHCP: dynamic host configuration protocol (IP Address,Subnet mask, gateway, DNS)

check dns propagation:
https://www.whatsmydns.net/

check public ip
https://whatsmyip.net/
https://whatsmyip.com/

check mail server black lists
https://mxtoolbox.com/blacklists.aspx

https://www.ipify.org/

### terminal segments

[user]@[hostname]:[PWD][local_user_account/root_user_account]

example:
`bad-logic@mac:~$`
`bad-logic@mac:~#`

### network tools:

```bash
$ ping google.com
$ dig google.com
$ dig google.com @8.8.8.8 # check using another dns server
$ dig google.com mx # check for mx record
$ traceroute google.com # shows the path to reach the destination
$ telnet xyz.com 80 # check if the port is listening or not
$ curl -vvv <https_site> # check tls handshake
$ wget <file_path> # download files
$ tcpdump # check traffic
$ netstat # lists ports, server is listening in
```

> wireshark (gui tool for tcpdump)

### system tools:

```bash
$ du # disk utilization
$ du -sh
$ du -h
$ top # cpu utilization
$ ps # running processes
$ ps aux
$ kill <process_id> # sends (15) SIGTERM, graceful termination
$ kill -9 <process_id> # sends SIGKILL (9), forceful termination
```

### application level troubleshoot:

```bash
$ tail -f /var/log/syslog
$ tail -n100 /var/log/syslog
$ journalctl -u <service_name> -f
$ systemctl status <service_name>
$ systemctl ls-active
$ find <find_in_folder> -type d => d -> directory
$ find ./ -type d -mtime +7 => older than seven days
$ find ./ -type d -name [0-9]\*
$ uptime # time from which the server has been up
$ w # logged in users list
$ cat /etc/shells # list of available shells
```
