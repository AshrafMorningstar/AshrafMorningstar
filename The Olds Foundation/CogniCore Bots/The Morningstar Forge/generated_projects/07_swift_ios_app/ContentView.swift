//
//  Todo List App
//  Author: Ashraf Siddiqui
//  GitHub: https://github.com/AshrafMorningstar
//

import SwiftUI

struct TodoItem: Identifiable {
    let id = UUID()
    var title: String
    var isCompleted: Bool = false
}

class TodoViewModel: ObservableObject {
    @Published var todos: [TodoItem] = []

    func addTodo(title: String) {
        let todo = TodoItem(title: title)
        todos.append(todo)
    }

    func toggleTodo(id: UUID) {
        if let index = todos.firstIndex(where: { $0.id == id }) {
            todos[index].isCompleted.toggle()
        }
    }

    func deleteTodo(at offsets: IndexSet) {
        todos.remove(atOffsets: offsets)
    }
}

struct ContentView: View {
    @StateObject private var viewModel = TodoViewModel()
    @State private var newTodoTitle = ""

    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("New todo...", text: $newTodoTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())

                    Button(action: addTodo) {
                        Image(systemName: "plus.circle.fill")
                            .font(.title)
                    }
                    .disabled(newTodoTitle.isEmpty)
                }
                .padding()

                List {
                    ForEach(viewModel.todos) { todo in
                        HStack {
                            Image(systemName: todo.isCompleted ? "checkmark.circle.fill" : "circle")
                                .foregroundColor(todo.isCompleted ? .green : .gray)
                                .onTapGesture {
                                    viewModel.toggleTodo(id: todo.id)
                                }

                            Text(todo.title)
                                .strikethrough(todo.isCompleted)
                                .foregroundColor(todo.isCompleted ? .gray : .primary)
                        }
                    }
                    .onDelete(perform: viewModel.deleteTodo)
                }

                Text("Created by Ashraf Siddiqui")
                    .font(.caption)
                    .foregroundColor(.gray)
                    .padding()
            }
            .navigationTitle("My Todos")
        }
    }

    private func addTodo() {
        guard !newTodoTitle.isEmpty else { return }
        viewModel.addTodo(title: newTodoTitle)
        newTodoTitle = ""
    }
}

@main
struct TodoApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
