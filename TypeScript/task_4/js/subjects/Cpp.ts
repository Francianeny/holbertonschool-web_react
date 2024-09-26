namespace Subjects {
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            const teacher = this.getTeacher();  // Utiliser le getter
            if (teacher && teacher.experienceTeachingC) {
                return `Available Teacher: ${teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
