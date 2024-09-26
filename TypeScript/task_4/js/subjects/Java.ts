namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            const teacher = this.getTeacher(); // Obtenir le professeur
            if (teacher && teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}
