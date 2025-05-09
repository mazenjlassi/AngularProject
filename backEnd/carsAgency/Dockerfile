# Utilisation de l'image officielle OpenJDK
FROM openjdk:21-jdk-slim

# Définition du répertoire de travail
WORKDIR /app

# Copier le fichier JAR dans le conteneur
COPY target/carsAgency-0.0.1-SNAPSHOT.jar carsAgency.jar

# Exposer le port de l'application
EXPOSE 8080

# Commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "carsAgency.jar"]
