#!/bin/sh

if ! [ -x "$(npm -v pnpm)" ]; then
  npm install -g pnpm nodemon && npm install -g npm@9.6.3
fi

exec "$@"