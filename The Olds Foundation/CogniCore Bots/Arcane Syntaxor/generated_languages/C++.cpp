/**
 * Advanced C++ Example - Smart Pointer and Template System
 * Demonstrates: Templates, Smart Pointers, RAII, STL, Modern C++
 */

#include <iostream>
#include <memory>
#include <vector>
#include <string>
#include <algorithm>
#include <map>
#include <chrono>
#include <iomanip>

// Template class for generic data container
template<typename T>
class DataContainer {
private:
    std::vector<T> data;
    std::string name;

public:
    DataContainer(const std::string& containerName) : name(containerName) {}

    void add(const T& item) {
        data.push_back(item);
    }

    void remove(size_t index) {
        if (index < data.size()) {
            data.erase(data.begin() + index);
        }
    }

    T& operator[](size_t index) {
        return data.at(index);
    }

    const T& operator[](size_t index) const {
        return data.at(index);
    }

    size_t size() const {
        return data.size();
    }

    void forEach(std::function<void(const T&)> func) const {
        std::for_each(data.begin(), data.end(), func);
    }

    template<typename Predicate>
    std::vector<T> filter(Predicate pred) const {
        std::vector<T> result;
        std::copy_if(data.begin(), data.end(), std::back_inserter(result), pred);
        return result;
    }

    void print() const {
        std::cout << "Container: " << name << " (size: " << data.size() << ")" << std::endl;
        for (const auto& item : data) {
            std::cout << "  - " << item << std::endl;
        }
    }
};

// Resource class demonstrating RAII
class Resource {
private:
    std::string resourceName;
    int* data;
    size_t dataSize;

public:
    Resource(const std::string& name, size_t size)
        : resourceName(name), dataSize(size) {
        data = new int[size];
        std::cout << "Resource '" << resourceName << "' acquired" << std::endl;
    }

    ~Resource() {
        delete[] data;
        std::cout << "Resource '" << resourceName << "' released" << std::endl;
    }

    // Delete copy constructor and assignment
    Resource(const Resource&) = delete;
    Resource& operator=(const Resource&) = delete;

    // Move constructor and assignment
    Resource(Resource&& other) noexcept
        : resourceName(std::move(other.resourceName)),
          data(other.data),
          dataSize(other.dataSize) {
        other.data = nullptr;
        other.dataSize = 0;
    }

    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            delete[] data;
            resourceName = std::move(other.resourceName);
            data = other.data;
            dataSize = other.dataSize;
            other.data = nullptr;
            other.dataSize = 0;
        }
        return *this;
    }

    void fill(int value) {
        std::fill_n(data, dataSize, value);
    }

    int sum() const {
        return std::accumulate(data, data + dataSize, 0);
    }
};

// Smart pointer demonstration
class SmartPointerDemo {
public:
    static void demonstrateUniquePtr() {
        std::cout << "\n--- Unique Pointer Demo ---" << std::endl;
        auto resource = std::make_unique<Resource>("UniqueResource", 100);
        resource->fill(42);
        std::cout << "Sum: " << resource->sum() << std::endl;
    }

    static void demonstrateSharedPtr() {
        std::cout << "\n--- Shared Pointer Demo ---" << std::endl;
        auto shared1 = std::make_shared<Resource>("SharedResource", 50);
        {
            auto shared2 = shared1;
            std::cout << "Reference count: " << shared1.use_count() << std::endl;
            shared2->fill(10);
        }
        std::cout << "Reference count after scope: " << shared1.use_count() << std::endl;
    }
};

// Performance timer class
class Timer {
private:
    std::chrono::time_point<std::chrono::high_resolution_clock> start;
    std::string operationName;

public:
    Timer(const std::string& name) : operationName(name) {
        start = std::chrono::high_resolution_clock::now();
    }

    ~Timer() {
        auto end = std::chrono::high_resolution_clock::now();
        auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
        std::cout << operationName << " took " << duration.count() << " microseconds" << std::endl;
    }
};

// Main application
int main() {
    std::cout << std::string(60, '=') << std::endl;
    std::cout << "Advanced C++ Template and Smart Pointer System" << std::endl;
    std::cout << std::string(60, '=') << std::endl;

    // Template container demo
    {
        Timer timer("Container Operations");

        DataContainer<std::string> stringContainer("Strings");
        stringContainer.add("Hello");
        stringContainer.add("World");
        stringContainer.add("C++");
        stringContainer.add("Templates");

        std::cout << "\n";
        stringContainer.print();

        auto filtered = stringContainer.filter([](const std::string& s) {
            return s.length() > 3;
        });

        std::cout << "\nFiltered items (length > 3):" << std::endl;
        for (const auto& item : filtered) {
            std::cout << "  - " << item << std::endl;
        }
    }

    // Smart pointer demonstrations
    SmartPointerDemo::demonstrateUniquePtr();
    SmartPointerDemo::demonstrateSharedPtr();

    // Map demonstration
    std::cout << "\n--- Map Demo ---" << std::endl;
    std::map<std::string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"] = 87;
    scores["Charlie"] = 92;

    std::cout << "Scores:" << std::endl;
    for (const auto& [name, score] : scores) {
        std::cout << "  " << std::setw(10) << name << ": " << score << std::endl;
    }

    std::cout << "\n" << std::string(60, '=') << std::endl;
    std::cout << "Program Complete!" << std::endl;
    std::cout << std::string(60, '=') << std::endl;

    return 0;
}
