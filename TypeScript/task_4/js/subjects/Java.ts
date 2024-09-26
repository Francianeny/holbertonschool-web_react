namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.getTeacher() && this.getTeacher()!.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.getTeacher()!.firstName}`;
            }
            return "No available teacher";
        }
    }
}
