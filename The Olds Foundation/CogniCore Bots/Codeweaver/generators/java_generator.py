"""
Java Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class JavaGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "Java"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_console_app()

    def _generate_console_app(self) -> Path:
        project_path = self.create_project_structure('java', 'console_application')
        src_path = project_path / "src" / "main" / "java" / "com" / "ashraf"
        src_path.mkdir(parents=True, exist_ok=True)

        main_content = f'''package com.ashraf;

/**
 * Console Application
 * Author: {self.config["user"]["name"]}
 * GitHub: {self.config["user"]["github"]}
 */
public class Main {{
    public static void main(String[] args) {{
        System.out.println("Console Application");
        System.out.println("Author: {self.config["user"]["name"]}");
        System.out.println("GitHub: {self.config["user"]["github"]}");

        TaskManager manager = new TaskManager();
        manager.addTask("Learn Java");
        manager.addTask("Build projects");
        manager.listTasks();
    }}
}}

class TaskManager {{
    private java.util.List<String> tasks = new java.util.ArrayList<>();

    public void addTask(String task) {{
        tasks.add(task);
        System.out.println("Added: " + task);
    }}

    public void listTasks() {{
        System.out.println("\\nTasks:");
        for (int i = 0; i < tasks.size(); i++) {{
            System.out.println((i + 1) + ". " + tasks.get(i));
        }}
    }}
}}
'''

        pom_xml = f'''<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.ashraf</groupId>
    <artifactId>console-app</artifactId>
    <version>1.0.0</version>
    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
</project>
'''

        self.file_manager.write_file(src_path / "Main.java", main_content)
        self.file_manager.write_file(project_path / "pom.xml", pom_xml)

        self.add_readme(project_path, "Java Console Application", "A console application with task management.",
                       "1. mvn compile\\n2. mvn exec:java -Dexec.mainClass=com.ashraf.Main", "Run the commands above")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['target/', '*.class', '.idea/'])

        return project_path
