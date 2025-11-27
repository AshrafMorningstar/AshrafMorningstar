use std::collections::HashMap;
use std::fmt;

#[derive(Debug, Clone)]
struct Task {
    id: u32,
    title: String,
    description: String,
    completed: bool,
    priority: Priority,
}

#[derive(Debug, Clone, PartialEq)]
enum Priority {
    Low,
    Medium,
    High,
    Critical,
}

impl fmt::Display for Priority {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Priority::Low => write!(f, "Low"),
            Priority::Medium => write!(f, "Medium"),
            Priority::High => write!(f, "High"),
            Priority::Critical => write!(f, "Critical"),
        }
    }
}

struct TaskManager {
    tasks: HashMap<u32, Task>,
    next_id: u32,
}

impl TaskManager {
    fn new() -> Self {
        TaskManager {
            tasks: HashMap::new(),
            next_id: 1,
        }
    }

    fn add_task(&mut self, title: String, description: String, priority: Priority) -> u32 {
        let id = self.next_id;
        let task = Task {
            id,
            title,
            description,
            completed: false,
            priority,
        };
        self.tasks.insert(id, task);
        self.next_id += 1;
        id
    }

    fn complete_task(&mut self, id: u32) -> Result<(), String> {
        match self.tasks.get_mut(&id) {
            Some(task) => {
                task.completed = true;
                Ok(())
            }
            None => Err(format!("Task {} not found", id)),
        }
    }

    fn list_tasks(&self) {
        println!("\nAll Tasks:");
        for (_, task) in &self.tasks {
            let status = if task.completed { "✓" } else { " " };
            println!("  [{}] {} - {} ({})", status, task.id, task.title, task.priority);
        }
    }

    fn get_stats(&self) -> (usize, usize, usize) {
        let total = self.tasks.len();
        let completed = self.tasks.values().filter(|t| t.completed).count();
        let pending = total - completed;
        (total, completed, pending)
    }
}

fn main() {
    println!("{}", "=".repeat(60));
    println!("Advanced Rust Example - Task Manager");
    println!("{}", "=".repeat(60));

    let mut manager = TaskManager::new();

    manager.add_task("Learn Rust".to_string(), "Master ownership".to_string(), Priority::High);
    manager.add_task("Build Project".to_string(), "Create CLI tool".to_string(), Priority::Medium);
    manager.add_task("Write Tests".to_string(), "Unit tests".to_string(), Priority::High);
    manager.add_task("Documentation".to_string(), "Write docs".to_string(), Priority::Low);

    manager.complete_task(1).unwrap();
    manager.complete_task(3).unwrap();

    manager.list_tasks();

    let (total, completed, pending) = manager.get_stats();
    println!("\nStatistics:");
    println!("  Total: {}", total);
    println!("  Completed: {}", completed);
    println!("  Pending: {}", pending);

    println!("\n{}", "=".repeat(60));
    println!("Program Complete!");
    println!("{}", "=".repeat(60));
}








































