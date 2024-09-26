namespace Subjects {
    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (this.getTeacher() && this.getTeacher()!.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.getTeacher()!.firstName}`;
            }
            return "No available teacher";
        }
    }
}
