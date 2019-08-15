## étape de préliminaire
FROM node:lts-alpine as dev-stage
# définit le dossier 'opt' comme dossier de travail
WORKDIR /opt
# copie 'package.json' et 'package-lock.json' (si disponible)
COPY trpg/package*.json ./
RUN npm install -g @quasar/cli

## étape de build
FROM dev-stage as build-stage
# installe les dépendances du projet
RUN npm install
# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY trpg/ /opt
# construit l'app pour la production en la minifiant
RUN quasar build

## étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /opt/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]