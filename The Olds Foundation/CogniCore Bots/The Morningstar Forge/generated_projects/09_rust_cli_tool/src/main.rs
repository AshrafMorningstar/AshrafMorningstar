// File Manager CLI
// Author: Ashraf Siddiqui
// GitHub: https://github.com/AshrafMorningstar

use std::fs;
use std::io::{self, Write};
use std::path::Path;

struct FileManager {
    current_path: String,
}

impl FileManager {
    fn new() -> Self {
        FileManager {
            current_path: String::from("."),
        }
    }

    fn list_files(&self) -> io::Result<()> {
        println!("\nFiles in {}:", self.current_path);
        println!("{}", "-".repeat(50));

        let entries = fs::read_dir(&self.current_path)?;

        for entry in entries {
            let entry = entry?;
            let path = entry.path();
            let file_type = if path.is_dir() { "[DIR]" } else { "[FILE]" };
            let name = path.file_name().unwrap().to_string_lossy();
            println!("{} {}", file_type, name);
        }

        Ok(())
    }

    fn create_file(&self, filename: &str) -> io::Result<()> {
        let path = Path::new(&self.current_path).join(filename);
        fs::File::create(path)?;
        println!("✓ Created file: {}", filename);
        Ok(())
    }

    fn create_dir(&self, dirname: &str) -> io::Result<()> {
        let path = Path::new(&self.current_path).join(dirname);
        fs::create_dir(path)?;
        println!("✓ Created directory: {}", dirname);
        Ok(())
    }

    fn show_help(&self) {
        println!("\n=== File Manager CLI ===");
        println!("Author: Ashraf Siddiqui");
        println!("GitHub: https://github.com/AshrafMorningstar");
        println!("\nCommands:");
        println!("  list         - List files");
        println!("  create <file> - Create file");
        println!("  mkdir <dir>  - Create directory");
        println!("  help         - Show this help");
        println!("  quit         - Exit program");
    }
}

fn main() {
    let manager = FileManager::new();

    println!("=================================");
    println!("  File Manager CLI Tool");
    println!("  Author: Ashraf Siddiqui");
    println!("  GitHub: https://github.com/AshrafMorningstar");
    println!("=================================");

    manager.show_help();

    loop {
        print!("\n> ");
        io::stdout().flush().unwrap();

        let mut input = String::new();
        io::stdin().read_line(&mut input).unwrap();

        let parts: Vec<&str> = input.trim().split_whitespace().collect();

        if parts.is_empty() {
            continue;
        }

        match parts[0] {
            "list" => {
                if let Err(e) = manager.list_files() {
                    eprintln!("Error: {}", e);
                }
            }
            "create" => {
                if parts.len() < 2 {
                    println!("Usage: create <filename>");
                } else {
                    if let Err(e) = manager.create_file(parts[1]) {
                        eprintln!("Error: {}", e);
                    }
                }
            }
            "mkdir" => {
                if parts.len() < 2 {
                    println!("Usage: mkdir <dirname>");
                } else {
                    if let Err(e) = manager.create_dir(parts[1]) {
                        eprintln!("Error: {}", e);
                    }
                }
            }
            "help" => manager.show_help(),
            "quit" | "exit" => {
                println!("Goodbye!");
                break;
            }
            _ => println!("Unknown command. Type 'help' for available commands."),
        }
    }
}
