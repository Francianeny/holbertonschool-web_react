namespace Subjects {
    export class Subject {
        private teacher: Teacher;  // Propriété teacher de type Teacher

        setTeacher(teacher: Teacher): void {  // Méthode pour définir le teacher
            this.teacher = teacher;
        }

        // Getter pour accéder à l'enseignant puisqu'il est privé
        getTeacher(): Teacher {
            return this.teacher;
        }
    }
}
