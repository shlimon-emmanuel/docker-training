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
docker rm welcome-to-docker
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

### 5. Accès au conteneur
```bash
docker exec -it welcome-to-docker-v2 sh
```
![Accès conteneur](./docker/Jour01/job02/images/access_container.jpg)

### 6. Modification du code
J'ai modifié le fichier `src/App.js` pour personnaliser l'application :
```javascript
// Modification du message d'accueil
const shareMessage = "I just modified my first Docker container!";

// Modification du texte affiché
<h1 style={{ marginBottom: "0px" }}>Bravo Emmanuel!!!</h1>
<p style={{ marginTop: "10px", marginBottom: "50px" }}>
  Vous avez modifié votre premier conteneur Docker avec succès.
</p>
```

### 7. Reconstruction et test des modifications
```bash
# Arrêt et suppression des anciens conteneurs
docker stop welcome-to-docker-v2 welcome-to-docker-v2-modified
docker rm welcome-to-docker-v2 welcome-to-docker-v2-modified

# Reconstruction de l'image avec les modifications
docker build -t welcome-to-docker-v2:modified .

# Lancement du nouveau conteneur
docker run -d -p 8088:3000 --name welcome-to-docker-v2 welcome-to-docker-v2:modified
```
![Modified Running](./docker/Jour01/job02/images/modif.png)

### 8. Publication de l'image sur Docker Hub
```bash
# Connexion à Docker Hub
docker login

# Tagger l'image pour Docker Hub
docker tag welcome-to-docker-v2:modified emmanuelshlimon/welcome-to-docker:v1

# Publier l'image
docker push emmanuelshlimon/welcome-to-docker:v1
```
![Push Docker Hub](./docker/Jour01/job02/images/push_dockerhub.png)

### 9. Test de l'image d'un collègue
```bash
# Pull de l'image du collègue
docker pull [username-collegue]/welcome-to-docker:v1

# Lancement de son image
docker run -d -p 8090:3000 --name welcome-to-docker-collegue [username-collegue]/welcome-to-docker:v1

# Modification et republication
docker build -t emmanuelshlimon/welcome-to-docker:v2-from-[username-collegue] .
docker push emmanuelshlimon/welcome-to-docker:v2-from-[username-collegue]
```

> Image originale créée par [Nom du collègue]

## Job 03 - Super Mario Docker

### 1. Recherche et découverte de l'image
#### Méthode 1 : Via le terminal Docker
```bash
# Recherche de l'image dans Docker Hub
docker search pengbai/docker-supermario
```
![Search Terminal](./docker/Jour01/job03/images/search_terminal.jpg)

### 2. Récupération de l'image
#### Méthode 1 : Via le terminal
```bash
# Pull de l'image via le terminal
docker pull pengbai/docker-supermario
```
![Pull Terminal](./docker/Jour01/job03/images/pull_terminal.jpg)

### 3. Lancement du conteneur
#### Méthode 1 : Via le terminal
```bash
# Lancement avec le port 8600
docker run -d -p 8600:8080 --name supermario pengbai/docker-supermario
```
![Run Terminal](./docker/Jour01/job03/images/run_terminal.jpg)

#### Méthode 2 : Via Docker Desktop
[Capture d'écran montrant les étapes dans Docker Desktop]
![Run Desktop](./docker/Jour01/job03/images/run_desktop.jpg)

### 4. Test du jeu
[Captures d'écran du jeu en cours]
![Game Play 1](./docker/Jour01/job03/images/gameplay1.jpg)
![Game Play 2](./docker/Jour01/job03/images/gameplay2.jpg)
![Game Play 3](./docker/Jour01/job03/images/gameplay3.jpg)

### 5. Arrêt du conteneur
#### Méthode 1 : Via l'ID du conteneur
```bash
# Trouver l'ID du conteneur
docker ps

# Arrêter le conteneur avec l'ID
docker stop 10f8754a8e1a
```
![Stop Container ID](./docker/Jour01/job03/images/stop_id.jpg)

#### Méthode 2 : Via le nom du conteneur
```bash
# Arrêter le conteneur avec le nom
docker stop supermario-hd
```
![Stop Container Name](./docker/Jour01/job03/images/stop_name.jpg)

### 6. Suppression du conteneur
#### Méthode 1 : Via le terminal (méthode utilisée)
```bash
# Supprimer le conteneur avec l'ID ou le nom
docker rm supermario-hd
```
![Remove Container Terminal](./docker/Jour01/job03/images/rm_terminal.jpg)

#### Méthode 2 : Via Docker Desktop
> Note : Cette méthode est également possible en utilisant l'interface graphique de Docker Desktop, en allant dans l'onglet "Containers" et en cliquant sur l'icône poubelle.

### 7. Suppression de l'image
#### Méthode 1 : Via le terminal (méthode utilisée)
```bash
# Supprimer l'image
docker rmi pengbai/docker-supermario
```
![Remove Image Terminal](./docker/Jour01/job03/images/rmi_terminal.jpg)

#### Méthode 2 : Via Docker Desktop
> Note : Cette méthode est également possible en utilisant l'interface graphique de Docker Desktop, en allant dans l'onglet "Images" et en cliquant sur l'icône poubelle.

