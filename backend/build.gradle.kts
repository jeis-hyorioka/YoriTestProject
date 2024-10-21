plugins {
    id("java")
    id("org.springframework.boot") version "3.3.4" // Replace with your Spring Boot version
    id("io.spring.dependency-management") version "1.1.6" // Replace with the latest version
    id("com.diffplug.spotless") version "6.25.0"
}

group = "org.yoritest"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.flywaydb:flyway-core:10.18.2")
    implementation("org.flywaydb:flyway-database-postgresql:10.18.2")
    implementation("org.springframework.boot:spring-boot-configuration-processor")
    implementation("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")
    runtimeOnly("org.postgresql:postgresql")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.boot:spring-boot-testcontainers")
    testImplementation("org.testcontainers:postgresql")
    testImplementation("org.springframework.boot:spring-boot-testcontainers")
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}