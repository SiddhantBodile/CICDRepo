#!/bin/bash

# Check if PM2 is running
if pm2 pid > /dev/null 2>&1; then
    # If PM2 is running, restart your Node.js app
    pm2 restart nodejs-app
else
    # If PM2 is not running, start your Node.js app
    cd /var/www/html/nodeproject
    pm2 start app.js --name nodejs-app
fi
