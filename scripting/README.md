echo $Shell => check which shell is available

shebang
bash #!/bin/bash
sh #!/bin/sh
python #!/usr/bin/python

variable declaration

MY_VAR="hello"
MY_NUM=1

$MY_VAR => read value of the variable

echo $MY_VAR

assign command to the variable

USERNAME = $(whoami)

get input

read PASSWORD

echo $PASSWORD

less than (numeric comparision) -lt (string comparision) <
greater than -gt >
equal -eq =
not equal -ne !=
less or equal -le x
greater or equal -ge x

conditionals

if/else

example: if [ 1 -eq 1 ]; then echo "TRUE";fi
if [ 1 -eq 0 ]; then echo "TRUE";else echo "FALSE";fi
if [ -d hello ]; then echo 'exist';else mkdir hello;fi => create if folder exists else echo exists
if [ ! -d myfolder ]; then mkdir myfolder;fi

switch case

example:
\#! /bin/bash
MY_FRUIT="APPLE"
case $MY_FRUIT in
"APPLE") echo "APPLE";;
"MANGO") echo "MANGO";;
esac

make file executable
chmod +x filename

echo "apple" | tr [:lower:] [:upper:] => lower to upper case tr-> transpose

payload.json
{
"email":"admin@admin.com",
"password":"Password@123",
"role_group":"master"
}

curl -X POST -d @payload.json https://auth.xyz.com/login -H 'Content-Type: application/json'
curl -s -X POST -d @payload.json https://auth.xyz.com/login -H 'Content-Type: application/json'
curl -s -X POST -d @payload.json https://auth.xyz.com/login -H 'Content-Type: application/json' | awk -F':' '{print $2}' | awk -F ',' '{print $1}'^C

jq tool for manipulating json [apt-get install jq]

curl -s -X POST -d @payload.json https://auth.xyz.com/login -H 'Content-Type: application/json' | jq '.token'

for loop

for i in 1 2 3;do echo $i;done
for i in `seq 1 100`;do echo $i;done
for i in `cat payload.json`;do echo $i;done
for i in `cat payload.json`;do echo $i | tr [:lower:] [:upper:];done
for i in `cat payload.json`;do echo $i | tr ',' '\n';done

while loop
cat payload.json | while read line;do echo $line;done

sleep
sleep 1 && echo "awake now"

ps aux | grep sleep => list processes with sleep name

ps aux | grep sleep | awk '{print $2}' | xargs kill -9 => kill all processes with sleep name
