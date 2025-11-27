"""
TypeScript Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class TypeScriptGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "TypeScript"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_express_api()

    def _generate_express_api(self) -> Path:
        project_path = self.create_project_structure('typescript', 'express_api')
        src_path = project_path / "src"
        src_path.mkdir(exist_ok=True)

        main_content = f'''/**
 * Express API
 * Author: {self.config["user"]["name"]}
 * GitHub: {self.config["user"]["github"]}
 */

import express, {{ Request, Response }} from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

interface Task {{
    id: number;
    title: string;
    completed: boolean;
}}

let tasks: Task[] = [];
let nextId = 1;

app.get('/', (req: Request, res: Response) => {{
    res.json({{
        message: 'Express TypeScript API',
        author: '{self.config["user"]["name"]}',
        github: '{self.config["user"]["github"]}',
        endpoints: {{
            'GET /tasks': 'Get all tasks',
            'POST /tasks': 'Create task',
            'PUT /tasks/:id': 'Update task',
            'DELETE /tasks/:id': 'Delete task'
        }}
    }});
}});

app.get('/tasks', (req: Request, res: Response) => {{
    res.json(tasks);
}});

app.post('/tasks', (req: Request, res: Response) => {{
    const {{ title }} = req.body;
    const task: Task = {{
        id: nextId++,
        title,
        completed: false
    }};
    tasks.push(task);
    res.status(201).json(task);
}});

app.put('/tasks/:id', (req: Request, res: Response) => {{
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (task) {{
        task.completed = !task.completed;
        res.json(task);
    }} else {{
        res.status(404).json({{ error: 'Task not found' }});
    }}
}});

app.delete('/tasks/:id', (req: Request, res: Response) => {{
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.json({{ message: 'Task deleted' }});
}});

app.listen(PORT, () => {{
    console.log(`Express TypeScript API`);
    console.log(`Author: {self.config["user"]["name"]}`);
    console.log(`GitHub: {self.config["user"]["github"]}`);
    console.log(`Server running on http://localhost:${{PORT}}`);
}});
'''

        package_json = self.branding.get_package_json(
            "Express TypeScript API",
            "A RESTful API built with Express and TypeScript",
            "1.0.0",
            {{
                "express": "^4.18.2",
                "@types/express": "^4.17.17",
                "typescript": "^5.0.0",
                "ts-node": "^10.9.1"
            }}
        )

        tsconfig = '''{{
  "compilerOptions": {{
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }},
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}}
'''

        self.file_manager.write_file(src_path / "index.ts", main_content)
        self.file_manager.write_file(project_path / "package.json", package_json)
        self.file_manager.write_file(project_path / "tsconfig.json", tsconfig)

        self.add_readme(project_path, "Express TypeScript API", "A RESTful API built with Express and TypeScript.",
                       "1. npm install\\n2. npx ts-node src/index.ts", "Visit http://localhost:3000")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['node_modules/', 'dist/', '*.log'])

        return project_path
