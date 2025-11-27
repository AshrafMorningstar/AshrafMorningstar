"""
Web Projects Generator (HTML/CSS/JavaScript)
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Generates modern web application projects.
"""

from pathlib import Path
from .base_generator import BaseGenerator


class WebGenerator(BaseGenerator):
    """
    Generates web application projects (HTML/CSS/JavaScript).

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """

    def get_language_name(self) -> str:
        return "Web (HTML/CSS/JavaScript)"

    def generate_project(self, project_name: str) -> Path:
        """Generate a web project based on the project name."""
        project_generators = {
            'portfolio': self._generate_portfolio,
            'task_manager': self._generate_task_manager,
            'weather_dashboard': self._generate_weather_dashboard,
            'game': self._generate_game
        }

        generator = project_generators.get(project_name)
        if not generator:
            raise ValueError(f"Unknown web project: {project_name}")

        return generator()

    def _generate_portfolio(self) -> Path:
        """Generate a responsive portfolio website."""
        project_path = self.create_project_structure('web', 'portfolio_website')

        # HTML
        html_content = f"""{self.branding.get_code_header('html', 'Portfolio Website')}
<!DOCTYPE html>
<html lang="en">
<head>
{self.branding.get_html_meta_tags('Portfolio Website', 'Professional portfolio website showcasing projects and skills')}
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">{self.config['user']['name']}</h1>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Hi, I'm {self.config['user']['name']}</h1>
                <p class="hero-subtitle">Full Stack Developer & Project Creator</p>
                <p class="hero-description">Building amazing projects across multiple programming languages</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View Projects</a>
                    <a href="{self.config['user']['github']}" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <p>I'm a passionate developer who loves creating innovative solutions across multiple programming languages.</p>
                <p>My expertise spans web development, mobile apps, backend systems, and automation tools.</p>
                <div class="skills">
                    <div class="skill-item">HTML/CSS/JavaScript</div>
                    <div class="skill-item">Python</div>
                    <div class="skill-item">Swift</div>
                    <div class="skill-item">Ruby</div>
                    <div class="skill-item">Java</div>
                    <div class="skill-item">Go</div>
                    <div class="skill-item">Rust</div>
                    <div class="skill-item">C++</div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Multi-Language Project Generator</h3>
                    <p>Automated bot that generates fully working projects across 10+ programming languages</p>
                    <a href="{self.config['user']['github']}" class="project-link">View on GitHub →</a>
                </div>
                <div class="project-card">
                    <h3>Web Applications</h3>
                    <p>Modern, responsive web applications with beautiful UI/UX</p>
                    <a href="{self.config['user']['github']}" class="project-link">View on GitHub →</a>
                </div>
                <div class="project-card">
                    <h3>Mobile Apps</h3>
                    <p>iOS and Android applications with native performance</p>
                    <a href="{self.config['user']['github']}" class="project-link">View on GitHub →</a>
                </div>
                <div class="project-card">
                    <h3>Backend Systems</h3>
                    <p>Scalable APIs and microservices architecture</p>
                    <a href="{self.config['user']['github']}" class="project-link">View on GitHub →</a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <p>Interested in collaborating or have a project in mind?</p>
                <a href="{self.config['user']['github']}" target="_blank" class="btn btn-primary">Connect on GitHub</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 {self.config['user']['name']}. All rights reserved.</p>
            <p>Generated by Multi-Language Project Generator Bot</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
"""

        # CSS
        css_content = f"""{self.branding.get_code_header('css', 'Portfolio Website Styles')}

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

:root {{
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-bg: #0f172a;
    --light-bg: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --accent: #f59e0b;
}}

body {{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--dark-bg);
    color: var(--text-primary);
    line-height: 1.6;
}}

.container {{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}}

/* Navbar */
.navbar {{
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}}

.navbar .container {{
    display: flex;
    justify-content: space-between;
    align-items: center;
}}

.logo {{
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}}

.nav-links {{
    display: flex;
    list-style: none;
    gap: 2rem;
}}

.nav-links a {{
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
}}

.nav-links a:hover {{
    color: var(--primary-color);
}}

/* Hero Section */
.hero {{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 20px 50px;
    background: linear-gradient(135deg, var(--dark-bg) 0%, var(--light-bg) 100%);
}}

.hero-title {{
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInUp 1s ease;
}}

.hero-subtitle {{
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease 0.2s both;
}}

.hero-description {{
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.4s both;
}}

.hero-buttons {{
    display: flex;
    gap: 1rem;
    justify-content: center;
    animation: fadeInUp 1s ease 0.6s both;
}}

/* Buttons */
.btn {{
    padding: 0.75rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
}}

.btn-primary {{
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
}}

.btn-primary:hover {{
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}}

.btn-secondary {{
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}}

.btn-secondary:hover {{
    background: var(--primary-color);
    color: white;
}}

/* Sections */
section {{
    padding: 80px 20px;
}}

.section-title {{
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}}

/* About Section */
.about {{
    background: var(--light-bg);
}}

.about-content {{
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}}

.about-content p {{
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}}

.skills {{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}}

.skill-item {{
    background: var(--dark-bg);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    transition: all 0.3s;
}}

.skill-item:hover {{
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}}

/* Projects Section */
.projects-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}}

.project-card {{
    background: var(--light-bg);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    transition: all 0.3s;
}}

.project-card:hover {{
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}}

.project-card h3 {{
    color: var(--primary-color);
    margin-bottom: 1rem;
}}

.project-card p {{
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}}

.project-link {{
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}}

.project-link:hover {{
    color: var(--secondary-color);
}}

/* Contact Section */
.contact {{
    background: var(--light-bg);
}}

.contact-content {{
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}}

.contact-content p {{
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}}

/* Footer */
.footer {{
    background: var(--dark-bg);
    text-align: center;
    padding: 2rem;
    color: var(--text-secondary);
}}

.footer p {{
    margin: 0.5rem 0;
}}

/* Animations */
@keyframes fadeInUp {{
    from {{
        opacity: 0;
        transform: translateY(30px);
    }}
    to {{
        opacity: 1;
        transform: translateY(0);
    }}
}}

/* Responsive */
@media (max-width: 768px) {{
    .hero-title {{
        font-size: 2.5rem;
    }}

    .nav-links {{
        gap: 1rem;
    }}

    .hero-buttons {{
        flex-direction: column;
    }}
}}
"""

        # JavaScript
        js_content = f"""{self.branding.get_code_header('javascript', 'Portfolio Website Script')}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {{
    anchor.addEventListener('click', function (e) {{
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {{
            target.scrollIntoView({{
                behavior: 'smooth',
                block: 'start'
            }});
        }}
    }});
}});

// Navbar background on scroll
window.addEventListener('scroll', () => {{
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {{
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    }} else {{
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }}
}});

// Animate elements on scroll
const observerOptions = {{
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
}};

const observer = new IntersectionObserver((entries) => {{
    entries.forEach(entry => {{
        if (entry.isIntersecting) {{
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }}
    }});
}}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {{
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
}});

// Add active state to navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {{
    let current = '';
    sections.forEach(section => {{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {{
            current = section.getAttribute('id');
        }}
    }});

    navLinks.forEach(link => {{
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {{
            link.classList.add('active');
        }}
    }});
}});

console.log('Portfolio Website by {self.config["user"]["name"]}');
console.log('GitHub: {self.config["user"]["github"]}');
"""

        self.file_manager.write_file(project_path / "index.html", html_content)
        self.file_manager.write_file(project_path / "styles.css", css_content)
        self.file_manager.write_file(project_path / "script.js", js_content)

        self.add_readme(
            project_path,
            "Portfolio Website",
            "A modern, responsive portfolio website showcasing projects and skills with smooth animations and beautiful design.",
            setup_instructions="1. No setup required!\n2. Simply open `index.html` in your web browser",
            usage_instructions="Open `index.html` in any modern web browser to view the portfolio website."
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.log', '.DS_Store', 'Thumbs.db'])

        return project_path

    def _generate_task_manager(self) -> Path:
        """Generate a task manager web application."""
        project_path = self.create_project_structure('web', 'task_manager_app')

        # HTML
        html_content = f"""{self.branding.get_code_header('html', 'Task Manager App')}
<!DOCTYPE html>
<html lang="en">
<head>
{self.branding.get_html_meta_tags('Task Manager', 'A powerful task management application with local storage')}
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header class="app-header">
            <h1>📝 Task Manager</h1>
            <p class="subtitle">by {self.config['user']['name']}</p>
        </header>

        <div class="main-content">
            <div class="add-task-section">
                <input type="text" id="taskInput" placeholder="Enter a new task..." class="task-input">
                <button id="addTaskBtn" class="btn btn-add">Add Task</button>
            </div>

            <div class="filter-section">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>

            <div class="tasks-container">
                <ul id="taskList" class="task-list"></ul>
            </div>

            <div class="stats-section">
                <span id="taskStats" class="stats-text">0 tasks</span>
                <button id="clearCompletedBtn" class="btn btn-clear">Clear Completed</button>
            </div>
        </div>

        <footer class="app-footer">
            <p>Created by {self.config['user']['name']} | <a href="{self.config['user']['github']}" target="_blank">GitHub</a></p>
        </footer>
    </div>

    <script src="app.js"></script>
</body>
</html>
"""

        # CSS
        css_content = f"""{self.branding.get_code_header('css', 'Task Manager Styles')}

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

:root {{
    --primary: #667eea;
    --secondary: #764ba2;
    --success: #48bb78;
    --danger: #f56565;
    --dark: #2d3748;
    --light: #f7fafc;
    --gray: #a0aec0;
}}

body {{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}}

.app-container {{
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    width: 100%;
    overflow: hidden;
}}

.app-header {{
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 2rem;
    text-align: center;
}}

.app-header h1 {{
    font-size: 2rem;
    margin-bottom: 0.5rem;
}}

.subtitle {{
    opacity: 0.9;
    font-size: 0.9rem;
}}

.main-content {{
    padding: 2rem;
}}

.add-task-section {{
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}}

.task-input {{
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s;
}}

.task-input:focus {{
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}}

.btn {{
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}}

.btn-add {{
    background: var(--primary);
    color: white;
}}

.btn-add:hover {{
    background: var(--secondary);
    transform: translateY(-2px);
}}

.filter-section {{
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
}}

.filter-btn {{
    padding: 0.5rem 1rem;
    border: 2px solid #e2e8f0;
    background: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.9rem;
}}

.filter-btn.active {{
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}}

.task-list {{
    list-style: none;
    max-height: 400px;
    overflow-y: auto;
}}

.task-item {{
    display: flex;
    align-items: center;
    padding: 1rem;
    background: #f7fafc;
    border-radius: 10px;
    margin-bottom: 0.75rem;
    transition: all 0.3s;
    animation: slideIn 0.3s ease;
}}

.task-item:hover {{
    background: #edf2f7;
    transform: translateX(5px);
}}

.task-item.completed {{
    opacity: 0.6;
}}

.task-item.completed .task-text {{
    text-decoration: line-through;
    color: var(--gray);
}}

.task-checkbox {{
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    cursor: pointer;
}}

.task-text {{
    flex: 1;
    font-size: 1rem;
    color: var(--dark);
}}

.task-delete {{
    background: var(--danger);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}}

.task-delete:hover {{
    background: #c53030;
}}

.stats-section {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 2px solid #e2e8f0;
}}

.stats-text {{
    color: var(--gray);
    font-size: 0.9rem;
}}

.btn-clear {{
    background: var(--danger);
    color: white;
    padding: 0.5rem 1rem;
}}

.btn-clear:hover {{
    background: #c53030;
}}

.app-footer {{
    background: #f7fafc;
    padding: 1rem;
    text-align: center;
    color: var(--gray);
    font-size: 0.9rem;
}}

.app-footer a {{
    color: var(--primary);
    text-decoration: none;
}}

@keyframes slideIn {{
    from {{
        opacity: 0;
        transform: translateX(-20px);
    }}
    to {{
        opacity: 1;
        transform: translateX(0);
    }}
}}

.task-list::-webkit-scrollbar {{
    width: 8px;
}}

.task-list::-webkit-scrollbar-track {{
    background: #f1f1f1;
    border-radius: 10px;
}}

.task-list::-webkit-scrollbar-thumb {{
    background: var(--primary);
    border-radius: 10px;
}}
"""

        # JavaScript
        js_content = f"""{self.branding.get_code_header('javascript', 'Task Manager App')}

class TaskManager {{
    constructor() {{
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }}

    init() {{
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        this.taskStats = document.getElementById('taskStats');
        this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
        this.filterBtns = document.querySelectorAll('.filter-btn');

        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {{
            if (e.key === 'Enter') this.addTask();
        }});
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());

        this.filterBtns.forEach(btn => {{
            btn.addEventListener('click', (e) => {{
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.renderTasks();
            }});
        }});

        this.renderTasks();
    }}

    addTask() {{
        const text = this.taskInput.value.trim();
        if (!text) return;

        const task = {{
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        }};

        this.tasks.push(task);
        this.saveTasks();
        this.taskInput.value = '';
        this.renderTasks();
    }}

    deleteTask(id) {{
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
    }}

    toggleTask(id) {{
        const task = this.tasks.find(t => t.id === id);
        if (task) {{
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }}
    }}

    clearCompleted() {{
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveTasks();
        this.renderTasks();
    }}

    getFilteredTasks() {{
        switch(this.currentFilter) {{
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }}
    }}

    renderTasks() {{
        const filteredTasks = this.getFilteredTasks();

        this.taskList.innerHTML = filteredTasks.map(task => `
            <li class="task-item ${{task.completed ? 'completed' : ''}}">
                <input
                    type="checkbox"
                    class="task-checkbox"
                    ${{task.completed ? 'checked' : ''}}
                    onchange="taskManager.toggleTask(${{task.id}})"
                >
                <span class="task-text">${{this.escapeHtml(task.text)}}</span>
                <button class="task-delete" onclick="taskManager.deleteTask(${{task.id}})">Delete</button>
            </li>
        `).join('');

        this.updateStats();
    }}

    updateStats() {{
        const total = this.tasks.length;
        const active = this.tasks.filter(t => !t.completed).length;
        const completed = this.tasks.filter(t => t.completed).length;

        this.taskStats.textContent = `${{total}} total, ${{active}} active, ${{completed}} completed`;
    }}

    saveTasks() {{
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }}

    loadTasks() {{
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }}

    escapeHtml(text) {{
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }}
}}

// Initialize the app
const taskManager = new TaskManager();

console.log('Task Manager by {self.config["user"]["name"]}');
console.log('GitHub: {self.config["user"]["github"]}');
"""

        self.file_manager.write_file(project_path / "index.html", html_content)
        self.file_manager.write_file(project_path / "styles.css", css_content)
        self.file_manager.write_file(project_path / "app.js", js_content)

        self.add_readme(
            project_path,
            "Task Manager App",
            "A full-featured task management application with local storage, filtering, and a beautiful UI.",
            setup_instructions="1. No setup required!\n2. Simply open `index.html` in your web browser",
            usage_instructions="- Add tasks using the input field\n- Click checkboxes to mark tasks as complete\n- Filter tasks by status (All/Active/Completed)\n- Delete individual tasks or clear all completed tasks\n- All data is saved automatically in your browser's local storage"
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.log', '.DS_Store'])

        return project_path

    def _generate_weather_dashboard(self) -> Path:
        """Generate a weather dashboard application."""
        project_path = self.create_project_structure('web', 'weather_dashboard')

        # HTML with weather dashboard
        html_content = f"""{self.branding.get_code_header('html', 'Weather Dashboard')}
<!DOCTYPE html>
<html lang="en">
<head>
{self.branding.get_html_meta_tags('Weather Dashboard', 'Real-time weather information dashboard')}
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="dashboard-container">
        <header class="dashboard-header">
            <h1>🌤️ Weather Dashboard</h1>
            <p class="author">by {self.config['user']['name']}</p>
        </header>

        <div class="search-section">
            <input type="text" id="cityInput" placeholder="Enter city name..." class="city-input">
            <button id="searchBtn" class="btn-search">Search</button>
        </div>

        <div id="weatherDisplay" class="weather-display">
            <div class="welcome-message">
                <h2>Welcome to Weather Dashboard</h2>
                <p>Enter a city name to get started</p>
                <p class="demo-note">Demo mode: Showing sample data</p>
            </div>
        </div>

        <footer class="dashboard-footer">
            <p>Created by {self.config['user']['name']} | <a href="{self.config['user']['github']}" target="_blank">GitHub</a></p>
        </footer>
    </div>

    <script src="weather.js"></script>
</body>
</html>
"""

        # CSS
        css_content = f"""{self.branding.get_code_header('css', 'Weather Dashboard Styles')}

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

body {{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}}

.dashboard-container {{
    max-width: 800px;
    margin: 0 auto;
}}

.dashboard-header {{
    text-align: center;
    color: white;
    margin-bottom: 2rem;
}}

.dashboard-header h1 {{
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}}

.author {{
    opacity: 0.9;
}}

.search-section {{
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}}

.city-input {{
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}}

.btn-search {{
    padding: 1rem 2rem;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}}

.btn-search:hover {{
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}}

.weather-display {{
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    min-height: 400px;
}}

.welcome-message {{
    text-align: center;
    padding: 3rem 0;
    color: #667eea;
}}

.welcome-message h2 {{
    margin-bottom: 1rem;
}}

.demo-note {{
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #999;
}}

.weather-content {{
    animation: fadeIn 0.5s ease;
}}

.current-weather {{
    text-align: center;
    padding: 2rem 0;
    border-bottom: 2px solid #f0f0f0;
}}

.city-name {{
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
}}

.temperature {{
    font-size: 4rem;
    color: #667eea;
    font-weight: bold;
}}

.weather-description {{
    font-size: 1.5rem;
    color: #666;
    text-transform: capitalize;
}}

.weather-details {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}}

.detail-item {{
    text-align: center;
    padding: 1rem;
    background: #f7fafc;
    border-radius: 10px;
}}

.detail-label {{
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 0.5rem;
}}

.detail-value {{
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
}}

.dashboard-footer {{
    text-align: center;
    color: white;
    margin-top: 2rem;
    opacity: 0.9;
}}

.dashboard-footer a {{
    color: white;
    text-decoration: underline;
}}

@keyframes fadeIn {{
    from {{
        opacity: 0;
        transform: translateY(20px);
    }}
    to {{
        opacity: 1;
        transform: translateY(0);
    }}
}}
"""

        # JavaScript
        js_content = f"""{self.branding.get_code_header('javascript', 'Weather Dashboard')}

class WeatherDashboard {{
    constructor() {{
        this.init();
    }}

    init() {{
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.weatherDisplay = document.getElementById('weatherDisplay');

        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.cityInput.addEventListener('keypress', (e) => {{
            if (e.key === 'Enter') this.searchWeather();
        }});
    }}

    async searchWeather() {{
        const city = this.cityInput.value.trim();
        if (!city) return;

        this.showLoading();

        // Demo mode: Generate sample weather data
        setTimeout(() => {{
            const weatherData = this.generateSampleData(city);
            this.displayWeather(weatherData);
        }}, 500);

        // For real API integration, uncomment below:
        // const apiKey = 'YOUR_API_KEY';
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${{city}}&appid=${{apiKey}}&units=metric`;
        // try {{
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     this.displayWeather(data);
        // }} catch (error) {{
        //     this.showError('Failed to fetch weather data');
        // }}
    }}

    generateSampleData(city) {{
        const temperatures = [15, 18, 22, 25, 28, 20, 16];
        const conditions = ['Clear', 'Clouds', 'Rain', 'Sunny', 'Partly Cloudy'];
        const temp = temperatures[Math.floor(Math.random() * temperatures.length)];

        return {{
            name: city,
            main: {{
                temp: temp,
                feels_like: temp - 2,
                humidity: Math.floor(Math.random() * 40) + 40,
                pressure: Math.floor(Math.random() * 50) + 1000
            }},
            weather: [{{
                description: conditions[Math.floor(Math.random() * conditions.length)]
            }}],
            wind: {{
                speed: (Math.random() * 10 + 2).toFixed(1)
            }}
        }};
    }}

    displayWeather(data) {{
        const html = `
            <div class="weather-content">
                <div class="current-weather">
                    <h2 class="city-name">${{data.name}}</h2>
                    <div class="temperature">${{Math.round(data.main.temp)}}°C</div>
                    <div class="weather-description">${{data.weather[0].description}}</div>
                </div>
                <div class="weather-details">
                    <div class="detail-item">
                        <div class="detail-label">Feels Like</div>
                        <div class="detail-value">${{Math.round(data.main.feels_like)}}°C</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Humidity</div>
                        <div class="detail-value">${{data.main.humidity}}%</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Wind Speed</div>
                        <div class="detail-value">${{data.wind.speed}} m/s</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Pressure</div>
                        <div class="detail-value">${{data.main.pressure}} hPa</div>
                    </div>
                </div>
            </div>
        `;

        this.weatherDisplay.innerHTML = html;
    }}

    showLoading() {{
        this.weatherDisplay.innerHTML = `
            <div class="welcome-message">
                <h2>Loading...</h2>
                <p>Fetching weather data</p>
            </div>
        `;
    }}

    showError(message) {{
        this.weatherDisplay.innerHTML = `
            <div class="welcome-message">
                <h2>Error</h2>
                <p>${{message}}</p>
            </div>
        `;
    }}
}}

// Initialize the dashboard
const dashboard = new WeatherDashboard();

console.log('Weather Dashboard by {self.config["user"]["name"]}');
console.log('GitHub: {self.config["user"]["github"]}');
"""

        self.file_manager.write_file(project_path / "index.html", html_content)
        self.file_manager.write_file(project_path / "styles.css", css_content)
        self.file_manager.write_file(project_path / "weather.js", js_content)

        self.add_readme(
            project_path,
            "Weather Dashboard",
            "A beautiful weather dashboard application that displays real-time weather information for any city.",
            setup_instructions="1. Open `index.html` in your web browser\n2. (Optional) To use real weather data, get an API key from OpenWeatherMap and update the JavaScript code",
            usage_instructions="- Enter a city name and click Search\n- View current temperature, conditions, and weather details\n- Currently in demo mode with sample data\n- To enable real API calls, uncomment the API integration code in weather.js"
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.log', '.DS_Store', 'config.js'])

        return project_path

    def _generate_game(self) -> Path:
        """Generate a browser-based game (Snake game)."""
        project_path = self.create_project_structure('web', 'snake_game')

        # HTML
        html_content = f"""{self.branding.get_code_header('html', 'Snake Game')}
<!DOCTYPE html>
<html lang="en">
<head>
{self.branding.get_html_meta_tags('Snake Game', 'Classic Snake game built with HTML5 Canvas')}
    <link rel="stylesheet" href="game.css">
</head>
<body>
    <div class="game-container">
        <header class="game-header">
            <h1>🐍 Snake Game</h1>
            <p>by {self.config['user']['name']}</p>
        </header>

        <div class="game-info">
            <div class="score-display">
                <span class="label">Score:</span>
                <span id="score" class="value">0</span>
            </div>
            <div class="high-score-display">
                <span class="label">High Score:</span>
                <span id="highScore" class="value">0</span>
            </div>
        </div>

        <canvas id="gameCanvas" width="400" height="400"></canvas>

        <div class="game-controls">
            <button id="startBtn" class="btn btn-start">Start Game</button>
            <button id="pauseBtn" class="btn btn-pause" disabled>Pause</button>
            <button id="resetBtn" class="btn btn-reset">Reset</button>
        </div>

        <div class="instructions">
            <h3>How to Play</h3>
            <p>Use arrow keys (↑ ↓ ← →) to control the snake</p>
            <p>Eat the red food to grow and score points</p>
            <p>Don't hit the walls or yourself!</p>
        </div>

        <footer class="game-footer">
            <p>Created by {self.config['user']['name']} | <a href="{self.config['user']['github']}" target="_blank">GitHub</a></p>
        </footer>
    </div>

    <script src="snake.js"></script>
</body>
</html>
"""

        # CSS
        css_content = f"""{self.branding.get_code_header('css', 'Snake Game Styles')}

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

body {{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}}

.game-container {{
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 500px;
}}

.game-header h1 {{
    color: #667eea;
    margin-bottom: 0.5rem;
}}

.game-header p {{
    color: #999;
}}

.game-info {{
    display: flex;
    justify-content: space-around;
    margin: 1.5rem 0;
    padding: 1rem;
    background: #f7fafc;
    border-radius: 10px;
}}

.score-display, .high-score-display {{
    font-size: 1.2rem;
}}

.label {{
    color: #666;
    margin-right: 0.5rem;
}}

.value {{
    color: #667eea;
    font-weight: bold;
    font-size: 1.5rem;
}}

#gameCanvas {{
    border: 3px solid #667eea;
    border-radius: 10px;
    margin: 1rem 0;
    background: #f0f0f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}}

.game-controls {{
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 1.5rem 0;
}}

.btn {{
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}}

.btn-start {{
    background: #48bb78;
    color: white;
}}

.btn-start:hover:not(:disabled) {{
    background: #38a169;
    transform: translateY(-2px);
}}

.btn-pause {{
    background: #ed8936;
    color: white;
}}

.btn-pause:hover:not(:disabled) {{
    background: #dd6b20;
    transform: translateY(-2px);
}}

.btn-reset {{
    background: #f56565;
    color: white;
}}

.btn-reset:hover {{
    background: #e53e3e;
    transform: translateY(-2px);
}}

.btn:disabled {{
    opacity: 0.5;
    cursor: not-allowed;
}}

.instructions {{
    background: #f7fafc;
    padding: 1.5rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    text-align: left;
}}

.instructions h3 {{
    color: #667eea;
    margin-bottom: 1rem;
}}

.instructions p {{
    color: #666;
    margin: 0.5rem 0;
}}

.game-footer {{
    margin-top: 1.5rem;
    color: #999;
    font-size: 0.9rem;
}}

.game-footer a {{
    color: #667eea;
    text-decoration: none;
}}
"""

        # JavaScript
        js_content = f"""{self.branding.get_code_header('javascript', 'Snake Game Logic')}

class SnakeGame {{
    constructor() {{
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.tileCount = this.canvas.width / this.gridSize;

        this.snake = [{{x: 10, y: 10}}];
        this.food = {{x: 15, y: 15}};
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.highScore = this.loadHighScore();
        this.gameLoop = null;
        this.isPaused = false;
        this.gameSpeed = 100;

        this.init();
    }}

    init() {{
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.scoreDisplay = document.getElementById('score');
        this.highScoreDisplay = document.getElementById('highScore');

        this.highScoreDisplay.textContent = this.highScore;

        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        this.resetBtn.addEventListener('click', () => this.reset());

        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        this.draw();
    }}

    start() {{
        if (this.gameLoop) return;

        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.gameLoop = setInterval(() => this.update(), this.gameSpeed);
    }}

    togglePause() {{
        this.isPaused = !this.isPaused;
        this.pauseBtn.textContent = this.isPaused ? 'Resume' : 'Pause';
    }}

    reset() {{
        clearInterval(this.gameLoop);
        this.gameLoop = null;
        this.snake = [{{x: 10, y: 10}}];
        this.food = {{x: 15, y: 15}};
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.isPaused = false;
        this.scoreDisplay.textContent = '0';
        this.pauseBtn.textContent = 'Pause';
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.draw();
    }}

    handleKeyPress(e) {{
        const key = e.key;

        if (key === 'ArrowUp' && this.dy === 0) {{
            this.dx = 0;
            this.dy = -1;
        }} else if (key === 'ArrowDown' && this.dy === 0) {{
            this.dx = 0;
            this.dy = 1;
        }} else if (key === 'ArrowLeft' && this.dx === 0) {{
            this.dx = -1;
            this.dy = 0;
        }} else if (key === 'ArrowRight' && this.dx === 0) {{
            this.dx = 1;
            this.dy = 0;
        }}
    }}

    update() {{
        if (this.isPaused) return;

        const head = {{
            x: this.snake[0].x + this.dx,
            y: this.snake[0].y + this.dy
        }};

        // Check wall collision
        if (head.x < 0 || head.x >= this.tileCount ||
            head.y < 0 || head.y >= this.tileCount) {{
            this.gameOver();
            return;
        }}

        // Check self collision
        if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {{
            this.gameOver();
            return;
        }}

        this.snake.unshift(head);

        // Check food collision
        if (head.x === this.food.x && head.y === this.food.y) {{
            this.score += 10;
            this.scoreDisplay.textContent = this.score;
            this.generateFood();

            if (this.score > this.highScore) {{
                this.highScore = this.score;
                this.highScoreDisplay.textContent = this.highScore;
                this.saveHighScore();
            }}
        }} else {{
            this.snake.pop();
        }}

        this.draw();
    }}

    draw() {{
        // Clear canvas
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw snake
        this.snake.forEach((segment, index) => {{
            this.ctx.fillStyle = index === 0 ? '#48bb78' : '#68d391';
            this.ctx.fillRect(
                segment.x * this.gridSize,
                segment.y * this.gridSize,
                this.gridSize - 2,
                this.gridSize - 2
            );
        }});

        // Draw food
        this.ctx.fillStyle = '#f56565';
        this.ctx.fillRect(
            this.food.x * this.gridSize,
            this.food.y * this.gridSize,
            this.gridSize - 2,
            this.gridSize - 2
        );
    }}

    generateFood() {{
        this.food = {{
            x: Math.floor(Math.random() * this.tileCount),
            y: Math.floor(Math.random() * this.tileCount)
        }};

        // Make sure food doesn't spawn on snake
        while (this.snake.some(segment => segment.x === this.food.x && segment.y === this.food.y)) {{
            this.food = {{
                x: Math.floor(Math.random() * this.tileCount),
                y: Math.floor(Math.random() * this.tileCount)
            }};
        }}
    }}

    gameOver() {{
        clearInterval(this.gameLoop);
        this.gameLoop = null;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Score: ${{this.score}}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
    }}

    saveHighScore() {{
        localStorage.setItem('snakeHighScore', this.highScore.toString());
    }}

    loadHighScore() {{
        const saved = localStorage.getItem('snakeHighScore');
        return saved ? parseInt(saved) : 0;
    }}
}}

// Initialize the game
const game = new SnakeGame();

console.log('Snake Game by {self.config["user"]["name"]}');
console.log('GitHub: {self.config["user"]["github"]}');
"""

        self.file_manager.write_file(project_path / "index.html", html_content)
        self.file_manager.write_file(project_path / "game.css", css_content)
        self.file_manager.write_file(project_path / "snake.js", js_content)

        self.add_readme(
            project_path,
            "Snake Game",
            "A classic Snake game built with HTML5 Canvas. Control the snake, eat food, and try to beat your high score!",
            setup_instructions="1. Open `index.html` in your web browser",
            usage_instructions="- Click 'Start Game' to begin\n- Use arrow keys (↑ ↓ ← →) to control the snake\n- Eat the red food to grow and score points\n- Avoid hitting walls or yourself\n- Your high score is saved automatically"
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.log', '.DS_Store'])

        return project_path
