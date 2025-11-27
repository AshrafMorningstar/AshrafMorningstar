/**
 * Advanced JavaScript Application - Task Management System
 * Generated: 2025-11-24 22:11:23.370962
 */

class TaskManager {
    constructor(config = {}) {
        this.tasks = [];
        this.config = {
            maxTasks: config.maxTasks || 1000,
            autoSave: config.autoSave || true,
            priority: config.priority || 'medium'
        };
        this.listeners = [];
    }

    addTask(task) {
        if (this.tasks.length >= this.config.maxTasks) {
            throw new Error('Maximum task limit reached');
        }

        const newTask = {
            id: this.generateId(),
            title: task.title,
            description: task.description || '',
            priority: task.priority || 'medium',
            status: 'pending',
            createdAt: new Date(),
            updatedAt: new Date(),
            tags: task.tags || [],
            metadata: task.metadata || {}
        };

        this.tasks.push(newTask);
        this.notifyListeners('taskAdded', newTask);

        if (this.config.autoSave) {
            this.save();
        }

        return newTask;
    }

    generateId() {
        return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    updateTask(id, updates) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
            throw new Error(`Task with id ${id} not found`);
        }

        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...updates,
            updatedAt: new Date()
        };

        this.notifyListeners('taskUpdated', this.tasks[taskIndex]);
        return this.tasks[taskIndex];
    }

    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
            return false;
        }

        const deletedTask = this.tasks.splice(taskIndex, 1)[0];
        this.notifyListeners('taskDeleted', deletedTask);
        return true;
    }

    getTasks(filter = {}) {
        let filtered = [...this.tasks];

        if (filter.status) {
            filtered = filtered.filter(t => t.status === filter.status);
        }

        if (filter.priority) {
            filtered = filtered.filter(t => t.priority === filter.priority);
        }

        if (filter.tags && filter.tags.length > 0) {
            filtered = filtered.filter(t =>
                filter.tags.some(tag => t.tags.includes(tag))
            );
        }

        return filtered;
    }

    sortTasks(criteria = 'createdAt', order = 'asc') {
        return [...this.tasks].sort((a, b) => {
            const aVal = a[criteria];
            const bVal = b[criteria];

            if (order === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });
    }

    groupByPriority() {
        return this.tasks.reduce((groups, task) => {
            const priority = task.priority;
            if (!groups[priority]) {
                groups[priority] = [];
            }
            groups[priority].push(task);
            return groups;
        }, {});
    }

    getStatistics() {
        const stats = {
            total: this.tasks.length,
            byStatus: {},
            byPriority: {},
            completionRate: 0
        };

        this.tasks.forEach(task => {
            stats.byStatus[task.status] = (stats.byStatus[task.status] || 0) + 1;
            stats.byPriority[task.priority] = (stats.byPriority[task.priority] || 0) + 1;
        });

        const completed = stats.byStatus['completed'] || 0;
        stats.completionRate = stats.total > 0 ? (completed / stats.total) * 100 : 0;

        return stats;
    }

    addEventListener(listener) {
        this.listeners.push(listener);
    }

    removeEventListener(listener) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }

    notifyListeners(event, data) {
        this.listeners.forEach(listener => {
            if (typeof listener === 'function') {
                listener(event, data);
            }
        });
    }

    save() {
        const data = JSON.stringify(this.tasks);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('tasks', data);
        }
        return data;
    }

    load() {
        if (typeof localStorage !== 'undefined') {
            const data = localStorage.getItem('tasks');
            if (data) {
                this.tasks = JSON.parse(data);
                return true;
            }
        }
        return false;
    }

    export(format = 'json') {
        if (format === 'json') {
            return JSON.stringify(this.tasks, null, 2);
        } else if (format === 'csv') {
            return this.exportToCSV();
        }
        throw new Error(`Unsupported format: ${format}`);
    }

    exportToCSV() {
        const headers = ['ID', 'Title', 'Description', 'Priority', 'Status', 'Created'];
        const rows = this.tasks.map(t => [
            t.id,
            t.title,
            t.description,
            t.priority,
            t.status,
            t.createdAt.toISOString()
        ]);

        return [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');
    }
}

// Example usage
const manager = new TaskManager({ maxTasks: 500, autoSave: true });

for (let i = 0; i < 50; i++) {
    manager.addTask({
        title: `Task ${i + 1}`,
        description: `Description for task ${i + 1}`,
        priority: ['low', 'medium', 'high'][i % 3],
        tags: [`tag${i % 5}`, `category${i % 3}`]
    });
}

console.log('Statistics:', manager.getStatistics());
console.log('High priority tasks:', manager.getTasks({ priority: 'high' }).length);
