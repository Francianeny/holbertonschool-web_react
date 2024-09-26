# TypeScript Project: Employee Management System

This project was developed to demonstrate the creation of interfaces and classes in TypeScript, as well as the use of concepts such as inheritance, methods, and type predicates.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Code Examples](#code-examples)
- [Compilation Instructions](#compilation-instructions)
- [Contributions](#contributions)
- [License](#license)

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Webpack](https://webpack.js.org/) (for module management and compilation)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/repo.git
Navigate to the project directory:

cd repo/TypeScript/task_2
Install the dependencies:

npm install
Features
Creation of interfaces for Teacher and Director.
Implementation of Teacher and Director classes with specific methods.
Employee creation using a createEmployee function that returns either a Teacher or a Director based on the salary.
Functionality to execute specific tasks for each type of employee.
Use of type predicates to determine the type of employee at runtime.
Project Structure

TypeScript/
│
├── task_1/
│   ├── js/
│   │   └── main.ts        # Code for the first task
│   └── tsconfig.json      # TypeScript configuration for task 1
│
└── task_2/
    ├── js/
    │   └── main.ts        # Code for the second task
    ├── tsconfig.json      # TypeScript configuration for task 2
    └── package.json       # Project dependencies

Code Examples
Interfaces and Classes

// DirectorInterface with required methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
Executing Tasks

const employee = createEmployee(1000);
console.log(employee.workFromHome()); // Working from home
console.log(executeWork(employee)); // Getting to director tasks
Compilation Instructions
To compile the TypeScript code, use the following command in the task_2 directory:

npx tsc
This will generate the JavaScript code in the dist folder.

Contributions
Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

### How to Use this README

1. **Replace Personal Details:** Modify the Git clone link to point to your own repository and add your name if necessary.
2. **Add Sections if Needed:** If you have additional features or details to include, feel free to incorporate them into the README.
3. **Update Code:** Ensure that the code snippets are current and reflect the latest changes in your project.

This README template should help you document your work clearly and profess
