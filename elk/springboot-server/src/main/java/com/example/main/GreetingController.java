package com.example.main;

import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/")
public class GreetingController {
    Logger logger = LoggerFactory.getLogger(GreetingController.class);

    @Autowired
    private GreetingService greetingService;

    GreetingController(GreetingService greetingService){
        this.greetingService = greetingService;
    }

    @GetMapping
    public ResponseEntity<?> greet() throws Exception {
        logger.debug("Processing greet method");
        return ResponseEntity.ok(greetingService.getGreeting());
    }

    @PostMapping
    public ResponseEntity<?> languageSpecificGreeting(@RequestBody @Valid GetGreetingDTO data) throws Exception {
        logger.debug("Processing languageSpecificGreeting method, input>> {}",data);
        return ResponseEntity.ok(greetingService.languageGreeting(data.getLanguageCode()));
    }
}
