namespace Subjects {
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            const teacher = this.getTeacher(); // Obtenir le professeur
            // Vérifier si le professeur existe et a de l'expérience en enseignement C
            if (teacher && teacher.experienceTeachingC !== undefined && teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}
