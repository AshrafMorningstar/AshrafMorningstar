"""
Swift Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Generates Swift/iOS application projects.
"""

from pathlib import Path
from .base_generator import BaseGenerator


class SwiftGenerator(BaseGenerator):
    """Generates Swift/iOS projects."""

    def get_language_name(self) -> str:
        return "Swift"

    def generate_project(self, project_name: str) -> Path:
        """Generate a Swift project."""
        project_generators = {
            'todo_app': self._generate_todo_app,
            'weather_app': self._generate_weather_app,
            'calculator': self._generate_calculator,
            'notes_app': self._generate_notes_app
        }

        generator = project_generators.get(project_name, self._generate_todo_app)
        return generator()

    def _generate_todo_app(self) -> Path:
        """Generate a SwiftUI Todo App."""
        project_path = self.create_project_structure('swift', 'TodoApp')

        # Main app file
        app_content = f'''{self.branding.get_code_header('swift', 'Todo App')}

import SwiftUI

@main
struct TodoApp: App {{
    var body: some Scene {{
        WindowGroup {{
            ContentView()
        }}
    }}
}}

// MARK: - Models

struct TodoItem: Identifiable, Codable {{
    let id: UUID
    var title: String
    var isCompleted: Bool
    var createdAt: Date

    init(title: String) {{
        self.id = UUID()
        self.title = title
        self.isCompleted = false
        self.createdAt = Date()
    }}
}}

// MARK: - View Model

class TodoViewModel: ObservableObject {{
    @Published var todos: [TodoItem] = []

    private let savePath = FileManager.documentDirectory.appendingPathComponent("todos.json")

    init() {{
        loadTodos()
    }}

    func addTodo(_ title: String) {{
        let todo = TodoItem(title: title)
        todos.append(todo)
        saveTodos()
    }}

    func toggleTodo(_ todo: TodoItem) {{
        if let index = todos.firstIndex(where: {{ $0.id == todo.id }}) {{
            todos[index].isCompleted.toggle()
            saveTodos()
        }}
    }}

    func deleteTodo(at offsets: IndexSet) {{
        todos.remove(atOffsets: offsets)
        saveTodos()
    }}

    private func saveTodos() {{
        if let data = try? JSONEncoder().encode(todos) {{
            try? data.write(to: savePath)
        }}
    }}

    private func loadTodos() {{
        if let data = try? Data(contentsOf: savePath),
           let decoded = try? JSONDecoder().decode([TodoItem].self, from: data) {{
            todos = decoded
        }}
    }}
}}

// MARK: - Views

struct ContentView: View {{
    @StateObject private var viewModel = TodoViewModel()
    @State private var newTodoTitle = ""

    var body: some View {{
        NavigationView {{
            VStack {{
                // Input section
                HStack {{
                    TextField("New todo...", text: $newTodoTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())

                    Button(action: addTodo) {{
                        Image(systemName: "plus.circle.fill")
                            .font(.title2)
                    }}
                    .disabled(newTodoTitle.isEmpty)
                }}
                .padding()

                // Todo list
                List {{
                    ForEach(viewModel.todos) {{ todo in
                        TodoRow(todo: todo) {{
                            viewModel.toggleTodo(todo)
                        }}
                    }}
                    .onDelete(perform: viewModel.deleteTodo)
                }}
                .listStyle(InsetGroupedListStyle())
            }}
            .navigationTitle("Todo App")
            .navigationBarItems(trailing: EditButton())
        }}
    }}

    private func addTodo() {{
        guard !newTodoTitle.isEmpty else {{ return }}
        viewModel.addTodo(newTodoTitle)
        newTodoTitle = ""
    }}
}}

struct TodoRow: View {{
    let todo: TodoItem
    let onToggle: () -> Void

    var body: some View {{
        HStack {{
            Button(action: onToggle) {{
                Image(systemName: todo.isCompleted ? "checkmark.circle.fill" : "circle")
                    .foregroundColor(todo.isCompleted ? .green : .gray)
            }}

            VStack(alignment: .leading) {{
                Text(todo.title)
                    .strikethrough(todo.isCompleted)
                    .foregroundColor(todo.isCompleted ? .gray : .primary)

                Text(todo.createdAt, style: .date)
                    .font(.caption)
                    .foregroundColor(.secondary)
            }}
        }}
    }}
}}

// MARK: - Extensions

extension FileManager {{
    static var documentDirectory: URL {{
        FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
    }}
}}

// Author: {self.config["user"]["name"]}
// GitHub: {self.config["user"]["github"]}
'''

        self.file_manager.write_file(project_path / "TodoApp.swift", app_content)

        self.add_readme(
            project_path,
            "SwiftUI Todo App",
            "A fully functional Todo application built with SwiftUI featuring data persistence and a clean UI.",
            setup_instructions="1. Open in Xcode\n2. Build and run on iOS Simulator or device",
            usage_instructions="- Add todos using the text field\n- Tap circles to mark as complete\n- Swipe to delete\n- Data persists automatically"
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.xcodeproj/', '*.xcworkspace/', 'DerivedData/', '.DS_Store'])

        return project_path

    def _generate_weather_app(self) -> Path:
        """Generate a simple weather app stub."""
        return self._generate_todo_app()  # Simplified for now

    def _generate_calculator(self) -> Path:
        """Generate a calculator app stub."""
        return self._generate_todo_app()  # Simplified for now

    def _generate_notes_app(self) -> Path:
        """Generate a notes app stub."""
        return self._generate_todo_app()  # Simplified for now
