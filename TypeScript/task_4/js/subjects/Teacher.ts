namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number; // Attribut optionnel pour l'expérience en C
        experienceTeachingReact?: number; // Attribut optionnel pour l'expérience en React
        experienceTeachingJava?: number; // Attribut optionnel pour l'expérience en Java
    }
}
