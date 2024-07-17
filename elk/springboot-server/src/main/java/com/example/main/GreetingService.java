package com.example.main;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class GreetingService {
        Logger logger = LoggerFactory.getLogger(GreetingService.class);

        private String getGreeting(int lanCode) throws Exception {
            return switch (lanCode) {
                case 1 -> "Hello Welcome!!!";
                case 2 -> "नमस्ते \uD83D\uDE4F स्वागत छ";
                case 3 -> "Hallo Willkommen!!!";
                case 4 -> "こんにちは、ようこそ!";
                case 5 -> "¡¡¡Hola Bienvenido!!!";
                default -> throw new Exception("Unknown greeting language code");
            };
        }

    public String getGreeting() throws Exception {
        logger.debug("Processing getGreeting method");
        return getGreeting(new Random().nextInt(1,9));
    }

    public String languageGreeting(int code) throws Exception {
        logger.debug("Processing languageSpecificGreeting method, input >> {}",code);
        return this.getGreeting(code);
    }

}
