#!/bin/bash

databases=("postgres" "mysql" "mssql" "mariadb" "oracle")
ports=(5432 3306 1433 3307 1521)

for i in "${!databases[@]}"; do
  host=${databases[$i]}
  port=${ports[$i]}
  count=0
  while ! nc -z $host $port; do
    if [ $count -eq 120 ]; then
      echo "Could not establish connection to $host on port $port after 2 minutes. Exiting."
      exit 1
    fi
    echo "Waiting for $host connection on port $port..."
    sleep 1
    ((count++))
  done
  echo "$host connection established on port $port!"
done

npm run drop
npm run start
