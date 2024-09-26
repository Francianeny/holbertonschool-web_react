namespace Subjects {
    export class Subject {
        protected teacher: Teacher | undefined; // Utilisation de protected pour l'accès dans les sous-classes

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }

        // Ajoutez un getter pour accéder au teacher
        getTeacher(): Teacher | undefined {
            return this.teacher;
        }
    }
}
