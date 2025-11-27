/**
 * Advanced JavaScript Example - Task Management System
 * Demonstrates: Classes, async/await, promises, closures, modules
 */

// Task Class with private fields
class Task {
    #id;
    #createdAt;

    constructor(title, description, priority = 'medium') {
        this.#id = this.#generateId();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.#createdAt = new Date();
        this.tags = [];
    }

    #generateId() {
        return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    getId() {
        return this.#id;
    }

    getCreatedAt() {
        return this.#createdAt;
    }

    addTag(tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
        return this;
    }

    complete() {
        this.completed = true;
        this.completedAt = new Date();
        return this;
    }

    toJSON() {
        return {
            id: this.#id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            completed: this.completed,
            createdAt: this.#createdAt,
            tags: this.tags
        };
    }
}

// TaskManager with event system
class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.listeners = new Map();
        this.stats = {
            created: 0,
            completed: 0,
            deleted: 0
        };
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => callback(data));
        }
    }

    async createTask(title, description, priority) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const task = new Task(title, description, priority);
                this.tasks.set(task.getId(), task);
                this.stats.created++;
                this.emit('taskCreated', task);
                resolve(task);
            }, 10);
        });
    }

    async completeTask(taskId) {
        const task = this.tasks.get(taskId);
        if (task) {
            task.complete();
            this.stats.completed++;
            this.emit('taskCompleted', task);
            return task;
        }
        throw new Error(`Task ${taskId} not found`);
    }

    deleteTask(taskId) {
        const deleted = this.tasks.delete(taskId);
        if (deleted) {
            this.stats.deleted++;
            this.emit('taskDeleted', { taskId });
        }
        return deleted;
    }

    filterTasks(predicate) {
        return Array.from(this.tasks.values()).filter(predicate);
    }

    getTasksByPriority(priority) {
        return this.filterTasks(task => task.priority === priority);
    }

    getCompletedTasks() {
        return this.filterTasks(task => task.completed);
    }

    getStats() {
        return {
            ...this.stats,
            total: this.tasks.size,
            pending: this.tasks.size - this.stats.completed
        };
    }
}

// Utility functions
const utils = {
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// Main execution
async function main() {
    console.log('='.repeat(60));
    console.log('Advanced JavaScript Task Management System');
    console.log('='.repeat(60));

    const manager = new TaskManager();

    // Set up event listeners
    manager.on('taskCreated', (task) => {
        console.log(`✅ Task created: ${task.title}`);
    });

    manager.on('taskCompleted', (task) => {
        console.log(`🎉 Task completed: ${task.title}`);
    });

    // Create tasks
    const tasks = await Promise.all([
        manager.createTask('Learn JavaScript', 'Master advanced concepts', 'high'),
        manager.createTask('Build Project', 'Create task manager', 'high'),
        manager.createTask('Write Tests', 'Unit and integration tests', 'medium'),
        manager.createTask('Documentation', 'Write comprehensive docs', 'low'),
        manager.createTask('Code Review', 'Review pull requests', 'medium')
    ]);

    // Add tags
    tasks[0].addTag('learning').addTag('javascript');
    tasks[1].addTag('project').addTag('development');

    // Complete some tasks
    await utils.delay(100);
    await manager.completeTask(tasks[0].getId());
    await manager.completeTask(tasks[1].getId());

    // Display statistics
    console.log('\nTask Statistics:');
    const stats = manager.getStats();
    Object.entries(stats).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
    });

    console.log('\nHigh Priority Tasks:');
    manager.getTasksByPriority('high').forEach(task => {
        console.log(`  - ${task.title} [${task.completed ? 'Done' : 'Pending'}]`);
    });

    console.log('\n' + '='.repeat(60));
    console.log('System Ready!');
    console.log('='.repeat(60));
}

// Run the application
main().catch(console.error);
