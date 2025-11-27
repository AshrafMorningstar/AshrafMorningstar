/*
 * Number Guessing Game
 * Author: Ashraf Siddiqui
 * GitHub: https://github.com/AshrafMorningstar
 */

#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
#include <limits>

using namespace std;

class Game {
private:
    int secretNumber;
    int attempts;
    int maxAttempts;
    string playerName;

public:
    Game(string name, int max = 10) : playerName(name), maxAttempts(max), attempts(0) {
        srand(time(0));
        secretNumber = rand() % 100 + 1;
    }

    void displayWelcome() {
        cout << "\n================================\n";
        cout << "  NUMBER GUESSING GAME\n";
        cout << "  Created by: Ashraf Siddiqui\n";
        cout << "  GitHub: https://github.com/AshrafMorningstar\n";
        cout << "================================\n\n";
        cout << "Welcome, " << playerName << "!\n";
        cout << "Guess a number between 1 and 100\n";
        cout << "You have " << maxAttempts << " attempts\n\n";
    }

    bool makeGuess(int guess) {
        attempts++;

        if (guess < secretNumber) {
            cout << "Too low! ";
        } else if (guess > secretNumber) {
            cout << "Too high! ";
        } else {
            cout << "\n🎉 Congratulations! You won!\n";
            cout << "You guessed it in " << attempts << " attempts!\n";
            return true;
        }

        cout << "Attempts left: " << (maxAttempts - attempts) << "\n";
        return false;
    }

    bool isGameOver() {
        if (attempts >= maxAttempts) {
            cout << "\nGame Over! The number was " << secretNumber << "\n";
            return true;
        }
        return false;
    }

    void displayStats() {
        cout << "\n--- Game Statistics ---\n";
        cout << "Player: " << playerName << "\n";
        cout << "Attempts used: " << attempts << "/" << maxAttempts << "\n";
        cout << "Success rate: " << (attempts > 0 ? (100.0 / attempts) : 0) << "%\n";
    }
};

int main() {
    cout << "Enter your name: ";
    string name;
    getline(cin, name);

    if (name.empty()) {
        name = "Player";
    }

    Game game(name);
    game.displayWelcome();

    while (true) {
        cout << "\nEnter your guess: ";
        int guess;

        if (!(cin >> guess)) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Invalid input! Please enter a number.\n";
            continue;
        }

        if (guess < 1 || guess > 100) {
            cout << "Please guess between 1 and 100!\n";
            continue;
        }

        if (game.makeGuess(guess)) {
            break;
        }

        if (game.isGameOver()) {
            break;
        }
    }

    game.displayStats();

    cout << "\nThank you for playing!\n";
    cout << "Created by Ashraf Siddiqui\n";

    return 0;
}
