// Définir l'interface Teacher
export interface Teacher {
    name: string;
    subject: string;
    yearsOfExperience: number;

    teach(): void;
    evaluate(studentId: string): string;
}
