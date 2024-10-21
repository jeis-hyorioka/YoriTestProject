package org.yoritest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
@SpringBootApplication
@EnableScheduling
public class YoriTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(YoriTestApplication.class, args);
    }
}
