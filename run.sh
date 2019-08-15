#!/bin/bash
docker build -t vue/trpgvore .
docker run -p 80:80 --rm --name trpgvore vue/trpgvore
