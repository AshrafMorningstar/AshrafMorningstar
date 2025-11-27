"""
Go Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class GoGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "Go"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_http_server()

    def _generate_http_server(self) -> Path:
        project_path = self.create_project_structure('go', 'http_server')

        main_content = f'''package main

import (
\t"encoding/json"
\t"fmt"
\t"log"
\t"net/http"
)

// Author: {self.config["user"]["name"]}
// GitHub: {self.config["user"]["github"]}

type Response struct {{
\tMessage string `json:"message"`
\tAuthor  string `json:"author"`
\tGitHub  string `json:"github"`
}}

func homeHandler(w http.ResponseWriter, r *http.Request) {{
\tw.Header().Set("Content-Type", "application/json")
\tresponse := Response{{
\t\tMessage: "Go HTTP Server",
\t\tAuthor:  "{self.config["user"]["name"]}",
\t\tGitHub:  "{self.config["user"]["github"]}",
\t}}
\tjson.NewEncoder(w).Encode(response)
}}

func helloHandler(w http.ResponseWriter, r *http.Request) {{
\tname := r.URL.Query().Get("name")
\tif name == "" {{
\t\tname = "World"
\t}}
\tfmt.Fprintf(w, "Hello, %s!", name)
}}

func main() {{
\thttp.HandleFunc("/", homeHandler)
\thttp.HandleFunc("/hello", helloHandler)
\t
\tfmt.Println("Go HTTP Server")
\tfmt.Println("Author: {self.config["user"]["name"]}")
\tfmt.Println("GitHub: {self.config["user"]["github"]}")
\tfmt.Println("Server starting on http://localhost:8080")
\t
\tlog.Fatal(http.ListenAndServe(":8080", nil))
}}
'''

        go_mod = f'''module github.com/ashrafmorningstar/http-server

go 1.21
'''

        self.file_manager.write_file(project_path / "main.go", main_content)
        self.file_manager.write_file(project_path / "go.mod", go_mod)

        self.add_readme(project_path, "Go HTTP Server", "A simple HTTP server built with Go.",
                       "1. go build\\n2. ./http_server (or .\\\\http_server.exe on Windows)", "Visit http://localhost:8080")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.exe', '*.out', 'vendor/'])

        return project_path
