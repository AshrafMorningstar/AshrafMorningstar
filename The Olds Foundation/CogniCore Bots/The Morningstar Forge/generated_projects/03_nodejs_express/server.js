/**
 * Express.js Web Application
 * Author: Ashraf Siddiqui
 * GitHub: https://github.com/AshrafMorningstar
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// In-memory database
let tasks = [];
let taskId = 1;

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Task Manager API',
        author: 'Ashraf Siddiqui',
        github: 'https://github.com/AshrafMorningstar',
        endpoints: {
            tasks: '/api/tasks',
            createTask: 'POST /api/tasks',
            getTask: 'GET /api/tasks/:id',
            updateTask: 'PUT /api/tasks/:id',
            deleteTask: 'DELETE /api/tasks/:id'
        }
    });
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Create task
app.post('/api/tasks', (req, res) => {
    const { title, description, priority = 'medium' } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const task = {
        id: taskId++,
        title,
        description,
        priority,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    res.status(201).json(task);
});

// Get single task
app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
});

// Update task
app.put('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted successfully' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Author: Ashraf Siddiqui`);
    console.log(`GitHub: https://github.com/AshrafMorningstar`);
});
