"""
Rust Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class RustGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "Rust"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_cli_tool()

    def _generate_cli_tool(self) -> Path:
        project_path = self.create_project_structure('rust', 'cli_tool')
        src_path = project_path / "src"
        src_path.mkdir(exist_ok=True)

        main_content = f'''// Author: {self.config["user"]["name"]}
// GitHub: {self.config["user"]["github"]}

use std::io;

fn main() {{
    println!("Rust CLI Tool");
    println!("Author: {self.config["user"]["name"]}");
    println!("GitHub: {self.config["user"]["github"]}");
    println!();

    let mut tasks: Vec<String> = Vec::new();

    loop {{
        println!("\\n1. Add task");
        println!("2. List tasks");
        println!("3. Exit");
        println!("Choose an option: ");

        let mut choice = String::new();
        io::stdin().read_line(&mut choice).expect("Failed to read line");

        match choice.trim() {{
            "1" => {{
                println!("Enter task: ");
                let mut task = String::new();
                io::stdin().read_line(&mut task).expect("Failed to read line");
                tasks.push(task.trim().to_string());
                println!("Task added!");
            }}
            "2" => {{
                println!("\\nTasks:");
                for (i, task) in tasks.iter().enumerate() {{
                    println!("{{}}.  {{}}", i + 1, task);
                }}
            }}
            "3" => {{
                println!("Goodbye!");
                break;
            }}
            _ => println!("Invalid option"),
        }}
    }}
}}
'''

        cargo_toml = self.branding.get_cargo_toml("Rust CLI Tool", "A command-line task manager")

        self.file_manager.write_file(src_path / "main.rs", main_content)
        self.file_manager.write_file(project_path / "Cargo.toml", cargo_toml)

        self.add_readme(project_path, "Rust CLI Tool", "A command-line task manager built with Rust.",
                       "1. cargo build\\n2. cargo run", "Follow the on-screen prompts")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['target/', 'Cargo.lock'])

        return project_path
