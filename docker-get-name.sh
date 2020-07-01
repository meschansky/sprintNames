#!/bin/sh
IMAGE="node:current-alpine"
DOMAIN=$1
FIRST_LETTER=$2

install_modules() {
    docker run -it --rm -w /srv -v $PWD:/srv ${IMAGE} npm install .
}

test -d node_modules || install_modules
docker run -it --rm -w /srv -v $PWD:/srv ${IMAGE} node src/sprintNames.js $DOMAIN $FIRST_LETTER