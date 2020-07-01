#!/bin/sh
DOMAIN=$1
FIRST_LETTER=$2

test -d node_modules || npm install .

node src/sprintNames.js $DOMAIN $FIRST_LETTER