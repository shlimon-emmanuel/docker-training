# Docker Training

## Job 01 - Welcome to Docker (Part 1)

### 1. Installation et Configuration
- Installation de Docker
- Création du compte Docker
- Connexion au compte Docker

### 2. Commandes de base
```bash
docker --version
```
![Version Docker](./docker/Jour01/job01/images/docker--version.JPG)

### 3. Construction et utilisation du conteneur
```bash
# Pull de l'image
docker pull docker/welcome-to-docker

# Construction du conteneur
docker build -t welcome-to-docker .
```
![Build Image](./docker/Jour01/job01/images/build.JPG)

```bash
# Lancement du conteneur
docker run -d -p 8088:80 welcome-to-docker
```
![Run Container](./docker/Jour01/job01/images/run_container.JPG)

### 4. Suppression
```bash
# Suppression du conteneur
docker rm [ID_CONTENEUR]
```
![Delete Container](./docker/Jour01/job01/images/Delete.JPG)

## Job 02 - Welcome to Docker (Part 2)

### 1. Configuration du projet
```bash
# Vérification de la position dans le projet
pwd
```
![Position dossier](./docker/Jour01/job02/images/pwd.png)

### 2. Analyse des fichiers
J'ai analysé le Dockerfile du projet qui contient les instructions suivantes :

```dockerfile
# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]
```

### 3. Construction et lancement du conteneur
```bash
# Construction de l'image
docker build -t welcome-to-docker-v2 .

# Lancement du conteneur avec un nom spécifique
docker run -d -p 8088:3000 --name welcome-to-docker-v2 welcome-to-docker-v2
```
![Build et Run](./docker/Jour01/job02/images/build_v2.jpg)

### 4. Vérification du conteneur
```bash
# Vérification des conteneurs en cours d'exécution
docker ps

# Vérification des logs
docker logs welcome-to-docker-v2
```
![Vérification conteneur](./docker/Jour01/job02/images/psimages.jpg)
