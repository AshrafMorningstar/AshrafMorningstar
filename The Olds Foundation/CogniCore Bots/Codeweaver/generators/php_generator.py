"""
PHP Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class PhpGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "PHP"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_mvc_app()

    def _generate_mvc_app(self) -> Path:
        project_path = self.create_project_structure('php', 'mvc_application')

        index_content = f'''<?php
/**
 * PHP MVC Application
 * Author: {self.config["user"]["name"]}
 * GitHub: {self.config["user"]["github"]}
 */

require_once 'TaskController.php';

$controller = new TaskController();
$action = $_GET['action'] ?? 'index';

switch ($action) {{
    case 'list':
        $controller->listTasks();
        break;
    case 'add':
        $controller->addTask();
        break;
    default:
        $controller->index();
}}
?>
'''

        controller_content = f'''<?php
/**
 * Task Controller
 * Author: {self.config["user"]["name"]}
 * GitHub: {self.config["user"]["github"]}
 */

class TaskController {{
    private $tasks = [];

    public function __construct() {{
        session_start();
        if (isset($_SESSION['tasks'])) {{
            $this->tasks = $_SESSION['tasks'];
        }}
    }}

    public function index() {{
        echo "<h1>PHP MVC Application</h1>";
        echo "<p>Author: {self.config["user"]["name"]}</p>";
        echo "<p>GitHub: {self.config["user"]["github"]}</p>";
        echo "<a href='?action=list'>View Tasks</a>";
    }}

    public function listTasks() {{
        echo "<h2>Tasks</h2>";
        foreach ($this->tasks as $task) {{
            echo "<li>" . htmlspecialchars($task) . "</li>";
        }}
        echo "<br><a href='?action=add'>Add Task</a>";
    }}

    public function addTask() {{
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {{
            $task = $_POST['task'] ?? '';
            if (!empty($task)) {{
                $this->tasks[] = $task;
                $_SESSION['tasks'] = $this->tasks;
                header('Location: ?action=list');
                exit;
            }}
        }}

        echo "<h2>Add Task</h2>";
        echo "<form method='POST'>";
        echo "<input type='text' name='task' required>";
        echo "<button type='submit'>Add</button>";
        echo "</form>";
    }}
}}
?>
'''

        composer_json = f'''{{
    "name": "ashraf/mvc-app",
    "description": "PHP MVC Application",
    "type": "project",
    "authors": [
        {{
            "name": "{self.config["user"]["name"]}",
            "email": "{self.config["user"].get("email", "")}"
        }}
    ],
    "require": {{
        "php": ">=7.4"
    }}
}}
'''

        self.file_manager.write_file(project_path / "index.php", index_content)
        self.file_manager.write_file(project_path / "TaskController.php", controller_content)
        self.file_manager.write_file(project_path / "composer.json", composer_json)

        self.add_readme(project_path, "PHP MVC Application", "A simple MVC application built with PHP.",
                       "1. php -S localhost:8000", "Visit http://localhost:8000")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['vendor/', 'composer.lock'])

        return project_path
