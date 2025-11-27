/**
 * Advanced Java Application - Inventory Management System
 * Generated: 2025-11-24 22:11:23.386597
 */

import java.util.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Collectors;

class Product {
    private String id;
    private String name;
    private double price;
    private int quantity;
    private String category;
    private LocalDateTime createdAt;
    private Map<String, Object> metadata;

    public Product(String id, String name, double price, int quantity, String category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.createdAt = LocalDateTime.now();
        this.metadata = new HashMap<>();
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getQuantity() { return quantity; }
    public String getCategory() { return category; }
    public LocalDateTime getCreatedAt() { return createdAt; }

    public void setQuantity(int quantity) { this.quantity = quantity; }
    public void setPrice(double price) { this.price = price; }

    public double getTotalValue() {
        return price * quantity;
    }

    @Override
    public String toString() {
        return String.format("Product{id='%s', name='%s', price=%.2f, quantity=%d, category='%s'}",
            id, name, price, quantity, category);
    }
}

class InventoryManager {
    private Map<String, Product> inventory;
    private List<String> transactionLog;
    private int maxCapacity;

    public InventoryManager(int maxCapacity) {
        this.inventory = new HashMap<>();
        this.transactionLog = new ArrayList<>();
        this.maxCapacity = maxCapacity;
    }

    public boolean addProduct(Product product) {
        if (inventory.size() >= maxCapacity) {
            logTransaction("FAILED: Add product - capacity reached");
            return false;
        }

        inventory.put(product.getId(), product);
        logTransaction("ADDED: " + product.toString());
        return true;
    }

    public boolean updateQuantity(String productId, int newQuantity) {
        Product product = inventory.get(productId);
        if (product == null) {
            return false;
        }

        int oldQuantity = product.getQuantity();
        product.setQuantity(newQuantity);
        logTransaction(String.format("UPDATED: %s quantity from %d to %d",
            productId, oldQuantity, newQuantity));
        return true;
    }

    public boolean removeProduct(String productId) {
        Product removed = inventory.remove(productId);
        if (removed != null) {
            logTransaction("REMOVED: " + removed.toString());
            return true;
        }
        return false;
    }

    public List<Product> getProductsByCategory(String category) {
        return inventory.values().stream()
            .filter(p -> p.getCategory().equals(category))
            .collect(Collectors.toList());
    }

    public List<Product> getLowStockProducts(int threshold) {
        return inventory.values().stream()
            .filter(p -> p.getQuantity() < threshold)
            .collect(Collectors.toList());
    }

    public double getTotalInventoryValue() {
        return inventory.values().stream()
            .mapToDouble(Product::getTotalValue)
            .sum();
    }

    public Map<String, Integer> getCategoryCount() {
        return inventory.values().stream()
            .collect(Collectors.groupingBy(
                Product::getCategory,
                Collectors.summingInt(p -> 1)
            ));
    }

    public Map<String, Double> getCategoryValue() {
        return inventory.values().stream()
            .collect(Collectors.groupingBy(
                Product::getCategory,
                Collectors.summingDouble(Product::getTotalValue)
            ));
    }

    private void logTransaction(String message) {
        String timestamp = LocalDateTime.now().format(
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
        );
        transactionLog.add(timestamp + " - " + message);
    }

    public List<String> getTransactionLog() {
        return new ArrayList<>(transactionLog);
    }

    public void printInventoryReport() {
        System.out.println("=== Inventory Report ===");
        System.out.println("Total Products: " + inventory.size());
        System.out.println("Total Value: $" + String.format("%.2f", getTotalInventoryValue()));
        System.out.println("\nCategory Breakdown:");

        getCategoryCount().forEach((category, count) -> {
            double value = getCategoryValue().get(category);
            System.out.println(String.format("  %s: %d products, $%.2f",
                category, count, value));
        });
    }
}

public class InventorySystem {
    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager(1000);

        // Add sample products
        for (int i = 1; i <= 100; i++) {
            String category = i % 3 == 0 ? "Electronics" :
                            i % 3 == 1 ? "Clothing" : "Food";
            Product product = new Product(
                "PROD" + String.format("%03d", i),
                "Product " + i,
                10.0 + (i * 5.5),
                50 + (i % 20),
                category
            );
            manager.addProduct(product);
        }

        // Perform operations
        manager.updateQuantity("PROD001", 100);
        manager.updateQuantity("PROD050", 5);

        // Generate report
        manager.printInventoryReport();

        // Check low stock
        List<Product> lowStock = manager.getLowStockProducts(10);
        System.out.println("\nLow Stock Products: " + lowStock.size());

        System.out.println("\nTransaction Log (last 10):");
        List<String> log = manager.getTransactionLog();
        log.stream().skip(Math.max(0, log.size() - 10))
            .forEach(System.out::println);
    }
}
