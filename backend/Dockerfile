# Stage 1: Build the application
FROM eclipse-temurin:17-jdk-alpine AS build

WORKDIR /app

# Copy Maven/Gradle wrapper and project files
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn
COPY src ./src

# Build the fat jar
RUN ./mvnw clean package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the jar from the build stage
COPY --from=build /app/target/project-finder-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]

