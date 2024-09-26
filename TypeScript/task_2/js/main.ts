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
    return (employee as Director).workDirectorTasks !== undefined;
}

// Exécuter les méthodes des classes retournées
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Cannot work from home
console.log(employee1.getCoffeeBreak()); // Cannot have a break

if (isDirector(employee1)) {
    console.log(employee1.workDirectorTasks()); // Ne sera pas appelé car ce n'est pas un Director
} else {
    console.log(employee1.workTeacherTasks()); // Getting to work
}

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // Working from home
console.log(employee2.getCoffeeBreak()); // Getting a coffee break

if (isDirector(employee2)) {
    console.log(employee2.workDirectorTasks()); // Getting to director tasks
} else {
    console.log(employee2.workTeacherTasks()); // Ne sera pas appelé car c'est un Director
}
