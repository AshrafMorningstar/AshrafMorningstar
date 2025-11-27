"""
Project Validator Utility
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Validates generated projects for correctness and completeness.
"""

import os
import json
from pathlib import Path
from typing import Dict, Any, List
import logging


class ProjectValidator:
    """
    Validates generated projects to ensure they are complete and functional.

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """

    def __init__(self, config: Dict[str, Any]):
        """Initialize the project validator."""
        self.config = config
        self.logger = logging.getLogger(__name__)

    def validate_project(self, project_path: Path, language: str) -> bool:
        """
        Validate a generated project.

        Args:
            project_path: Path to the project directory
            language: Programming language of the project

        Returns:
            True if project is valid, False otherwise
        """
        if not project_path.exists():
            self.logger.error(f"Project path does not exist: {project_path}")
            return False

        # Check for README
        if not self._check_readme(project_path):
            self.logger.warning(f"README not found in {project_path}")
            return False

        # Check for LICENSE
        if self.config['generation'].get('add_license', True):
            if not self._check_license(project_path):
                self.logger.warning(f"LICENSE not found in {project_path}")
                return False

        # Language-specific validation
        validator_method = getattr(self, f'_validate_{language}', None)
        if validator_method:
            return validator_method(project_path)

        # Default validation - just check if directory is not empty
        return self._check_not_empty(project_path)

    def _check_readme(self, project_path: Path) -> bool:
        """Check if README file exists."""
        readme_files = ['README.md', 'README.txt', 'README']
        return any((project_path / readme).exists() for readme in readme_files)

    def _check_license(self, project_path: Path) -> bool:
        """Check if LICENSE file exists."""
        return (project_path / "LICENSE").exists()

    def _check_not_empty(self, project_path: Path) -> bool:
        """Check if directory is not empty."""
        return len(list(project_path.iterdir())) > 0

    def _validate_web(self, project_path: Path) -> bool:
        """Validate web projects (HTML/CSS/JS)."""
        # Check for index.html
        if not (project_path / "index.html").exists():
            self.logger.error(f"index.html not found in {project_path}")
            return False

        # Check for basic structure
        html_content = (project_path / "index.html").read_text(encoding='utf-8')
        required_tags = ['<html', '<head', '<body', '</html>']

        for tag in required_tags:
            if tag not in html_content.lower():
                self.logger.error(f"Missing required HTML tag: {tag}")
                return False

        return True

    def _validate_python(self, project_path: Path) -> bool:
        """Validate Python projects."""
        # Check for at least one .py file
        py_files = list(project_path.glob("**/*.py"))
        if not py_files:
            self.logger.error(f"No Python files found in {project_path}")
            return False

        # Check for requirements.txt or setup.py
        has_requirements = (project_path / "requirements.txt").exists()
        has_setup = (project_path / "setup.py").exists()

        if not (has_requirements or has_setup):
            self.logger.warning(f"No requirements.txt or setup.py found in {project_path}")

        return True

    def _validate_swift(self, project_path: Path) -> bool:
        """Validate Swift projects."""
        # Check for at least one .swift file
        swift_files = list(project_path.glob("**/*.swift"))
        if not swift_files:
            self.logger.error(f"No Swift files found in {project_path}")
            return False

        return True

    def _validate_ruby(self, project_path: Path) -> bool:
        """Validate Ruby projects."""
        # Check for at least one .rb file
        rb_files = list(project_path.glob("**/*.rb"))
        if not rb_files:
            self.logger.error(f"No Ruby files found in {project_path}")
            return False

        # Check for Gemfile
        if not (project_path / "Gemfile").exists():
            self.logger.warning(f"No Gemfile found in {project_path}")

        return True

    def _validate_java(self, project_path: Path) -> bool:
        """Validate Java projects."""
        # Check for at least one .java file
        java_files = list(project_path.glob("**/*.java"))
        if not java_files:
            self.logger.error(f"No Java files found in {project_path}")
            return False

        # Check for pom.xml or build.gradle
        has_maven = (project_path / "pom.xml").exists()
        has_gradle = (project_path / "build.gradle").exists()

        if not (has_maven or has_gradle):
            self.logger.warning(f"No pom.xml or build.gradle found in {project_path}")

        return True

    def _validate_go(self, project_path: Path) -> bool:
        """Validate Go projects."""
        # Check for at least one .go file
        go_files = list(project_path.glob("**/*.go"))
        if not go_files:
            self.logger.error(f"No Go files found in {project_path}")
            return False

        # Check for go.mod
        if not (project_path / "go.mod").exists():
            self.logger.warning(f"No go.mod found in {project_path}")

        return True

    def _validate_rust(self, project_path: Path) -> bool:
        """Validate Rust projects."""
        # Check for Cargo.toml
        if not (project_path / "Cargo.toml").exists():
            self.logger.error(f"Cargo.toml not found in {project_path}")
            return False

        # Check for src directory with .rs files
        src_dir = project_path / "src"
        if not src_dir.exists():
            self.logger.error(f"src directory not found in {project_path}")
            return False

        rs_files = list(src_dir.glob("**/*.rs"))
        if not rs_files:
            self.logger.error(f"No Rust files found in {src_dir}")
            return False

        return True

    def _validate_cpp(self, project_path: Path) -> bool:
        """Validate C++ projects."""
        # Check for at least one .cpp or .h file
        cpp_files = list(project_path.glob("**/*.cpp")) + list(project_path.glob("**/*.h"))
        if not cpp_files:
            self.logger.error(f"No C++ files found in {project_path}")
            return False

        # Check for CMakeLists.txt or Makefile
        has_cmake = (project_path / "CMakeLists.txt").exists()
        has_makefile = (project_path / "Makefile").exists()

        if not (has_cmake or has_makefile):
            self.logger.warning(f"No CMakeLists.txt or Makefile found in {project_path}")

        return True

    def _validate_php(self, project_path: Path) -> bool:
        """Validate PHP projects."""
        # Check for at least one .php file
        php_files = list(project_path.glob("**/*.php"))
        if not php_files:
            self.logger.error(f"No PHP files found in {project_path}")
            return False

        # Check for composer.json
        if not (project_path / "composer.json").exists():
            self.logger.warning(f"No composer.json found in {project_path}")

        return True

    def _validate_typescript(self, project_path: Path) -> bool:
        """Validate TypeScript projects."""
        # Check for package.json
        if not (project_path / "package.json").exists():
            self.logger.error(f"package.json not found in {project_path}")
            return False

        # Check for at least one .ts or .tsx file
        ts_files = list(project_path.glob("**/*.ts")) + list(project_path.glob("**/*.tsx"))
        if not ts_files:
            self.logger.warning(f"No TypeScript files found in {project_path}")

        # Check for tsconfig.json
        if not (project_path / "tsconfig.json").exists():
            self.logger.warning(f"No tsconfig.json found in {project_path}")

        return True

    def validate_syntax(self, file_path: Path, language: str) -> bool:
        """
        Validate syntax of a source file (basic check).

        Args:
            file_path: Path to the source file
            language: Programming language

        Returns:
            True if syntax appears valid, False otherwise
        """
        # For Python, we can do a simple compile check
        if language == 'python':
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    compile(f.read(), file_path, 'exec')
                return True
            except SyntaxError as e:
                self.logger.error(f"Syntax error in {file_path}: {e}")
                return False

        # For other languages, just check if file is not empty and has content
        try:
            content = file_path.read_text(encoding='utf-8').strip()
            return len(content) > 0
        except Exception as e:
            self.logger.error(f"Error reading {file_path}: {e}")
            return False
