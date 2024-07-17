package com.example.main.order;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    private static final Random random = new Random();

    public static int getRandomNumber(int x, int y) {
        return random.nextInt((y - x) + 1) + x;
    }

    public static ProductCategory getRandomCategory() {
        ProductCategory[] categories = ProductCategory.values();
        return categories[random.nextInt(categories.length)];
    }

    public static ProductTitle getRandomProductTitle() {
        ProductTitle[] titles = ProductTitle.values();
        return titles[random.nextInt(titles.length)];
    }

    public String createOrder() {
        String salesData = String.format("Sales data - product: %s, category: %s, quantity: %d, price: %d",
                getRandomProductTitle(),
                getRandomCategory(),
                getRandomNumber(1, 20),
                getRandomNumber(20, 4500));
        logger.info(salesData);
        return salesData;
    }

}