#!/bin/bash
docker build -t vue/trpgvore .
docker run -it -p 8080:8080 --rm --name trpgvore vue/trpgvore
