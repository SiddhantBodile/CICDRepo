#!/bin/bash

# Change to your application directory
cd /var/www/nodeproject/

# Stop your Node.js application using pm2
pm2 stop nodejs-app || true
pm2 delete nodejs-app || true
