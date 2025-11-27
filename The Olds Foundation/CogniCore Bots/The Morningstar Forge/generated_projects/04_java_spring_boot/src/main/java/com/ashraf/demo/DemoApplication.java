package com.ashraf.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

/**
 * Spring Boot REST API
 * Author: Ashraf Siddiqui
 * GitHub: https://github.com/AshrafMorningstar
 */

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class DemoApplication {

    private List<Product> products = new ArrayList<>();
    private int productId = 1;

    public static void main(String[] args) {
        System.out.println("Starting Spring Boot Application");
        System.out.println("Author: Ashraf Siddiqui");
        System.out.println("GitHub: https://github.com/AshrafMorningstar");
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/")
    public Map<String, Object> home() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Spring Boot API");
        response.put("author", "Ashraf Siddiqui");
        response.put("github", "https://github.com/AshrafMorningstar");
        return response;
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return products;
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        product.setId(productId++);
        products.add(product);
        return product;
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable int id) {
        return products.stream()
            .filter(p -> p.getId() == id)
            .findFirst()
            .orElse(null);
    }

    @DeleteMapping("/products/{id}")
    public Map<String, String> deleteProduct(@PathVariable int id) {
        products.removeIf(p -> p.getId() == id);
        return Map.of("message", "Product deleted");
    }
}

class Product {
    private int id;
    private String name;
    private double price;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}
