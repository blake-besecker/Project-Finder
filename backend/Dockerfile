FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app

# Copy only pom.xml first for caching
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .

# Pre-download dependencies
RUN ./mvnw dependency:go-offline -B

# Then copy the rest of the source
COPY src ./src

# Build
RUN ./mvnw clean package -DskipTests

# Run stage
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]


