/**
 * Advanced Java Example - Library Management System
 * Demonstrates: OOP, Generics, Streams, Collections, Exception Handling
 */

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

// Custom Exception
class LibraryException extends Exception {
    public LibraryException(String message) {
        super(message);
    }
}

// Generic Book class
class Book<T> {
    private final String isbn;
    private final String title;
    private final String author;
    private final int year;
    private boolean available;
    private T metadata;

    public Book(String isbn, String title, String author, int year, T metadata) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true;
        this.metadata = metadata;
    }

    public String getIsbn() { return isbn; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public int getYear() { return year; }
    public boolean isAvailable() { return available; }
    public T getMetadata() { return metadata; }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    @Override
    public String toString() {
        return String.format("Book{isbn='%s', title='%s', author='%s', year=%d, available=%b}",
                isbn, title, author, year, available);
    }
}

// Member class
class Member {
    private final String memberId;
    private final String name;
    private final String email;
    private final LocalDateTime joinDate;
    private final List<String> borrowedBooks;

    public Member(String memberId, String name, String email) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.joinDate = LocalDateTime.now();
        this.borrowedBooks = new ArrayList<>();
    }

    public String getMemberId() { return memberId; }
    public String getName() { return name; }
    public List<String> getBorrowedBooks() { return new ArrayList<>(borrowedBooks); }

    public void borrowBook(String isbn) {
        borrowedBooks.add(isbn);
    }

    public void returnBook(String isbn) {
        borrowedBooks.remove(isbn);
    }

    @Override
    public String toString() {
        return String.format("Member{id='%s', name='%s', books=%d}",
                memberId, name, borrowedBooks.size());
    }
}

// Library Management System
class LibrarySystem {
    private final Map<String, Book<Map<String, Object>>> books;
    private final Map<String, Member> members;
    private final List<String> transactionLog;

    public LibrarySystem() {
        this.books = new HashMap<>();
        this.members = new HashMap<>();
        this.transactionLog = new ArrayList<>();
    }

    public void addBook(Book<Map<String, Object>> book) {
        books.put(book.getIsbn(), book);
        logTransaction("Added book: " + book.getTitle());
    }

    public void registerMember(Member member) {
        members.put(member.getMemberId(), member);
        logTransaction("Registered member: " + member.getName());
    }

    public void borrowBook(String memberId, String isbn) throws LibraryException {
        Member member = members.get(memberId);
        Book<Map<String, Object>> book = books.get(isbn);

        if (member == null) {
            throw new LibraryException("Member not found: " + memberId);
        }
        if (book == null) {
            throw new LibraryException("Book not found: " + isbn);
        }
        if (!book.isAvailable()) {
            throw new LibraryException("Book not available: " + book.getTitle());
        }

        book.setAvailable(false);
        member.borrowBook(isbn);
        logTransaction(String.format("%s borrowed %s", member.getName(), book.getTitle()));
    }

    public void returnBook(String memberId, String isbn) throws LibraryException {
        Member member = members.get(memberId);
        Book<Map<String, Object>> book = books.get(isbn);

        if (member == null || book == null) {
            throw new LibraryException("Invalid member or book");
        }

        book.setAvailable(true);
        member.returnBook(isbn);
        logTransaction(String.format("%s returned %s", member.getName(), book.getTitle()));
    }

    public List<Book<Map<String, Object>>> searchByAuthor(String author) {
        return books.values().stream()
                .filter(book -> book.getAuthor().equalsIgnoreCase(author))
                .collect(Collectors.toList());
    }

    public List<Book<Map<String, Object>>> getAvailableBooks() {
        return books.values().stream()
                .filter(Book::isAvailable)
                .collect(Collectors.toList());
    }

    public Map<String, Long> getStatistics() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("totalBooks", (long) books.size());
        stats.put("availableBooks", books.values().stream().filter(Book::isAvailable).count());
        stats.put("totalMembers", (long) members.size());
        stats.put("totalTransactions", (long) transactionLog.size());
        return stats;
    }

    private void logTransaction(String message) {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        transactionLog.add(timestamp + " - " + message);
    }

    public void printTransactionLog() {
        System.out.println("\nTransaction Log:");
        transactionLog.forEach(log -> System.out.println("  " + log));
    }
}

// Main Application
public class LibraryManagementSystem {
    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("Advanced Java Library Management System");
        System.out.println("=".repeat(60));

        LibrarySystem library = new LibrarySystem();

        // Add books
        Map<String, Object> metadata1 = new HashMap<>();
        metadata1.put("genre", "Programming");
        metadata1.put("pages", 500);

        library.addBook(new Book<>("ISBN001", "Effective Java", "Joshua Bloch", 2018, metadata1));
        library.addBook(new Book<>("ISBN002", "Clean Code", "Robert Martin", 2008, metadata1));
        library.addBook(new Book<>("ISBN003", "Design Patterns", "Gang of Four", 1994, metadata1));

        // Register members
        library.registerMember(new Member("M001", "Alice Johnson", "alice@example.com"));
        library.registerMember(new Member("M002", "Bob Smith", "bob@example.com"));

        // Perform operations
        try {
            library.borrowBook("M001", "ISBN001");
            library.borrowBook("M002", "ISBN002");
            library.returnBook("M001", "ISBN001");
        } catch (LibraryException e) {
            System.err.println("Error: " + e.getMessage());
        }

        // Display statistics
        System.out.println("\nLibrary Statistics:");
        library.getStatistics().forEach((key, value) ->
            System.out.println("  " + key + ": " + value)
        );

        // Show available books
        System.out.println("\nAvailable Books:");
        library.getAvailableBooks().forEach(book ->
            System.out.println("  - " + book.getTitle() + " by " + book.getAuthor())
        );

        library.printTransactionLog();

        System.out.println("\n" + "=".repeat(60));
        System.out.println("System Complete!");
        System.out.println("=".repeat(60));
    }
}
