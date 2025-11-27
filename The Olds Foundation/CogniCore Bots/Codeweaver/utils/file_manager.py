"""
File Manager Utility
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar

Handles file and directory operations for project generation.
"""

import os
import shutil
from pathlib import Path
from typing import Dict, Any, List
from datetime import datetime


class FileManager:
    """
    Manages file and directory operations for project generation.

    Author: Ashraf Siddiqui
    GitHub: https://github.com/AshrafMorningstar
    """

    def __init__(self, config: Dict[str, Any]):
        """Initialize the file manager."""
        self.config = config
        self.base_dir = config['output']['base_directory']
        self.organize_by_language = config['output']['organize_by_language']
        self.create_timestamps = config['output']['create_timestamps']

    def get_project_path(self, language: str, project_name: str) -> Path:
        """
        Get the full path for a project.

        Args:
            language: Programming language
            project_name: Name of the project

        Returns:
            Path object for the project directory
        """
        base = Path(self.base_dir)

        if self.organize_by_language:
            path = base / language / project_name
        else:
            path = base / f"{language}_{project_name}"

        if self.create_timestamps:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            path = path.parent / f"{path.name}_{timestamp}"

        return path

    def create_directory(self, path: Path) -> Path:
        """
        Create a directory and all parent directories.

        Args:
            path: Path to create

        Returns:
            The created path
        """
        path.mkdir(parents=True, exist_ok=True)
        return path

    def write_file(self, path: Path, content: str, encoding: str = 'utf-8'):
        """
        Write content to a file.

        Args:
            path: File path
            content: Content to write
            encoding: File encoding (default: utf-8)
        """
        # Ensure parent directory exists
        path.parent.mkdir(parents=True, exist_ok=True)

        # Write file
        with open(path, 'w', encoding=encoding, newline='\n') as f:
            f.write(content)

    def write_binary_file(self, path: Path, content: bytes):
        """
        Write binary content to a file.

        Args:
            path: File path
            content: Binary content to write
        """
        # Ensure parent directory exists
        path.parent.mkdir(parents=True, exist_ok=True)

        # Write file
        with open(path, 'wb') as f:
            f.write(content)

    def copy_file(self, src: Path, dest: Path):
        """
        Copy a file from source to destination.

        Args:
            src: Source file path
            dest: Destination file path
        """
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)

    def copy_directory(self, src: Path, dest: Path):
        """
        Copy a directory recursively.

        Args:
            src: Source directory path
            dest: Destination directory path
        """
        shutil.copytree(src, dest, dirs_exist_ok=True)

    def read_file(self, path: Path, encoding: str = 'utf-8') -> str:
        """
        Read content from a file.

        Args:
            path: File path
            encoding: File encoding (default: utf-8)

        Returns:
            File content as string
        """
        with open(path, 'r', encoding=encoding) as f:
            return f.read()

    def file_exists(self, path: Path) -> bool:
        """
        Check if a file exists.

        Args:
            path: File path

        Returns:
            True if file exists, False otherwise
        """
        return path.exists() and path.is_file()

    def directory_exists(self, path: Path) -> bool:
        """
        Check if a directory exists.

        Args:
            path: Directory path

        Returns:
            True if directory exists, False otherwise
        """
        return path.exists() and path.is_dir()

    def list_files(self, directory: Path, pattern: str = "*") -> List[Path]:
        """
        List files in a directory matching a pattern.

        Args:
            directory: Directory to search
            pattern: Glob pattern (default: *)

        Returns:
            List of file paths
        """
        if not self.directory_exists(directory):
            return []

        return list(directory.glob(pattern))

    def delete_directory(self, path: Path):
        """
        Delete a directory and all its contents.

        Args:
            path: Directory path to delete
        """
        if self.directory_exists(path):
            shutil.rmtree(path)

    def get_file_size(self, path: Path) -> int:
        """
        Get the size of a file in bytes.

        Args:
            path: File path

        Returns:
            File size in bytes
        """
        if self.file_exists(path):
            return path.stat().st_size
        return 0

    def create_gitignore(self, project_path: Path, patterns: List[str]):
        """
        Create a .gitignore file with specified patterns.

        Args:
            project_path: Project root directory
            patterns: List of patterns to ignore
        """
        gitignore_content = "\n".join(patterns)
        self.write_file(project_path / ".gitignore", gitignore_content)

    def create_license(self, project_path: Path, license_type: str = "MIT"):
        """
        Create a LICENSE file.

        Args:
            project_path: Project root directory
            license_type: Type of license (default: MIT)
        """
        year = datetime.now().year
        author = self.config['user']['name']

        if license_type == "MIT":
            license_content = f"""MIT License

Copyright (c) {year} {author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""
        else:
            license_content = f"Copyright (c) {year} {author}. All rights reserved.\n"

        self.write_file(project_path / "LICENSE", license_content)
