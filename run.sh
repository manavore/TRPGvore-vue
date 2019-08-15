#!/bin/bash
docker build -t trpgvore/vue .
docker run -p 80:80 --rm --name front-trpg trpgvore/vue
