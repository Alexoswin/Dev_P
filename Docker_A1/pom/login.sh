#!/bin/bash

username="$1"
password="$2"

if [[ "$username" == "oswin" && "$password" == "oswin" ]]; then
    echo "Hello $username"
else
    echo "Invalid details"
fi

