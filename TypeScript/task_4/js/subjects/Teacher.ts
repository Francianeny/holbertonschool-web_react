namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;  // Ajout de l'attribut optionnel pour C
        experienceTeachingJava?: number; // Ajout pour Java
        experienceTeachingReact?: number; // Ajout pour React
    }
}
