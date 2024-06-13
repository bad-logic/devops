DEBUGGING AND TROUBLESHOOTING

OSI layer

Application => HTTP, DNS (53/UDP)
Presentation => Display music, video
Session => Session
Transport => TCP & UDP
Network => Ip address, Routing
Data Link => MAC Address
Physical => wire, wireless

Publicly available dns
google => 8.8.8.8 8.8.4.4
cloudfare => 1.1.1.1 9.9.9.9

DNS(Records => A,NS,MX,TXT,CNAME) => resolve domain into ip
A =>
NS =>
MX => mail
TXT => textual values for spf , dns challenges
CNAME => aliasing name

`diagonal.software A 1.2.3.4`
`www.diagonal.software CNAME diagonal.solution`

network tools:
ping google.com
dig google.com =>
dig google.com @8.8.8.8 => check using another dns server
dig google.com mx => check for mx record

traceroute google.com => shows the path to reach the destination
tracert

telnet listinfo.de 80 => check if the port is listening or not

curl -vvv <https_site> => check tls handshake

wget => file downloads

tcpdump => check traffic
wireshark (gui tool for tcpdump)

ss -nlpt or netstat => lists ports, server is listening in

system tools:
du => disk utilization
du -sh
du -h

free -m => check memory

top => cpu utilization

ps => running processes
ps aux

kill <process_id>
kill -9 <process_id>
/proc => folder in root

application level troubleshoot:
tail -f /var/log/syslog
tail -n100 /var/log/syslog
journalctl -u <service_name> -f
systemctl status <service_name>
systemctl ls-active

find <find_in_folder> -type d => d -> directory
find ./ -type d -mtime +7 => older than seven days
find ./ -type d -name [0-9]\*

DHCP: dynamic host configuration protocol (IP Address,Subnet mask, gateway, DNS)

etc/resolv.conf

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
`roshan@mac:~$`
`roshan@mac:~#`

### list of available shells

cat /etc/shells

### time from which the server has been up

uptime

### logged in users list

w
