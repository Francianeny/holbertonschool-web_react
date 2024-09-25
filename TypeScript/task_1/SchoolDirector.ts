import { Directors } from './Directors';

// Implémentation de la classe SchoolDirector
export class SchoolDirector implements Directors {
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
