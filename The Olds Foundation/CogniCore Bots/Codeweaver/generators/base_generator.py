"""
Base Generator Class
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Base class for all language-specific project generators.
"""

from abc import ABC, abstractmethod
from pathlib import Path
from typing import Dict, Any
import logging


class BaseGenerator(ABC):
    """
    Abstract base class for language-specific project generators.

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """

    def __init__(self, config: Dict[str, Any], file_manager, branding_manager):
        """
        Initialize the base generator.

        Args:
            config: Configuration dictionary
            file_manager: FileManager instance
            branding_manager: BrandingManager instance
        """
        self.config = config
        self.file_manager = file_manager
        self.branding = branding_manager
        self.logger = logging.getLogger(self.__class__.__name__)

    @abstractmethod
    def generate_project(self, project_name: str) -> Path:
        """
        Generate a project.

        Args:
            project_name: Name of the project to generate

        Returns:
            Path to the generated project directory
        """
        pass

    @abstractmethod
    def get_language_name(self) -> str:
        """
        Get the language name for this generator.

        Returns:
            Language name
        """
        pass

    def create_project_structure(self, language: str, project_name: str) -> Path:
        """
        Create the basic project directory structure.

        Args:
            language: Programming language
            project_name: Name of the project

        Returns:
            Path to the project directory
        """
        project_path = self.file_manager.get_project_path(language, project_name)
        self.file_manager.create_directory(project_path)

        self.logger.info(f"Created project directory: {project_path}")
        return project_path

    def add_readme(self, project_path: Path, project_name: str, description: str,
                   setup_instructions: str = "", usage_instructions: str = ""):
        """
        Add README file to the project.

        Args:
            project_path: Path to the project directory
            project_name: Name of the project
            description: Project description
            setup_instructions: Setup instructions
            usage_instructions: Usage instructions
        """
        readme_content = self.branding.get_readme_content(
            project_name=project_name,
            description=description,
            language=self.get_language_name(),
            setup_instructions=setup_instructions,
            usage_instructions=usage_instructions
        )

        self.file_manager.write_file(project_path / "README.md", readme_content)
        self.logger.info(f"Created README.md")

    def add_license(self, project_path: Path):
        """
        Add LICENSE file to the project.

        Args:
            project_path: Path to the project directory
        """
        if self.config['generation'].get('add_license', True):
            license_type = self.config['generation'].get('license_type', 'MIT')
            self.file_manager.create_license(project_path, license_type)
            self.logger.info(f"Created LICENSE file ({license_type})")

    def add_gitignore(self, project_path: Path, patterns: list):
        """
        Add .gitignore file to the project.

        Args:
            project_path: Path to the project directory
            patterns: List of patterns to ignore
        """
        self.file_manager.create_gitignore(project_path, patterns)
        self.logger.info(f"Created .gitignore")
