"""
C++ Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class CppGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "C++"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_console_game()

    def _generate_console_game(self) -> Path:
        project_path = self.create_project_structure('cpp', 'console_game')

        main_content = f'''/**
 * Console Game
 * Author: {self.config["user"]["name"]}
 * GitHub: {self.config["user"]["github"]}
 */

#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <ctime>

using namespace std;

class NumberGuessingGame {{
private:
    int secretNumber;
    int attempts;

public:
    NumberGuessingGame() {{
        srand(time(0));
        secretNumber = rand() % 100 + 1;
        attempts = 0;
    }}

    void play() {{
        cout << "Number Guessing Game" << endl;
        cout << "Author: {self.config["user"]["name"]}" << endl;
        cout << "GitHub: {self.config["user"]["github"]}" << endl;
        cout << "\\nGuess a number between 1 and 100" << endl;

        int guess;
        bool won = false;

        while (!won) {{
            cout << "\\nEnter your guess: ";
            cin >> guess;
            attempts++;

            if (guess == secretNumber) {{
                won = true;
                cout << "Congratulations! You won in " << attempts << " attempts!" << endl;
            }} else if (guess < secretNumber) {{
                cout << "Too low! Try again." << endl;
            }} else {{
                cout << "Too high! Try again." << endl;
            }}
        }}
    }}
}};

int main() {{
    NumberGuessingGame game;
    game.play();
    return 0;
}}
'''

        cmake_content = f'''cmake_minimum_required(VERSION 3.10)
project(ConsoleGame)

set(CMAKE_CXX_STANDARD 11)

add_executable(game main.cpp)
'''

        self.file_manager.write_file(project_path / "main.cpp", main_content)
        self.file_manager.write_file(project_path / "CMakeLists.txt", cmake_content)

        self.add_readme(project_path, "C++ Console Game", "A number guessing game built with C++.",
                       "1. mkdir build && cd build\\n2. cmake ..\\n3. make\\n4. ./game", "Run the game executable")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['build/', '*.exe', '*.out', '*.o'])

        return project_path
