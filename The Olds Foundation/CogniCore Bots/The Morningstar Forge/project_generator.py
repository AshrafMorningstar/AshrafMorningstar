#!/usr/bin/env python3
"""
Automated Multi-Language Project Generator
Created by: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

import os
import json
from datetime import datetime
from pathlib import Path

class ProjectGenerator:
    def __init__(self):
        self.author = "Ashraf Siddiqui"
        self.github = "https://github.com/AshrafMorningstar"
        self.output_dir = Path("generated_projects")
        self.output_dir.mkdir(exist_ok=True)

    def generate_all_projects(self):
        """Generate all projects automatically"""
        print(f"🚀 Starting Automated Project Generator")
        print(f"👤 Author: {self.author}")
        print(f"🔗 GitHub: {self.github}\n")

        generators = [
            self.create_web_portfolio,
            self.create_python_api,
            self.create_nodejs_app,
            self.create_java_spring,
            self.create_cpp_game,
            self.create_ruby_rails,
            self.create_swift_ios,
            self.create_go_microservice,
            self.create_rust_cli,
            self.create_php_cms,
        ]

        for idx, generator in enumerate(generators, 1):
            print(f"\n{'='*60}")
            print(f"📦 Project {idx}/{len(generators)}")
            generator()
            print(f"✅ Completed!")

        print(f"\n{'='*60}")
        print(f"🎉 All {len(generators)} projects generated successfully!")
        print(f"📁 Location: {self.output_dir.absolute()}")

    def create_web_portfolio(self):
        """HTML/CSS/JS Portfolio Website"""
        project_dir = self.output_dir / "01_web_portfolio"
        project_dir.mkdir(exist_ok=True)

        # HTML
        html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{self.author} - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">{self.author}</h1>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="hero">
        <div class="container">
            <h2>Full Stack Developer</h2>
            <p>Building amazing projects across multiple technologies</p>
            <a href="{self.github}" class="btn" target="_blank">View GitHub</a>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2>About Me</h2>
            <p>Hi! I'm {self.author}, a passionate developer who loves creating innovative solutions.</p>
            <div class="skills">
                <span class="skill">Python</span>
                <span class="skill">JavaScript</span>
                <span class="skill">Java</span>
                <span class="skill">C++</span>
                <span class="skill">Ruby</span>
                <span class="skill">Swift</span>
                <span class="skill">Go</span>
                <span class="skill">Rust</span>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2>Featured Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Web Portfolio</h3>
                    <p>Modern responsive portfolio website</p>
                </div>
                <div class="project-card">
                    <h3>Python API</h3>
                    <p>RESTful API with FastAPI</p>
                </div>
                <div class="project-card">
                    <h3>Node.js App</h3>
                    <p>Full-stack web application</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 {self.author} | <a href="{self.github}" target="_blank">GitHub</a></p>
    </footer>

    <script src="script.js"></script>
</body>
</html>'''

        # CSS
        css = '''* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

.nav-links a:hover {
    opacity: 0.8;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8rem 0;
    text-align: center;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
}

.btn {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.about, .projects {
    padding: 4rem 0;
}

.about h2, .projects h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #667eea;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.skill {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-weight: bold;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.project-card h3 {
    color: #667eea;
    margin-bottom: 1rem;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

footer a {
    color: #667eea;
    text-decoration: none;
}

@media (max-width: 768px) {
    .hero h2 {
        font-size: 2rem;
    }

    .nav-links {
        gap: 1rem;
    }
}'''

        # JavaScript
        js = '''// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});

console.log('Portfolio loaded successfully!');
console.log('Created by: Ashraf Siddiqui');
console.log('GitHub: https://github.com/AshrafMorningstar');'''

        (project_dir / "index.html").write_text(html, encoding='utf-8')
        (project_dir / "style.css").write_text(css, encoding='utf-8')
        (project_dir / "script.js").write_text(js, encoding='utf-8')

        readme = f'''# Web Portfolio

**Created by:** {self.author}
**GitHub:** {self.github}

## Features
- Responsive design
- Smooth animations
- Modern UI/UX
- Cross-browser compatible

## Usage
Open `index.html` in your browser.

## Technologies
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Web Portfolio created")

    def create_python_api(self):
        """Python FastAPI REST API"""
        project_dir = self.output_dir / "02_python_fastapi"
        project_dir.mkdir(exist_ok=True)

        main_py = f'''"""
FastAPI REST API
Author: {self.author}
GitHub: {self.github}
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import uvicorn

app = FastAPI(
    title="Multi-Purpose API",
    description="Created by {self.author}",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    id: Optional[int] = None
    name: str
    description: str
    price: float
    created_at: Optional[datetime] = None

class User(BaseModel):
    id: Optional[int] = None
    username: str
    email: str
    full_name: str

# In-memory storage
items_db = []
users_db = []
item_counter = 1
user_counter = 1

@app.get("/")
def read_root():
    return {{
        "message": "Welcome to the API",
        "author": "{self.author}",
        "github": "{self.github}",
        "endpoints": ["/items", "/users", "/docs"]
    }}

@app.get("/items", response_model=List[Item])
def get_items():
    return items_db

@app.post("/items", response_model=Item)
def create_item(item: Item):
    global item_counter
    item.id = item_counter
    item.created_at = datetime.now()
    item_counter += 1
    items_db.append(item)
    return item

@app.get("/items/{{item_id}}", response_model=Item)
def get_item(item_id: int):
    for item in items_db:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.put("/items/{{item_id}}", response_model=Item)
def update_item(item_id: int, updated_item: Item):
    for idx, item in enumerate(items_db):
        if item.id == item_id:
            updated_item.id = item_id
            updated_item.created_at = item.created_at
            items_db[idx] = updated_item
            return updated_item
    raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/{{item_id}}")
def delete_item(item_id: int):
    for idx, item in enumerate(items_db):
        if item.id == item_id:
            items_db.pop(idx)
            return {{"message": "Item deleted"}}
    raise HTTPException(status_code=404, detail="Item not found")

@app.get("/users", response_model=List[User])
def get_users():
    return users_db

@app.post("/users", response_model=User)
def create_user(user: User):
    global user_counter
    user.id = user_counter
    user_counter += 1
    users_db.append(user)
    return user

if __name__ == "__main__":
    print(f"Starting API by {self.author}")
    print(f"GitHub: {self.github}")
    uvicorn.run(app, host="0.0.0.0", port=8000)
'''

        requirements = '''fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.5.0
'''

        (project_dir / "main.py").write_text(main_py, encoding='utf-8')
        (project_dir / "requirements.txt").write_text(requirements, encoding='utf-8')

        readme = f'''# Python FastAPI REST API

**Author:** {self.author}
**GitHub:** {self.github}

## Installation
```bash
pip install -r requirements.txt
```

## Run
```bash
python main.py
```

Visit http://localhost:8000/docs for interactive API documentation.

## Features
- RESTful CRUD operations
- Auto-generated docs
- CORS enabled
- Type validation
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Python FastAPI created")

    def create_nodejs_app(self):
        """Node.js Express Application"""
        project_dir = self.output_dir / "03_nodejs_express"
        project_dir.mkdir(exist_ok=True)

        server_js = f'''/**
 * Express.js Web Application
 * Author: {self.author}
 * GitHub: {self.github}
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// In-memory database
let tasks = [];
let taskId = 1;

// Routes
app.get('/', (req, res) => {{
    res.json({{
        message: 'Task Manager API',
        author: '{self.author}',
        github: '{self.github}',
        endpoints: {{
            tasks: '/api/tasks',
            createTask: 'POST /api/tasks',
            getTask: 'GET /api/tasks/:id',
            updateTask: 'PUT /api/tasks/:id',
            deleteTask: 'DELETE /api/tasks/:id'
        }}
    }});
}});

// Get all tasks
app.get('/api/tasks', (req, res) => {{
    res.json(tasks);
}});

// Create task
app.post('/api/tasks', (req, res) => {{
    const {{ title, description, priority = 'medium' }} = req.body;

    if (!title) {{
        return res.status(400).json({{ error: 'Title is required' }});
    }}

    const task = {{
        id: taskId++,
        title,
        description,
        priority,
        completed: false,
        createdAt: new Date().toISOString()
    }};

    tasks.push(task);
    res.status(201).json(task);
}});

// Get single task
app.get('/api/tasks/:id', (req, res) => {{
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {{
        return res.status(404).json({{ error: 'Task not found' }});
    }}

    res.json(task);
}});

// Update task
app.put('/api/tasks/:id', (req, res) => {{
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {{
        return res.status(404).json({{ error: 'Task not found' }});
    }}

    tasks[taskIndex] = {{ ...tasks[taskIndex], ...req.body }};
    res.json(tasks[taskIndex]);
}});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {{
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {{
        return res.status(404).json({{ error: 'Task not found' }});
    }}

    tasks.splice(taskIndex, 1);
    res.json({{ message: 'Task deleted successfully' }});
}});

// Error handling
app.use((err, req, res, next) => {{
    console.error(err.stack);
    res.status(500).json({{ error: 'Something went wrong!' }});
}});

app.listen(PORT, () => {{
    console.log(`Server running on port ${{PORT}}`);
    console.log(`Author: {self.author}`);
    console.log(`GitHub: {self.github}`);
}});
'''

        package_json = f'''{{
  "name": "nodejs-task-manager",
  "version": "1.0.0",
  "description": "Task Manager API by {self.author}",
  "main": "server.js",
  "scripts": {{
    "start": "node server.js",
    "dev": "nodemon server.js"
  }},
  "author": "{self.author}",
  "license": "MIT",
  "dependencies": {{
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "morgan": "^1.10.0"
  }},
  "devDependencies": {{
    "nodemon": "^3.0.1"
  }}
}}
'''

        (project_dir / "server.js").write_text(server_js, encoding='utf-8')
        (project_dir / "package.json").write_text(package_json, encoding='utf-8')

        readme = f'''# Node.js Task Manager API

**Author:** {self.author}
**GitHub:** {self.github}

## Installation
```bash
npm install
```

## Run
```bash
npm start
```

## Features
- RESTful API
- CRUD operations for tasks
- Error handling
- CORS enabled
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Node.js Express App created")

    def create_java_spring(self):
        """Java Spring Boot Application"""
        project_dir = self.output_dir / "04_java_spring_boot"
        project_dir.mkdir(exist_ok=True)
        src_dir = project_dir / "src/main/java/com/ashraf/demo"
        src_dir.mkdir(parents=True, exist_ok=True)

        application_java = f'''package com.ashraf.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

/**
 * Spring Boot REST API
 * Author: {self.author}
 * GitHub: {self.github}
 */

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class DemoApplication {{

    private List<Product> products = new ArrayList<>();
    private int productId = 1;

    public static void main(String[] args) {{
        System.out.println("Starting Spring Boot Application");
        System.out.println("Author: {self.author}");
        System.out.println("GitHub: {self.github}");
        SpringApplication.run(DemoApplication.class, args);
    }}

    @GetMapping("/")
    public Map<String, Object> home() {{
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Spring Boot API");
        response.put("author", "{self.author}");
        response.put("github", "{self.github}");
        return response;
    }}

    @GetMapping("/products")
    public List<Product> getProducts() {{
        return products;
    }}

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {{
        product.setId(productId++);
        products.add(product);
        return product;
    }}

    @GetMapping("/products/{{id}}")
    public Product getProduct(@PathVariable int id) {{
        return products.stream()
            .filter(p -> p.getId() == id)
            .findFirst()
            .orElse(null);
    }}

    @DeleteMapping("/products/{{id}}")
    public Map<String, String> deleteProduct(@PathVariable int id) {{
        products.removeIf(p -> p.getId() == id);
        return Map.of("message", "Product deleted");
    }}
}}

class Product {{
    private int id;
    private String name;
    private double price;

    public int getId() {{ return id; }}
    public void setId(int id) {{ this.id = id; }}
    public String getName() {{ return name; }}
    public void setName(String name) {{ this.name = name; }}
    public double getPrice() {{ return price; }}
    public void setPrice(double price) {{ this.price = price; }}
}}
'''

        pom_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.ashraf</groupId>
    <artifactId>demo</artifactId>
    <version>1.0.0</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.5</version>
    </parent>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
'''

        (src_dir / "DemoApplication.java").write_text(application_java, encoding='utf-8')
        (project_dir / "pom.xml").write_text(pom_xml, encoding='utf-8')

        readme = f'''# Java Spring Boot REST API

**Author:** {self.author}
**GitHub:** {self.github}

## Build
```bash
mvn clean install
```

## Run
```bash
mvn spring-boot:run
```

Access at http://localhost:8080/api
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Java Spring Boot created")

    def create_cpp_game(self):
        """C++ Console Game"""
        project_dir = self.output_dir / "05_cpp_game"
        project_dir.mkdir(exist_ok=True)

        main_cpp = f'''/*
 * Number Guessing Game
 * Author: {self.author}
 * GitHub: {self.github}
 */

#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
#include <limits>

using namespace std;

class Game {{
private:
    int secretNumber;
    int attempts;
    int maxAttempts;
    string playerName;

public:
    Game(string name, int max = 10) : playerName(name), maxAttempts(max), attempts(0) {{
        srand(time(0));
        secretNumber = rand() % 100 + 1;
    }}

    void displayWelcome() {{
        cout << "\\n================================\\n";
        cout << "  NUMBER GUESSING GAME\\n";
        cout << "  Created by: {self.author}\\n";
        cout << "  GitHub: {self.github}\\n";
        cout << "================================\\n\\n";
        cout << "Welcome, " << playerName << "!\\n";
        cout << "Guess a number between 1 and 100\\n";
        cout << "You have " << maxAttempts << " attempts\\n\\n";
    }}

    bool makeGuess(int guess) {{
        attempts++;

        if (guess < secretNumber) {{
            cout << "Too low! ";
        }} else if (guess > secretNumber) {{
            cout << "Too high! ";
        }} else {{
            cout << "\\n🎉 Congratulations! You won!\\n";
            cout << "You guessed it in " << attempts << " attempts!\\n";
            return true;
        }}

        cout << "Attempts left: " << (maxAttempts - attempts) << "\\n";
        return false;
    }}

    bool isGameOver() {{
        if (attempts >= maxAttempts) {{
            cout << "\\nGame Over! The number was " << secretNumber << "\\n";
            return true;
        }}
        return false;
    }}

    void displayStats() {{
        cout << "\\n--- Game Statistics ---\\n";
        cout << "Player: " << playerName << "\\n";
        cout << "Attempts used: " << attempts << "/" << maxAttempts << "\\n";
        cout << "Success rate: " << (attempts > 0 ? (100.0 / attempts) : 0) << "%\\n";
    }}
}};

int main() {{
    cout << "Enter your name: ";
    string name;
    getline(cin, name);

    if (name.empty()) {{
        name = "Player";
    }}

    Game game(name);
    game.displayWelcome();

    while (true) {{
        cout << "\\nEnter your guess: ";
        int guess;

        if (!(cin >> guess)) {{
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\\n');
            cout << "Invalid input! Please enter a number.\\n";
            continue;
        }}

        if (guess < 1 || guess > 100) {{
            cout << "Please guess between 1 and 100!\\n";
            continue;
        }}

        if (game.makeGuess(guess)) {{
            break;
        }}

        if (game.isGameOver()) {{
            break;
        }}
    }}

    game.displayStats();

    cout << "\\nThank you for playing!\\n";
    cout << "Created by {self.author}\\n";

    return 0;
}}
'''

        (project_dir / "main.cpp").write_text(main_cpp, encoding='utf-8')

        readme = f'''# C++ Number Guessing Game

**Author:** {self.author}
**GitHub:** {self.github}

## Compile
```bash
g++ -o game main.cpp
```

## Run
```bash
./game
```

## Features
- Object-oriented design
- Input validation
- Game statistics
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ C++ Game created")

    def create_ruby_rails(self):
        """Ruby on Rails API"""
        project_dir = self.output_dir / "06_ruby_rails_api"
        project_dir.mkdir(exist_ok=True)

        app_rb = f'''# Ruby Sinatra API
# Author: {self.author}
# GitHub: {self.github}

require 'sinatra'
require 'json'

set :port, 4567
set :bind, '0.0.0.0'

# In-memory storage
$books = []
$book_id = 1

before do
  content_type :json
end

get '/' do
  {{
    message: 'Ruby Book API',
    author: '{self.author}',
    github: '{self.github}',
    endpoints: ['/books', '/books/:id']
  }}.to_json
end

get '/books' do
  $books.to_json
end

post '/books' do
  request.body.rewind
  data = JSON.parse(request.body.read)

  book = {{
    id: $book_id,
    title: data['title'],
    author: data['author'],
    year: data['year'],
    created_at: Time.now
  }}

  $book_id += 1
  $books << book

  status 201
  book.to_json
end

get '/books/:id' do
  book = $books.find {{ |b| b[:id] == params[:id].to_i }}

  if book
    book.to_json
  else
    status 404
    {{ error: 'Book not found' }}.to_json
  end
end

delete '/books/:id' do
  book = $books.find {{ |b| b[:id] == params[:id].to_i }}

  if book
    $books.delete(book)
    {{ message: 'Book deleted' }}.to_json
  else
    status 404
    {{ error: 'Book not found' }}.to_json
  end
end

puts "Starting Ruby API by {self.author}"
puts "GitHub: {self.github}"
'''

        gemfile = '''source 'https://rubygems.org'

gem 'sinatra'
gem 'json'
'''

        (project_dir / "app.rb").write_text(app_rb, encoding='utf-8')
        (project_dir / "Gemfile").write_text(gemfile, encoding='utf-8')

        readme = f'''# Ruby Sinatra API

**Author:** {self.author}
**GitHub:** {self.github}

## Install
```bash
bundle install
```

## Run
```bash
ruby app.rb
```

Visit http://localhost:4567
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Ruby API created")

    def create_swift_ios(self):
        """Swift iOS App"""
        project_dir = self.output_dir / "07_swift_ios_app"
        project_dir.mkdir(exist_ok=True)

        main_swift = f'''//
//  Todo List App
//  Author: {self.author}
//  GitHub: {self.github}
//

import SwiftUI

struct TodoItem: Identifiable {{
    let id = UUID()
    var title: String
    var isCompleted: Bool = false
}}

class TodoViewModel: ObservableObject {{
    @Published var todos: [TodoItem] = []

    func addTodo(title: String) {{
        let todo = TodoItem(title: title)
        todos.append(todo)
    }}

    func toggleTodo(id: UUID) {{
        if let index = todos.firstIndex(where: {{ $0.id == id }}) {{
            todos[index].isCompleted.toggle()
        }}
    }}

    func deleteTodo(at offsets: IndexSet) {{
        todos.remove(atOffsets: offsets)
    }}
}}

struct ContentView: View {{
    @StateObject private var viewModel = TodoViewModel()
    @State private var newTodoTitle = ""

    var body: some View {{
        NavigationView {{
            VStack {{
                HStack {{
                    TextField("New todo...", text: $newTodoTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())

                    Button(action: addTodo) {{
                        Image(systemName: "plus.circle.fill")
                            .font(.title)
                    }}
                    .disabled(newTodoTitle.isEmpty)
                }}
                .padding()

                List {{
                    ForEach(viewModel.todos) {{ todo in
                        HStack {{
                            Image(systemName: todo.isCompleted ? "checkmark.circle.fill" : "circle")
                                .foregroundColor(todo.isCompleted ? .green : .gray)
                                .onTapGesture {{
                                    viewModel.toggleTodo(id: todo.id)
                                }}

                            Text(todo.title)
                                .strikethrough(todo.isCompleted)
                                .foregroundColor(todo.isCompleted ? .gray : .primary)
                        }}
                    }}
                    .onDelete(perform: viewModel.deleteTodo)
                }}

                Text("Created by {self.author}")
                    .font(.caption)
                    .foregroundColor(.gray)
                    .padding()
            }}
            .navigationTitle("My Todos")
        }}
    }}

    private func addTodo() {{
        guard !newTodoTitle.isEmpty else {{ return }}
        viewModel.addTodo(title: newTodoTitle)
        newTodoTitle = ""
    }}
}}

@main
struct TodoApp: App {{
    var body: some Scene {{
        WindowGroup {{
            ContentView()
        }}
    }}
}}
'''

        (project_dir / "ContentView.swift").write_text(main_swift, encoding='utf-8')

        readme = f'''# Swift iOS Todo App

**Author:** {self.author}
**GitHub:** {self.github}

## Features
- SwiftUI interface
- MVVM architecture
- Add/delete/toggle todos
- Modern iOS design

## Setup
Open in Xcode and run on simulator or device.
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Swift iOS App created")

    def create_go_microservice(self):
        """Go Microservice"""
        project_dir = self.output_dir / "08_go_microservice"
        project_dir.mkdir(exist_ok=True)

        main_go = f'''package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "sync"
    "time"
)

// Author: {self.author}
// GitHub: {self.github}

type Message struct {{
    ID        int       `json:"id"`
    Content   string    `json:"content"`
    Author    string    `json:"author"`
    CreatedAt time.Time `json:"created_at"`
}}

type Server struct {{
    messages []Message
    mu       sync.RWMutex
    nextID   int
}}

func NewServer() *Server {{
    return &Server{{
        messages: make([]Message, 0),
        nextID:   1,
    }}
}}

func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {{
    response := map[string]interface{{}}{{
        "message": "Go Microservice",
        "author":  "{self.author}",
        "github":  "{self.github}",
        "endpoints": []string{{"/messages", "/health"}},
    }}

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}}

func (s *Server) handleMessages(w http.ResponseWriter, r *http.Request) {{
    w.Header().Set("Content-Type", "application/json")

    switch r.Method {{
    case http.MethodGet:
        s.mu.RLock()
        json.NewEncoder(w).Encode(s.messages)
        s.mu.RUnlock()

    case http.MethodPost:
        var msg Message
        if err := json.NewDecoder(r.Body).Decode(&msg); err != nil {{
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }}

        s.mu.Lock()
        msg.ID = s.nextID
        msg.CreatedAt = time.Now()
        s.nextID++
        s.messages = append(s.messages, msg)
        s.mu.Unlock()

        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(msg)

    default:
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
    }}
}}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {{
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{{
        "status": "healthy",
        "time":   time.Now().Format(time.RFC3339),
    }})
}}

func main() {{
    server := NewServer()

    http.HandleFunc("/", server.handleHome)
    http.HandleFunc("/messages", server.handleMessages)
    http.HandleFunc("/health", server.handleHealth)

    fmt.Println("Starting Go Microservice")
    fmt.Println("Author: {self.author}")
    fmt.Println("GitHub: {self.github}")
    fmt.Println("Server running on :8080")

    log.Fatal(http.ListenAndServe(":8080", nil))
}}
'''

        go_mod = '''module github.com/ashraf/microservice

go 1.21
'''

        (project_dir / "main.go").write_text(main_go, encoding='utf-8')
        (project_dir / "go.mod").write_text(go_mod, encoding='utf-8')

        readme = f'''# Go Microservice

**Author:** {self.author}
**GitHub:** {self.github}

## Run
```bash
go run main.go
```

## Features
- RESTful API
- Concurrent-safe
- Health check endpoint
- JSON responses
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Go Microservice created")

    def create_rust_cli(self):
        """Rust CLI Tool"""
        project_dir = self.output_dir / "09_rust_cli_tool"
        project_dir.mkdir(exist_ok=True)
        src_dir = project_dir / "src"
        src_dir.mkdir(exist_ok=True)

        main_rs = f'''// File Manager CLI
// Author: {self.author}
// GitHub: {self.github}

use std::fs;
use std::io::{{self, Write}};
use std::path::Path;

struct FileManager {{
    current_path: String,
}}

impl FileManager {{
    fn new() -> Self {{
        FileManager {{
            current_path: String::from("."),
        }}
    }}

    fn list_files(&self) -> io::Result<()> {{
        println!("\\nFiles in {{}}:", self.current_path);
        println!("{{}}", "-".repeat(50));

        let entries = fs::read_dir(&self.current_path)?;

        for entry in entries {{
            let entry = entry?;
            let path = entry.path();
            let file_type = if path.is_dir() {{ "[DIR]" }} else {{ "[FILE]" }};
            let name = path.file_name().unwrap().to_string_lossy();
            println!("{{}} {{}}", file_type, name);
        }}

        Ok(())
    }}

    fn create_file(&self, filename: &str) -> io::Result<()> {{
        let path = Path::new(&self.current_path).join(filename);
        fs::File::create(path)?;
        println!("✓ Created file: {{}}", filename);
        Ok(())
    }}

    fn create_dir(&self, dirname: &str) -> io::Result<()> {{
        let path = Path::new(&self.current_path).join(dirname);
        fs::create_dir(path)?;
        println!("✓ Created directory: {{}}", dirname);
        Ok(())
    }}

    fn show_help(&self) {{
        println!("\\n=== File Manager CLI ===");
        println!("Author: {self.author}");
        println!("GitHub: {self.github}");
        println!("\\nCommands:");
        println!("  list         - List files");
        println!("  create <file> - Create file");
        println!("  mkdir <dir>  - Create directory");
        println!("  help         - Show this help");
        println!("  quit         - Exit program");
    }}
}}

fn main() {{
    let manager = FileManager::new();

    println!("=================================");
    println!("  File Manager CLI Tool");
    println!("  Author: {self.author}");
    println!("  GitHub: {self.github}");
    println!("=================================");

    manager.show_help();

    loop {{
        print!("\\n> ");
        io::stdout().flush().unwrap();

        let mut input = String::new();
        io::stdin().read_line(&mut input).unwrap();

        let parts: Vec<&str> = input.trim().split_whitespace().collect();

        if parts.is_empty() {{
            continue;
        }}

        match parts[0] {{
            "list" => {{
                if let Err(e) = manager.list_files() {{
                    eprintln!("Error: {{}}", e);
                }}
            }}
            "create" => {{
                if parts.len() < 2 {{
                    println!("Usage: create <filename>");
                }} else {{
                    if let Err(e) = manager.create_file(parts[1]) {{
                        eprintln!("Error: {{}}", e);
                    }}
                }}
            }}
            "mkdir" => {{
                if parts.len() < 2 {{
                    println!("Usage: mkdir <dirname>");
                }} else {{
                    if let Err(e) = manager.create_dir(parts[1]) {{
                        eprintln!("Error: {{}}", e);
                    }}
                }}
            }}
            "help" => manager.show_help(),
            "quit" | "exit" => {{
                println!("Goodbye!");
                break;
            }}
            _ => println!("Unknown command. Type 'help' for available commands."),
        }}
    }}
}}
'''

        cargo_toml = f'''[package]
name = "file_manager"
version = "1.0.0"
authors = ["{self.author} <{self.github}>"]
edition = "2021"

[dependencies]
'''

        (src_dir / "main.rs").write_text(main_rs, encoding='utf-8')
        (project_dir / "Cargo.toml").write_text(cargo_toml, encoding='utf-8')

        readme = f'''# Rust CLI File Manager

**Author:** {self.author}
**GitHub:** {self.github}

## Build
```bash
cargo build --release
```

## Run
```bash
cargo run
```

## Features
- File operations
- Directory management
- Interactive CLI
- Error handling
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ Rust CLI Tool created")

    def create_php_cms(self):
        """PHP Content Management System"""
        project_dir = self.output_dir / "10_php_cms"
        project_dir.mkdir(exist_ok=True)

        index_php = f'''<?php
/**
 * Simple PHP CMS
 * Author: {self.author}
 * GitHub: {self.github}
 */

session_start();

class CMS {{
    private $posts = [];

    public function __construct() {{
        if (isset($_SESSION['posts'])) {{
            $this->posts = $_SESSION['posts'];
        }}
    }}

    public function addPost($title, $content) {{
        $post = [
            'id' => count($this->posts) + 1,
            'title' => htmlspecialchars($title),
            'content' => htmlspecialchars($content),
            'created_at' => date('Y-m-d H:i:s')
        ];
        $this->posts[] = $post;
        $_SESSION['posts'] = $this->posts;
        return $post;
    }}

    public function getPosts() {{
        return array_reverse($this->posts);
    }}

    public function deletePost($id) {{
        $this->posts = array_filter($this->posts, function($post) use ($id) {{
            return $post['id'] != $id;
        }});
        $_SESSION['posts'] = $this->posts;
    }}
}}

$cms = new CMS();

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {{
    if (isset($_POST['action'])) {{
        if ($_POST['action'] === 'add' && !empty($_POST['title'])) {{
            $cms->addPost($_POST['title'], $_POST['content']);
            header('Location: index.php');
            exit;
        }} elseif ($_POST['action'] === 'delete') {{
            $cms->deletePost($_POST['id']);
            header('Location: index.php');
            exit;
        }}
    }}
}}

$posts = $cms->getPosts();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP CMS - {self.author}</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }}
        .container {{
            max-width: 800px;
            margin: 0 auto;
        }}
        .header {{
            background: white;
            padding: 2rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }}
        .header h1 {{
            color: #667eea;
            margin-bottom: 0.5rem;
        }}
        .header p {{
            color: #666;
        }}
        .form-card {{
            background: white;
            padding: 2rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }}
        .form-group {{
            margin-bottom: 1rem;
        }}
        label {{
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: bold;
        }}
        input[type="text"], textarea {{
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }}
        textarea {{
            min-height: 100px;
            resize: vertical;
        }}
        button {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.75rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
        }}
        button:hover {{
            opacity: 0.9;
        }}
        .post {{
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }}
        .post h3 {{
            color: #667eea;
            margin-bottom: 0.5rem;
        }}
        .post-meta {{
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }}
        .delete-btn {{
            background: #e74c3c;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }}
        .footer {{
            text-align: center;
            color: white;
            margin-top: 2rem;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📝 Simple CMS</h1>
            <p>Created by {self.author}</p>
            <p>GitHub: <a href="{self.github}" target="_blank">{self.github}</a></p>
        </div>

        <div class="form-card">
            <h2>Create New Post</h2>
            <form method="POST">
                <input type="hidden" name="action" value="add">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" name="title" required>
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea name="content" required></textarea>
                </div>
                <button type="submit">Publish Post</button>
            </form>
        </div>

        <div class="posts">
            <h2 style="color: white; margin-bottom: 1rem;">Recent Posts</h2>
            <?php if (empty($posts)): ?>
                <p style="color: white;">No posts yet. Create your first post above!</p>
            <?php else: ?>
                <?php foreach ($posts as $post): ?>
                    <div class="post">
                        <h3><?php echo $post['title']; ?></h3>
                        <div class="post-meta">Posted on <?php echo $post['created_at']; ?></div>
                        <p><?php echo nl2br($post['content']); ?></p>
                        <form method="POST" style="margin-top: 1rem;">
                            <input type="hidden" name="action" value="delete">
                            <input type="hidden" name="id" value="<?php echo $post['id']; ?>">
                            <button type="submit" class="delete-btn">Delete</button>
                        </form>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

        <div class="footer">
            <p>&copy; 2024 {self.author} | All Rights Reserved</p>
        </div>
    </div>
</body>
</html>
'''

        (project_dir / "index.php").write_text(index_php, encoding='utf-8')

        readme = f'''# PHP Content Management System

**Author:** {self.author}
**GitHub:** {self.github}

## Run
```bash
php -S localhost:8000
```

Visit http://localhost:8000

## Features
- Create/delete posts
- Session-based storage
- Responsive design
- XSS protection
'''
        (project_dir / "README.md").write_text(readme, encoding='utf-8')
        print(f"✓ PHP CMS created")

if __name__ == "__main__":
    generator = ProjectGenerator()
    generator.generate_all_projects()
