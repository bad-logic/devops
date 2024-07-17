FROM maven:3.8.5-openjdk-17-slim AS builder
WORKDIR /usr/app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
COPY ./src ./src
RUN mvn clean package -DskipTests && \
    cp target/*.jar spring.jar

FROM amazoncorretto:17-alpine3.16 AS deployment
RUN mkdir -p /var/logs/spring/
WORKDIR /usr/app
EXPOSE 8080
COPY --from=builder /usr/app/spring.jar /usr/app/spring.jar

RUN addgroup -S springgroup && adduser -S springboot -G springgroup
RUN chown -R springboot:springgroup /usr/app/
RUN chown -R springboot:springgroup /var/logs/spring/

USER springboot

ENTRYPOINT ["java", "-jar", "/usr/app/spring.jar"]
