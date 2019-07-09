# étape de build
FROM node:lts-alpine as build-stage

# définit le dossier 'app' comme dossier de travail
WORKDIR /opt/app

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY trpgvue/package*.json ./

# installe les dépendances du projet
RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY trpgvue /opt/app

# construit l'app pour la production en la minifiant
RUN npm run build

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]