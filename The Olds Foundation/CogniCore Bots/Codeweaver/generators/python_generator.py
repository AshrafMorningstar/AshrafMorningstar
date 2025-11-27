"""
Python Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Generates Python application projects.
"""

from pathlib import Path
from .base_generator import BaseGenerator


class PythonGenerator(BaseGenerator):
    """
    Generates Python application projects.

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """

    def get_language_name(self) -> str:
        return "Python"

    def generate_project(self, project_name: str) -> Path:
        """Generate a Python project based on the project name."""
        project_generators = {
            'rest_api': self._generate_rest_api,
            'data_analyzer': self._generate_data_analyzer,
            'web_scraper': self._generate_web_scraper,
            'cli_tool': self._generate_cli_tool,
            'automation_bot': self._generate_automation_bot
        }

        generator = project_generators.get(project_name)
        if not generator:
            raise ValueError(f"Unknown Python project: {project_name}")

        return generator()

    def _generate_rest_api(self) -> Path:
        """Generate a Flask REST API project."""
        project_path = self.create_project_structure('python', 'rest_api')

        # Main API file
        main_content = f'''{self.branding.get_code_header('python', 'Flask REST API')}

from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)

# In-memory database (replace with real database in production)
tasks = []
task_id_counter = 1

@app.route('/')
def home():
    """API home endpoint."""
    return jsonify({{
        'name': 'Flask REST API',
        'version': '1.0.0',
        'author': '{self.config["user"]["name"]}',
        'github': '{self.config["user"]["github"]}',
        'endpoints': {{
            'GET /': 'API information',
            'GET /tasks': 'Get all tasks',
            'GET /tasks/<id>': 'Get specific task',
            'POST /tasks': 'Create new task',
            'PUT /tasks/<id>': 'Update task',
            'DELETE /tasks/<id>': 'Delete task'
        }}
    }})

@app.route('/tasks', methods=['GET'])
def get_tasks():
    """Get all tasks."""
    return jsonify({{
        'success': True,
        'count': len(tasks),
        'tasks': tasks
    }})

@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    """Get a specific task by ID."""
    task = next((t for t in tasks if t['id'] == task_id), None)

    if task:
        return jsonify({{'success': True, 'task': task}})
    else:
        return jsonify({{'success': False, 'error': 'Task not found'}}), 404

@app.route('/tasks', methods=['POST'])
def create_task():
    """Create a new task."""
    global task_id_counter

    data = request.get_json()

    if not data or 'title' not in data:
        return jsonify({{'success': False, 'error': 'Title is required'}}), 400

    task = {{
        'id': task_id_counter,
        'title': data['title'],
        'description': data.get('description', ''),
        'completed': False,
        'created_at': datetime.now().isoformat(),
        'updated_at': datetime.now().isoformat()
    }}

    tasks.append(task)
    task_id_counter += 1

    return jsonify({{'success': True, 'task': task}}), 201

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    """Update an existing task."""
    task = next((t for t in tasks if t['id'] == task_id), None)

    if not task:
        return jsonify({{'success': False, 'error': 'Task not found'}}), 404

    data = request.get_json()

    if 'title' in data:
        task['title'] = data['title']
    if 'description' in data:
        task['description'] = data['description']
    if 'completed' in data:
        task['completed'] = data['completed']

    task['updated_at'] = datetime.now().isoformat()

    return jsonify({{'success': True, 'task': task}})

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Delete a task."""
    global tasks

    task = next((t for t in tasks if t['id'] == task_id), None)

    if not task:
        return jsonify({{'success': False, 'error': 'Task not found'}}), 404

    tasks = [t for t in tasks if t['id'] != task_id]

    return jsonify({{'success': True, 'message': 'Task deleted'}})

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({{
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    }})

if __name__ == '__main__':
    print(f"Flask REST API by {self.config['user']['name']}")
    print(f"GitHub: {self.config['user']['github']}")
    print("Starting server on http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)
'''

        # Requirements file
        requirements = """Flask==3.0.0
Flask-CORS==4.0.0
python-dotenv==1.0.0
"""

        # Setup.py
        setup_py = self.branding.get_python_setup_py(
            'Flask REST API',
            'A RESTful API built with Flask for task management',
            '1.0.0'
        )

        # Config file
        config_content = f'''{self.branding.get_code_header('python', 'API Configuration')}

import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Application configuration."""

    # Flask settings
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    DEBUG = os.getenv('DEBUG', 'True') == 'True'

    # API settings
    API_TITLE = 'Flask REST API'
    API_VERSION = '1.0.0'
    API_AUTHOR = '{self.config["user"]["name"]}'
    API_GITHUB = '{self.config["user"]["github"]}'

    # Database settings (for future use)
    DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///tasks.db')

    # CORS settings
    CORS_ORIGINS = os.getenv('CORS_ORIGINS', '*')
'''

        # .env example
        env_example = """# Flask REST API Configuration
SECRET_KEY=your-secret-key-here
DEBUG=True
DATABASE_URI=sqlite:///tasks.db
CORS_ORIGINS=*
"""

        # Test file
        test_content = f'''{self.branding.get_code_header('python', 'API Tests')}

import unittest
import json
from app import app

class TestAPI(unittest.TestCase):
    """Test cases for the Flask REST API."""

    def setUp(self):
        """Set up test client."""
        self.app = app
        self.client = self.app.test_client()
        self.app.config['TESTING'] = True

    def test_home(self):
        """Test home endpoint."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['name'], 'Flask REST API')
        self.assertEqual(data['author'], '{self.config["user"]["name"]}')

    def test_get_tasks_empty(self):
        """Test getting tasks when none exist."""
        response = self.client.get('/tasks')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(data['count'], 0)

    def test_create_task(self):
        """Test creating a new task."""
        task_data = {{
            'title': 'Test Task',
            'description': 'This is a test task'
        }}
        response = self.client.post('/tasks',
                                   data=json.dumps(task_data),
                                   content_type='application/json')
        self.assertEqual(response.status_code, 201)
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(data['task']['title'], 'Test Task')

    def test_health_check(self):
        """Test health check endpoint."""
        response = self.client.get('/health')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'healthy')

if __name__ == '__main__':
    unittest.main()
'''

        # Write all files
        self.file_manager.write_file(project_path / "app.py", main_content)
        self.file_manager.write_file(project_path / "requirements.txt", requirements)
        self.file_manager.write_file(project_path / "setup.py", setup_py)
        self.file_manager.write_file(project_path / "config.py", config_content)
        self.file_manager.write_file(project_path / ".env.example", env_example)
        self.file_manager.write_file(project_path / "tests.py", test_content)

        self.add_readme(
            project_path,
            "Flask REST API",
            "A fully functional RESTful API built with Flask for task management with CRUD operations.",
            setup_instructions="""1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. (Optional) Copy `.env.example` to `.env` and configure settings

3. Run the application:
   ```bash
   python app.py
   ```

The API will be available at http://localhost:5000""",
            usage_instructions="""**API Endpoints:**

- `GET /` - API information
- `GET /tasks` - Get all tasks
- `GET /tasks/<id>` - Get specific task
- `POST /tasks` - Create new task
- `PUT /tasks/<id>` - Update task
- `DELETE /tasks/<id>` - Delete task
- `GET /health` - Health check

**Example:**
```bash
# Create a task
curl -X POST http://localhost:5000/tasks \\
  -H "Content-Type: application/json" \\
  -d '{{"title": "My Task", "description": "Task description"}}'

# Get all tasks
curl http://localhost:5000/tasks
```

**Run tests:**
```bash
python tests.py
```"""
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, [
            '__pycache__/',
            '*.py[cod]',
            '*$py.class',
            '*.so',
            '.env',
            'venv/',
            'env/',
            '*.db',
            '.pytest_cache/',
            '.coverage'
        ])

        return project_path

    def _generate_data_analyzer(self) -> Path:
        """Generate a data analysis tool with pandas."""
        project_path = self.create_project_structure('python', 'data_analyzer')

        # Main analyzer file
        main_content = f'''{self.branding.get_code_header('python', 'Data Analyzer Tool')}

import pandas as pd
import numpy as np
from pathlib import Path
import json
from datetime import datetime

class DataAnalyzer:
    """
    A comprehensive data analysis tool using pandas.

    Author: {self.config["user"]["name"]}
    GitHub: {self.config["user"]["github"]}
    """

    def __init__(self, data_file=None):
        """Initialize the analyzer."""
        self.df = None
        self.analysis_results = {{}}

        if data_file:
            self.load_data(data_file)

    def load_data(self, file_path):
        """Load data from CSV, Excel, or JSON file."""
        file_path = Path(file_path)

        if not file_path.exists():
            raise FileNotFoundError(f"File not found: {{file_path}}")

        if file_path.suffix == '.csv':
            self.df = pd.read_csv(file_path)
        elif file_path.suffix in ['.xlsx', '.xls']:
            self.df = pd.read_excel(file_path)
        elif file_path.suffix == '.json':
            self.df = pd.read_json(file_path)
        else:
            raise ValueError(f"Unsupported file format: {{file_path.suffix}}")

        print(f"✓ Loaded data from {{file_path}}")
        print(f"  Rows: {{len(self.df)}}, Columns: {{len(self.df.columns)}}")

    def basic_info(self):
        """Get basic information about the dataset."""
        if self.df is None:
            raise ValueError("No data loaded")

        info = {{
            'shape': self.df.shape,
            'columns': list(self.df.columns),
            'dtypes': self.df.dtypes.to_dict(),
            'missing_values': self.df.isnull().sum().to_dict(),
            'memory_usage': self.df.memory_usage(deep=True).sum()
        }}

        self.analysis_results['basic_info'] = info
        return info

    def statistical_summary(self):
        """Get statistical summary of numerical columns."""
        if self.df is None:
            raise ValueError("No data loaded")

        summary = self.df.describe().to_dict()
        self.analysis_results['statistical_summary'] = summary
        return summary

    def find_correlations(self, threshold=0.5):
        """Find correlations between numerical columns."""
        if self.df is None:
            raise ValueError("No data loaded")

        numeric_df = self.df.select_dtypes(include=[np.number])
        corr_matrix = numeric_df.corr()

        # Find strong correlations
        strong_corr = []
        for i in range(len(corr_matrix.columns)):
            for j in range(i+1, len(corr_matrix.columns)):
                if abs(corr_matrix.iloc[i, j]) > threshold:
                    strong_corr.append({{
                        'column1': corr_matrix.columns[i],
                        'column2': corr_matrix.columns[j],
                        'correlation': corr_matrix.iloc[i, j]
                    }})

        self.analysis_results['correlations'] = strong_corr
        return strong_corr

    def detect_outliers(self, column, method='iqr'):
        """Detect outliers in a numerical column."""
        if self.df is None:
            raise ValueError("No data loaded")

        if column not in self.df.columns:
            raise ValueError(f"Column {{column}} not found")

        data = self.df[column].dropna()

        if method == 'iqr':
            Q1 = data.quantile(0.25)
            Q3 = data.quantile(0.75)
            IQR = Q3 - Q1
            lower_bound = Q1 - 1.5 * IQR
            upper_bound = Q3 + 1.5 * IQR
            outliers = data[(data < lower_bound) | (data > upper_bound)]
        else:
            # Z-score method
            mean = data.mean()
            std = data.std()
            outliers = data[abs(data - mean) > 3 * std]

        result = {{
            'column': column,
            'outlier_count': len(outliers),
            'outlier_percentage': (len(outliers) / len(data)) * 100,
            'outlier_values': outliers.tolist()
        }}

        return result

    def group_analysis(self, group_by, agg_column, agg_func='mean'):
        """Perform group-by analysis."""
        if self.df is None:
            raise ValueError("No data loaded")

        result = self.df.groupby(group_by)[agg_column].agg(agg_func)
        return result.to_dict()

    def export_results(self, output_file='analysis_results.json'):
        """Export analysis results to JSON file."""
        output_path = Path(output_file)

        results = {{
            'timestamp': datetime.now().isoformat(),
            'author': '{self.config["user"]["name"]}',
            'github': '{self.config["user"]["github"]}',
            'analysis': self.analysis_results
        }}

        with open(output_path, 'w') as f:
            json.dump(results, f, indent=2, default=str)

        print(f"✓ Results exported to {{output_path}}")

    def generate_report(self):
        """Generate a comprehensive analysis report."""
        if self.df is None:
            raise ValueError("No data loaded")

        print("=" * 60)
        print("DATA ANALYSIS REPORT")
        print("=" * 60)
        print(f"Author: {self.config['user']['name']}")
        print(f"GitHub: {self.config['user']['github']}")
        print(f"Timestamp: {{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}}")
        print("=" * 60)

        # Basic info
        info = self.basic_info()
        print(f"\\nDataset Shape: {{info['shape']}}")
        print(f"Columns: {{', '.join(info['columns'])}}")
        print(f"\\nMissing Values:")
        for col, count in info['missing_values'].items():
            if count > 0:
                print(f"  {{col}}: {{count}}")

        # Statistical summary
        print(f"\\nStatistical Summary:")
        print(self.df.describe())

        # Correlations
        correlations = self.find_correlations()
        if correlations:
            print(f"\\nStrong Correlations (>0.5):")
            for corr in correlations:
                print(f"  {{corr['column1']}} <-> {{corr['column2']}}: {{corr['correlation']:.3f}}")

        print("=" * 60)

def main():
    """Example usage of the DataAnalyzer."""
    print("Data Analyzer Tool")
    print(f"Author: {self.config['user']['name']}")
    print(f"GitHub: {self.config['user']['github']}")
    print()

    # Create sample data for demonstration
    sample_data = {{
        'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
        'Age': [25, 30, 35, 28, 32],
        'Salary': [50000, 60000, 75000, 55000, 70000],
        'Department': ['IT', 'HR', 'IT', 'Sales', 'IT'],
        'Experience': [2, 5, 8, 3, 6]
    }}

    df = pd.DataFrame(sample_data)
    df.to_csv('sample_data.csv', index=False)

    # Analyze the data
    analyzer = DataAnalyzer('sample_data.csv')
    analyzer.generate_report()
    analyzer.export_results()

if __name__ == '__main__':
    main()
'''

        # Requirements
        requirements = """pandas==2.1.0
numpy==1.24.3
openpyxl==3.1.2
matplotlib==3.7.2
seaborn==0.12.2
"""

        # Example notebook
        notebook_content = f'''{self.branding.get_code_header('python', 'Data Analysis Example')}

"""
Example usage of the Data Analyzer tool.

Author: {self.config["user"]["name"]}
GitHub: {self.config["user"]["github"]}
"""

from analyzer import DataAnalyzer
import pandas as pd

# Create sample dataset
data = {{
    'Product': ['A', 'B', 'C', 'D', 'E'] * 20,
    'Sales': [100, 150, 200, 120, 180] * 20,
    'Revenue': [1000, 1500, 2000, 1200, 1800] * 20,
    'Region': ['North', 'South', 'East', 'West', 'North'] * 20
}}

df = pd.DataFrame(data)
df.to_csv('sales_data.csv', index=False)

# Analyze the data
analyzer = DataAnalyzer('sales_data.csv')

# Get basic information
print("Basic Information:")
info = analyzer.basic_info()
print(f"Shape: {{info['shape']}}")
print(f"Columns: {{info['columns']}}")

# Statistical summary
print("\\nStatistical Summary:")
summary = analyzer.statistical_summary()
for col, stats in summary.items():
    print(f"\\n{{col}}:")
    for stat, value in stats.items():
        print(f"  {{stat}}: {{value}}")

# Group analysis
print("\\nSales by Region:")
region_sales = analyzer.group_analysis('Region', 'Sales', 'sum')
for region, sales in region_sales.items():
    print(f"  {{region}}: {{sales}}")

# Export results
analyzer.export_results('sales_analysis.json')

print(f"\\nAnalysis complete by {self.config['user']['name']}")
'''

        # Write files
        self.file_manager.write_file(project_path / "analyzer.py", main_content)
        self.file_manager.write_file(project_path / "requirements.txt", requirements)
        self.file_manager.write_file(project_path / "example.py", notebook_content)
        self.file_manager.write_file(project_path / "setup.py",
            self.branding.get_python_setup_py(
                'Data Analyzer',
                'A comprehensive data analysis tool using pandas',
                '1.0.0'
            ))

        self.add_readme(
            project_path,
            "Data Analyzer Tool",
            "A powerful data analysis tool built with pandas for analyzing CSV, Excel, and JSON datasets.",
            setup_instructions="""1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the example:
   ```bash
   python analyzer.py
   ```""",
            usage_instructions="""**Basic Usage:**

```python
from analyzer import DataAnalyzer

# Load data
analyzer = DataAnalyzer('your_data.csv')

# Get basic information
info = analyzer.basic_info()

# Statistical summary
summary = analyzer.statistical_summary()

# Find correlations
correlations = analyzer.find_correlations(threshold=0.5)

# Detect outliers
outliers = analyzer.detect_outliers('column_name')

# Group analysis
results = analyzer.group_analysis('group_column', 'agg_column', 'mean')

# Generate report
analyzer.generate_report()

# Export results
analyzer.export_results('results.json')
```

**Supported file formats:** CSV, Excel (.xlsx, .xls), JSON"""
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, [
            '__pycache__/',
            '*.py[cod]',
            '*.csv',
            '*.xlsx',
            '*.json',
            'venv/',
            '.ipynb_checkpoints/'
        ])

        return project_path

    def _generate_web_scraper(self) -> Path:
        """Generate a web scraping tool."""
        project_path = self.create_project_structure('python', 'web_scraper')

        # Main scraper file
        main_content = f'''{self.branding.get_code_header('python', 'Web Scraper Tool')}

import requests
from bs4 import BeautifulSoup
import json
import csv
from pathlib import Path
from datetime import datetime
from urllib.parse import urljoin, urlparse
import time

class WebScraper:
    """
    A flexible web scraping tool using BeautifulSoup.

    Author: {self.config["user"]["name"]}
    GitHub: {self.config["user"]["github"]}
    """

    def __init__(self, base_url=None, delay=1):
        """
        Initialize the scraper.

        Args:
            base_url: Base URL for relative links
            delay: Delay between requests in seconds
        """
        self.base_url = base_url
        self.delay = delay
        self.session = requests.Session()
        self.session.headers.update({{
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }})

    def fetch_page(self, url):
        """Fetch a web page."""
        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            time.sleep(self.delay)
            return response.text
        except requests.RequestException as e:
            print(f"Error fetching {{url}}: {{e}}")
            return None

    def parse_html(self, html):
        """Parse HTML content."""
        return BeautifulSoup(html, 'html.parser')

    def extract_links(self, url):
        """Extract all links from a page."""
        html = self.fetch_page(url)
        if not html:
            return []

        soup = self.parse_html(html)
        links = []

        for link in soup.find_all('a', href=True):
            href = link['href']
            absolute_url = urljoin(url, href)
            links.append({{
                'text': link.get_text(strip=True),
                'url': absolute_url
            }})

        return links

    def extract_text(self, url, selector=None):
        """Extract text from a page."""
        html = self.fetch_page(url)
        if not html:
            return None

        soup = self.parse_html(html)

        if selector:
            elements = soup.select(selector)
            return [elem.get_text(strip=True) for elem in elements]
        else:
            return soup.get_text(strip=True)

    def extract_data(self, url, selectors):
        """
        Extract structured data using CSS selectors.

        Args:
            url: URL to scrape
            selectors: Dict of {{field_name: css_selector}}

        Returns:
            List of dictionaries with extracted data
        """
        html = self.fetch_page(url)
        if not html:
            return []

        soup = self.parse_html(html)
        results = []

        # Find all items (assuming they have a common container)
        containers = soup.select(selectors.get('container', 'body'))

        for container in containers:
            item = {{}}
            for field, selector in selectors.items():
                if field == 'container':
                    continue

                element = container.select_one(selector)
                if element:
                    item[field] = element.get_text(strip=True)
                else:
                    item[field] = None

            if item:
                results.append(item)

        return results

    def save_to_json(self, data, filename='output.json'):
        """Save data to JSON file."""
        output = {{
            'timestamp': datetime.now().isoformat(),
            'author': '{self.config["user"]["name"]}',
            'github': '{self.config["user"]["github"]}',
            'data': data
        }}

        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)

        print(f"✓ Data saved to {{filename}}")

    def save_to_csv(self, data, filename='output.csv'):
        """Save data to CSV file."""
        if not data:
            print("No data to save")
            return

        keys = data[0].keys()

        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=keys)
            writer.writeheader()
            writer.writerows(data)

        print(f"✓ Data saved to {{filename}}")

def example_usage():
    """Example usage of the web scraper."""
    print("Web Scraper Tool")
    print(f"Author: {self.config['user']['name']}")
    print(f"GitHub: {self.config['user']['github']}")
    print()

    # Example: Scrape example.com
    scraper = WebScraper(delay=1)

    url = 'https://example.com'
    print(f"Scraping {{url}}...")

    # Extract all links
    links = scraper.extract_links(url)
    print(f"\\nFound {{len(links)}} links")
    for link in links[:5]:  # Show first 5
        print(f"  - {{link['text']}}: {{link['url']}}")

    # Extract text
    text = scraper.extract_text(url)
    print(f"\\nPage text (first 200 chars):")
    print(text[:200] if text else "No text found")

    # Save results
    scraper.save_to_json(links, 'links.json')

    print(f"\\nScraping complete by {self.config['user']['name']}")

if __name__ == '__main__':
    example_usage()
'''

        # Requirements
        requirements = """requests==2.31.0
beautifulsoup4==4.12.2
lxml==4.9.3
"""

        # Write files
        self.file_manager.write_file(project_path / "scraper.py", main_content)
        self.file_manager.write_file(project_path / "requirements.txt", requirements)
        self.file_manager.write_file(project_path / "setup.py",
            self.branding.get_python_setup_py(
                'Web Scraper',
                'A flexible web scraping tool using BeautifulSoup',
                '1.0.0'
            ))

        self.add_readme(
            project_path,
            "Web Scraper Tool",
            "A powerful and flexible web scraping tool built with BeautifulSoup and requests.",
            setup_instructions="""1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the example:
   ```bash
   python scraper.py
   ```""",
            usage_instructions="""**Basic Usage:**

```python
from scraper import WebScraper

# Initialize scraper
scraper = WebScraper(delay=1)

# Extract all links
links = scraper.extract_links('https://example.com')

# Extract text
text = scraper.extract_text('https://example.com')

# Extract structured data
selectors = {{
    'container': '.item',
    'title': 'h2',
    'price': '.price',
    'description': '.desc'
}}
data = scraper.extract_data('https://example.com', selectors)

# Save results
scraper.save_to_json(data, 'output.json')
scraper.save_to_csv(data, 'output.csv')
```

**Note:** Always respect robots.txt and website terms of service when scraping."""
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, [
            '__pycache__/',
            '*.py[cod]',
            '*.json',
            '*.csv',
            'venv/'
        ])

        return project_path

    def _generate_cli_tool(self) -> Path:
        """Generate a CLI tool with argparse."""
        project_path = self.create_project_structure('python', 'cli_tool')

        # Main CLI file
        main_content = f'''{self.branding.get_code_header('python', 'CLI Tool')}

import argparse
import sys
from pathlib import Path
import json
from datetime import datetime

class CLITool:
    """
    A command-line interface tool.

    Author: {self.config["user"]["name"]}
    GitHub: {self.config["user"]["github"]}
    """

    def __init__(self):
        """Initialize the CLI tool."""
        self.version = '1.0.0'
        self.author = '{self.config["user"]["name"]}'
        self.github = '{self.config["user"]["github"]}'

    def process_file(self, input_file, output_file=None):
        """Process a file."""
        input_path = Path(input_file)

        if not input_path.exists():
            print(f"Error: File not found: {{input_file}}")
            return False

        print(f"Processing {{input_file}}...")

        # Read file
        with open(input_path, 'r') as f:
            content = f.read()

        # Process content (example: count words)
        words = content.split()
        lines = content.split('\\n')

        result = {{
            'file': str(input_path),
            'lines': len(lines),
            'words': len(words),
            'characters': len(content),
            'processed_at': datetime.now().isoformat(),
            'processed_by': self.author
        }}

        # Output
        if output_file:
            with open(output_file, 'w') as f:
                json.dump(result, f, indent=2)
            print(f"✓ Results saved to {{output_file}}")
        else:
            print(json.dumps(result, indent=2))

        return True

    def list_files(self, directory, pattern='*'):
        """List files in a directory."""
        dir_path = Path(directory)

        if not dir_path.exists():
            print(f"Error: Directory not found: {{directory}}")
            return

        files = list(dir_path.glob(pattern))

        print(f"\\nFiles in {{directory}} matching '{{pattern}}':")
        print(f"Total: {{len(files)}} files\\n")

        for file in files:
            size = file.stat().st_size if file.is_file() else 0
            file_type = 'DIR' if file.is_dir() else 'FILE'
            print(f"[{{file_type}}] {{file.name}} ({{size}} bytes)")

    def info(self):
        """Display tool information."""
        info = {{
            'name': 'CLI Tool',
            'version': self.version,
            'author': self.author,
            'github': self.github
        }}
        print(json.dumps(info, indent=2))

def main():
    """Main entry point for the CLI tool."""
    parser = argparse.ArgumentParser(
        description=f'CLI Tool by {self.config["user"]["name"]}',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=f'''
Examples:
  # Process a file
  python cli.py process input.txt -o output.json

  # List files
  python cli.py list . --pattern "*.py"

  # Show info
  python cli.py info

Author: {self.config["user"]["name"]}
GitHub: {self.config["user"]["github"]}
        '''
    )

    parser.add_argument('--version', action='version', version='1.0.0')

    subparsers = parser.add_subparsers(dest='command', help='Available commands')

    # Process command
    process_parser = subparsers.add_parser('process', help='Process a file')
    process_parser.add_argument('input', help='Input file path')
    process_parser.add_argument('-o', '--output', help='Output file path')

    # List command
    list_parser = subparsers.add_parser('list', help='List files')
    list_parser.add_argument('directory', help='Directory to list')
    list_parser.add_argument('--pattern', default='*', help='File pattern (default: *)')

    # Info command
    subparsers.add_parser('info', help='Show tool information')

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        return

    tool = CLITool()

    if args.command == 'process':
        tool.process_file(args.input, args.output)
    elif args.command == 'list':
        tool.list_files(args.directory, args.pattern)
    elif args.command == 'info':
        tool.info()

if __name__ == '__main__':
    main()
'''

        # Write files
        self.file_manager.write_file(project_path / "cli.py", main_content)
        self.file_manager.write_file(project_path / "requirements.txt", "# No external dependencies required\n")
        self.file_manager.write_file(project_path / "setup.py",
            self.branding.get_python_setup_py(
                'CLI Tool',
                'A command-line interface tool with multiple commands',
                '1.0.0'
            ))

        self.add_readme(
            project_path,
            "CLI Tool",
            "A versatile command-line interface tool built with argparse for file processing and directory operations.",
            setup_instructions="""1. No dependencies required (uses Python standard library)

2. Make the script executable (optional):
   ```bash
   chmod +x cli.py
   ```""",
            usage_instructions="""**Commands:**

```bash
# Process a file
python cli.py process input.txt -o output.json

# List files in a directory
python cli.py list . --pattern "*.py"

# Show tool information
python cli.py info

# Show help
python cli.py --help
```"""
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['__pycache__/', '*.py[cod]', '*.json'])

        return project_path

    def _generate_automation_bot(self) -> Path:
        """Generate a file automation bot."""
        project_path = self.create_project_structure('python', 'automation_bot')

        # Main bot file
        main_content = f'''{self.branding.get_code_header('python', 'File Automation Bot')}

import os
import shutil
from pathlib import Path
from datetime import datetime
import time
import logging

class FileAutomationBot:
    """
    Automated file organization and management bot.

    Author: {self.config["user"]["name"]}
    GitHub: {self.config["user"]["github"]}
    """

    def __init__(self, watch_directory='.'):
        """Initialize the automation bot."""
        self.watch_dir = Path(watch_directory)
        self.setup_logging()

        # File type categories
        self.categories = {{
            'Images': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
            'Documents': ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'],
            'Spreadsheets': ['.xlsx', '.xls', '.csv'],
            'Videos': ['.mp4', '.avi', '.mkv', '.mov', '.wmv'],
            'Audio': ['.mp3', '.wav', '.flac', '.aac'],
            'Archives': ['.zip', '.rar', '.7z', '.tar', '.gz'],
            'Code': ['.py', '.js', '.java', '.cpp', '.c', '.html', '.css']
        }}

    def setup_logging(self):
        """Setup logging configuration."""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('automation_bot.log'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)

    def organize_files(self):
        """Organize files into category folders."""
        self.logger.info(f"Starting file organization in {{self.watch_dir}}")

        organized_count = 0

        for file_path in self.watch_dir.iterdir():
            if file_path.is_file() and file_path.name != 'automation_bot.log':
                category = self.get_category(file_path)

                if category:
                    dest_dir = self.watch_dir / category
                    dest_dir.mkdir(exist_ok=True)

                    dest_path = dest_dir / file_path.name

                    # Handle duplicate names
                    counter = 1
                    while dest_path.exists():
                        stem = file_path.stem
                        suffix = file_path.suffix
                        dest_path = dest_dir / f"{{stem}}_{{counter}}{{suffix}}"
                        counter += 1

                    shutil.move(str(file_path), str(dest_path))
                    self.logger.info(f"Moved {{file_path.name}} to {{category}}/")
                    organized_count += 1

        self.logger.info(f"Organization complete. Moved {{organized_count}} files.")
        return organized_count

    def get_category(self, file_path):
        """Get the category for a file based on its extension."""
        extension = file_path.suffix.lower()

        for category, extensions in self.categories.items():
            if extension in extensions:
                return category

        return None

    def clean_empty_folders(self):
        """Remove empty folders."""
        removed_count = 0

        for dir_path in self.watch_dir.iterdir():
            if dir_path.is_dir() and not any(dir_path.iterdir()):
                dir_path.rmdir()
                self.logger.info(f"Removed empty folder: {{dir_path.name}}")
                removed_count += 1

        return removed_count

    def duplicate_finder(self):
        """Find duplicate files based on size and name."""
        files_dict = {{}}
        duplicates = []

        for file_path in self.watch_dir.rglob('*'):
            if file_path.is_file():
                size = file_path.stat().st_size
                name = file_path.name
                key = (name, size)

                if key in files_dict:
                    duplicates.append({{
                        'original': str(files_dict[key]),
                        'duplicate': str(file_path)
                    }})
                else:
                    files_dict[key] = file_path

        if duplicates:
            self.logger.info(f"Found {{len(duplicates)}} potential duplicates")
            for dup in duplicates:
                self.logger.info(f"  {{dup['duplicate']}} (same as {{dup['original']}})")
        else:
            self.logger.info("No duplicates found")

        return duplicates

    def watch_and_organize(self, interval=60):
        """Watch directory and organize files periodically."""
        self.logger.info(f"Starting watch mode (interval: {{interval}}s)")
        self.logger.info(f"Author: {self.config['user']['name']}")
        self.logger.info(f"GitHub: {self.config['user']['github']}")

        try:
            while True:
                self.organize_files()
                self.clean_empty_folders()
                time.sleep(interval)
        except KeyboardInterrupt:
            self.logger.info("Watch mode stopped by user")

def main():
    """Main entry point."""
    import argparse

    parser = argparse.ArgumentParser(
        description=f'File Automation Bot by {self.config["user"]["name"]}'
    )
    parser.add_argument('directory', nargs='?', default='.',
                       help='Directory to organize (default: current directory)')
    parser.add_argument('--watch', action='store_true',
                       help='Watch mode: continuously organize files')
    parser.add_argument('--interval', type=int, default=60,
                       help='Watch interval in seconds (default: 60)')
    parser.add_argument('--duplicates', action='store_true',
                       help='Find duplicate files')

    args = parser.parse_args()

    bot = FileAutomationBot(args.directory)

    print(f"File Automation Bot")
    print(f"Author: {self.config['user']['name']}")
    print(f"GitHub: {self.config['user']['github']}")
    print()

    if args.duplicates:
        bot.duplicate_finder()
    elif args.watch:
        bot.watch_and_organize(args.interval)
    else:
        bot.organize_files()
        bot.clean_empty_folders()

if __name__ == '__main__':
    main()
'''

        # Write files
        self.file_manager.write_file(project_path / "bot.py", main_content)
        self.file_manager.write_file(project_path / "requirements.txt", "# No external dependencies required\n")
        self.file_manager.write_file(project_path / "setup.py",
            self.branding.get_python_setup_py(
                'File Automation Bot',
                'Automated file organization and management bot',
                '1.0.0'
            ))

        self.add_readme(
            project_path,
            "File Automation Bot",
            "An intelligent file automation bot that organizes files into categories, finds duplicates, and cleans up empty folders.",
            setup_instructions="""1. No dependencies required (uses Python standard library)

2. Run the bot:
   ```bash
   python bot.py
   ```""",
            usage_instructions="""**Commands:**

```bash
# Organize files in current directory
python bot.py

# Organize files in specific directory
python bot.py /path/to/directory

# Watch mode (continuous organization)
python bot.py --watch

# Watch with custom interval
python bot.py --watch --interval 30

# Find duplicate files
python bot.py --duplicates
```

**Features:**
- Automatically organizes files by type (Images, Documents, Videos, etc.)
- Removes empty folders
- Finds duplicate files
- Watch mode for continuous organization
- Detailed logging"""
        )

        self.add_license(project_path)
        self.add_gitignore(project_path, ['__pycache__/', '*.py[cod]', '*.log'])

        return project_path
