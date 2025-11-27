"""
Multi-Language Project Generator Bot
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Automated bot that generates fully working projects across multiple programming languages
with zero manual intervention.
"""

import os
import json
import logging
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any

# Import generators
from generators.web_generator import WebGenerator
from generators.python_generator import PythonGenerator
from generators.swift_generator import SwiftGenerator
from generators.ruby_generator import RubyGenerator
from generators.java_generator import JavaGenerator
from generators.go_generator import GoGenerator
from generators.rust_generator import RustGenerator
from generators.cpp_generator import CppGenerator
from generators.php_generator import PhpGenerator
from generators.typescript_generator import TypeScriptGenerator

# Import utilities
from utils.file_manager import FileManager
from utils.branding import BrandingManager
from utils.validator import ProjectValidator


class ProjectGeneratorBot:
    """
    Main orchestrator for automated multi-language project generation.

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """

    def __init__(self, config_path: str = "config.json"):
        """Initialize the project generator bot."""
        self.config = self._load_config(config_path)
        self.setup_logging()
        self.file_manager = FileManager(self.config)
        self.branding = BrandingManager(self.config)
        self.validator = ProjectValidator(self.config)

        # Initialize generators
        self.generators = {
            'web': WebGenerator(self.config, self.file_manager, self.branding),
            'python': PythonGenerator(self.config, self.file_manager, self.branding),
            'swift': SwiftGenerator(self.config, self.file_manager, self.branding),
            'ruby': RubyGenerator(self.config, self.file_manager, self.branding),
            'java': JavaGenerator(self.config, self.file_manager, self.branding),
            'go': GoGenerator(self.config, self.file_manager, self.branding),
            'rust': RustGenerator(self.config, self.file_manager, self.branding),
            'cpp': CppGenerator(self.config, self.file_manager, self.branding),
            'php': PhpGenerator(self.config, self.file_manager, self.branding),
            'typescript': TypeScriptGenerator(self.config, self.file_manager, self.branding)
        }

        self.logger.info("Project Generator Bot initialized successfully")
        self.logger.info(f"Author: {self.config['user']['name']}")
        self.logger.info(f"GitHub: {self.config['user']['github']}")

    def _load_config(self, config_path: str) -> Dict[str, Any]:
        """Load configuration from JSON file."""
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)

    def setup_logging(self):
        """Setup logging configuration."""
        log_config = self.config.get('logging', {})
        log_level = getattr(logging, log_config.get('level', 'INFO'))

        # Create logs directory if it doesn't exist
        os.makedirs('logs', exist_ok=True)

        # Configure logging
        logging.basicConfig(
            level=log_level,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler(f"logs/{log_config.get('file', 'project_generator.log')}"),
                logging.StreamHandler() if log_config.get('console_output', True) else logging.NullHandler()
            ]
        )

        self.logger = logging.getLogger(__name__)

    def generate_all_projects(self):
        """
        Generate all projects across all enabled languages.
        This is the zero-click automation entry point.
        """
        self.logger.info("=" * 80)
        self.logger.info("STARTING AUTOMATED PROJECT GENERATION")
        self.logger.info("=" * 80)
        self.logger.info(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

        total_projects = 0
        successful_projects = 0
        failed_projects = 0

        # Get enabled languages
        languages = self.config.get('languages', {})

        for lang_name, lang_config in languages.items():
            if not lang_config.get('enabled', False):
                self.logger.info(f"Skipping {lang_name} (disabled in config)")
                continue

            self.logger.info(f"\n{'=' * 80}")
            self.logger.info(f"GENERATING {lang_name.upper()} PROJECTS")
            self.logger.info(f"{'=' * 80}")

            generator = self.generators.get(lang_name)
            if not generator:
                self.logger.warning(f"No generator found for {lang_name}")
                continue

            projects = lang_config.get('projects', [])
            for project_name in projects:
                total_projects += 1
                self.logger.info(f"\n--- Generating {lang_name}/{project_name} ---")

                try:
                    # Generate the project
                    project_path = generator.generate_project(project_name)

                    # Validate the project
                    if self.config['generation'].get('validate_projects', True):
                        is_valid = self.validator.validate_project(project_path, lang_name)
                        if is_valid:
                            self.logger.info(f"✓ Project validated successfully: {project_path}")
                            successful_projects += 1
                        else:
                            self.logger.warning(f"⚠ Project validation failed: {project_path}")
                            failed_projects += 1
                    else:
                        successful_projects += 1
                        self.logger.info(f"✓ Project generated: {project_path}")

                except Exception as e:
                    self.logger.error(f"✗ Failed to generate {lang_name}/{project_name}: {str(e)}")
                    failed_projects += 1

        # Summary
        self.logger.info("\n" + "=" * 80)
        self.logger.info("GENERATION COMPLETE")
        self.logger.info("=" * 80)
        self.logger.info(f"Total projects: {total_projects}")
        self.logger.info(f"Successful: {successful_projects}")
        self.logger.info(f"Failed: {failed_projects}")
        self.logger.info(f"Success rate: {(successful_projects/total_projects*100):.1f}%")
        self.logger.info(f"\nAll projects created by: {self.config['user']['name']}")
        self.logger.info(f"GitHub: {self.config['user']['github']}")

        return {
            'total': total_projects,
            'successful': successful_projects,
            'failed': failed_projects
        }

    def generate_language_projects(self, language: str):
        """Generate all projects for a specific language."""
        lang_config = self.config['languages'].get(language)
        if not lang_config or not lang_config.get('enabled', False):
            self.logger.error(f"Language {language} is not enabled or not found")
            return

        generator = self.generators.get(language)
        if not generator:
            self.logger.error(f"No generator found for {language}")
            return

        projects = lang_config.get('projects', [])
        for project_name in projects:
            self.logger.info(f"Generating {language}/{project_name}...")
            try:
                project_path = generator.generate_project(project_name)
                self.logger.info(f"✓ Generated: {project_path}")
            except Exception as e:
                self.logger.error(f"✗ Failed: {str(e)}")

    def generate_single_project(self, language: str, project_name: str):
        """Generate a single specific project."""
        generator = self.generators.get(language)
        if not generator:
            self.logger.error(f"No generator found for {language}")
            return None

        try:
            project_path = generator.generate_project(project_name)
            self.logger.info(f"✓ Generated: {project_path}")
            return project_path
        except Exception as e:
            self.logger.error(f"✗ Failed: {str(e)}")
            return None

    def list_available_projects(self):
        """List all available projects that can be generated."""
        print("\n" + "=" * 80)
        print("AVAILABLE PROJECTS")
        print("=" * 80)

        for lang_name, lang_config in self.config['languages'].items():
            if lang_config.get('enabled', False):
                projects = lang_config.get('projects', [])
                print(f"\n{lang_name.upper()} ({len(projects)} projects):")
                for project in projects:
                    print(f"  - {project}")

        print("\n" + "=" * 80)


def main():
    """
    Main entry point for zero-click automation.

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """
    import argparse

    parser = argparse.ArgumentParser(
        description='Multi-Language Project Generator Bot by Ashraf Siddiqui',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Generate all projects (zero-click automation)
  python project_generator_bot.py --auto

  # Generate all Python projects
  python project_generator_bot.py --language python

  # Generate a specific project
  python project_generator_bot.py --language python --project rest_api

  # List available projects
  python project_generator_bot.py --list

Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
        """
    )

    parser.add_argument('--auto', action='store_true',
                       help='Generate all projects automatically (zero-click mode)')
    parser.add_argument('--language', type=str,
                       help='Generate projects for a specific language')
    parser.add_argument('--project', type=str,
                       help='Generate a specific project (requires --language)')
    parser.add_argument('--list', action='store_true',
                       help='List all available projects')
    parser.add_argument('--config', type=str, default='config.json',
                       help='Path to configuration file (default: config.json)')

    args = parser.parse_args()

    # Initialize bot
    bot = ProjectGeneratorBot(config_path=args.config)

    # Execute based on arguments
    if args.list:
        bot.list_available_projects()
    elif args.auto:
        print("\n🤖 Starting automated project generation...")
        print("⚡ Zero-click mode activated - sit back and relax!\n")
        bot.generate_all_projects()
    elif args.language and args.project:
        bot.generate_single_project(args.language, args.project)
    elif args.language:
        bot.generate_language_projects(args.language)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
