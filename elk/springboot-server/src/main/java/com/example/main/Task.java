package com.example.main;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@Component
public class Task {

    Logger logger = LoggerFactory.getLogger(Task.class);

     @Scheduled(timeUnit = TimeUnit.SECONDS, fixedDelay = 20)
     public void executeTask(){
         UUID taskID =  UUID.randomUUID();
         logger.debug("Processing Task with id: {}", taskID);
         logger.info("Done with the task id: {}", taskID);
     }
}
