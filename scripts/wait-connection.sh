#!/bin/bash

databases=("postgres" "mysql" "mssql" "mariadb")
ports=(5432 3306 1433 3307)

for i in "${!databases[@]}"; do
  host=${databases[$i]}
  port=${ports[$i]}
  while ! nc -z $host $port; do
    echo "Waiting for $host connection on port $port..."
    sleep 1
  done
  echo "$host connection established on port $port!"
done

npm run drop
npm run start
