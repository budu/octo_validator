#!/bin/bash

export NODE_OPTIONS=--openssl-legacy-provider

cd server/
npm run dev &
# To run in build mode use:
# npm run build
# npm start

cd ../client/
npm start
