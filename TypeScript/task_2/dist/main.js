"use strict";
// Classe Director qui implémente DirectorInterface
class Director {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}
// Classe Teacher qui implémente TeacherInterface
class Teacher {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}
// Fonction createEmployee
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Fonction de garde pour vérifier si un employé est un Director
function isDirector(employee) {
    return employee instanceof Director; // Utilisation de instanceof pour une vérification de type
}
// Fonction pour exécuter le travail
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Exécuter les méthodes des classes retournées
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Cannot work from home
console.log(employee1.getCoffeeBreak()); // Cannot have a break
console.log(executeWork(employee1)); // Getting to work
const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // Working from home
console.log(employee2.getCoffeeBreak()); // Getting a coffee break
console.log(executeWork(employee2)); // Getting to director tasks
