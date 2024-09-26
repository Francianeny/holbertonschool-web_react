const teacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 3 // Définir l'expérience d'enseignement pour C
};

const cppClass = new Subjects.Cpp();
cppClass.setTeacher(teacher); // Définir le professeur
console.log(cppClass.getAvailableTeacher()); // Affiche "Available Teacher: John"
