// DirectorInterface avec les méthodes requises
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string; // Méthode spécifique au directeur
}

// TeacherInterface avec les méthodes requises
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string; // Méthode spécifique à l'enseignant
}

// Classe Director qui implémente DirectorInterface
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

// Classe Teacher qui implémente TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Fonction createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Fonction de garde pour vérifier si un employé est un Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;  // Utilisation de instanceof pour une vérification de type
}

// Fonction pour exécuter le travail
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
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
