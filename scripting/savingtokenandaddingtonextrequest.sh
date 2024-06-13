#!/bin/bash

BASE_URL="https://auth.xyz.com"

AUTH_URL=$BASE_URL"/login"

TAXES=$BASE_URL"/taxes"

if [ ! -x $(which curl)  ];then
        echo "Please install curl command to execute the task"
        exit 1
fi

#TOKEN=`$(which curl) -s -X POST @$PWD/payload.json ${AUTH_URL} -H 'Content-Type: application/json'`
TOKEN=`$(which curl) -s -X POST -d  @$PWD/payload.json ${AUTH_URL} -H 'Content-Type: application/json' | $(which jq) '.token' | sed 's/"//g'`

$(which curl) -s ${TAXES} -H "Authorization: Bearer ${TOKEN}"