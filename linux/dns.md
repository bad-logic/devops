#### DNS Resolves domain into ip

##### DNS heirarchy

                root level


    .com            .org         .net   | top level domain


    .diagonal                           | second level domain


    .www                                | sub domain


    .                                   | host

A Record
NAME -> ip
abc.com => 192.168.100.1

CNAME Record
www.abc.com abc.com

MX Record
main exchange

TXT Record
Description about domain

PTR Record

NS

tools : dig
dig diagonal.solutions NS
dig diagonal.solutions TXT
dig diagonal.solutions MX
dig +short diagonal.solution => check only ip

check if dns resolved

dig ip @ 8.8.8.
