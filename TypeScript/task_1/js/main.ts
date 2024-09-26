// Define an interface for a Book
interface Book {
    title: string;
    author: string;
    yearPublished: number;
}

// Create a function to display book details
function displayBook(book: Book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year Published: ${book.yearPublished}`);
}

// Create a couple of book objects
const book1: Book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960
};

const book2: Book = {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949
};

// Call the display function for each book
displayBook(book1);
displayBook(book2);

// Définir l'interface Teacher
interface Teacher {
    name: string;
    subject: string;
    yearsOfExperience: number;

    teach(): void;
    evaluate(studentId: string): string;
}

// Interface Directors qui étend Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Implémentation de la classe SchoolDirector
class SchoolDirector implements Directors {
    name: string;
    subject: string;
    yearsOfExperience: number;
    numberOfReports: number;

    constructor(name: string, subject: string, yearsOfExperience: number, numberOfReports: number) {
        this.name = name;
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
        this.numberOfReports = numberOfReports;
    }

    teach(): void {
        console.log(`${this.name} enseigne ${this.subject}.`);
    }

    evaluate(studentId: string): string {
        return `L'étudiant avec l'ID ${studentId} a été évalué.`;
    }
}

// Définir l'interface pour la fonction printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string; // Prend deux chaînes de caractères en entrée et retourne une chaîne
}

// Implémenter la fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`; // Retourne la première lettre de firstName et le nom de famille
};

// Exemple d'utilisation de SchoolDirector
const director = new SchoolDirector("Alice", "Mathématiques", 10, 5);
director.teach();
console.log(`Nombre de rapports : ${director.numberOfReports}`);
console.log(director.evaluate("12345"));
console.log(printTeacher("John", "Doe"));
