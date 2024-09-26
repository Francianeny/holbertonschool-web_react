namespace Main {
    // Création d'un professeur avec l'expérience d'enseignement en C
    const teacher: Subjects.Teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 3 // Définir l'expérience en enseignement
    };

    // Création d'une instance de la classe Cpp
    const cppClass = new Subjects.Cpp();
    cppClass.setTeacher(teacher); // Définir le professeur pour la classe Cpp

    // Afficher le professeur disponible pour la classe Cpp
    console.log(cppClass.getAvailableTeacher()); // Affiche "Available Teacher: John"

    // Vous pouvez également tester d'autres classes, par exemple, pour Java ou React
    const javaTeacher: Subjects.Teacher = {
        firstName: "Alice",
        lastName: "Smith",
        experienceTeachingJava: 2 // Définir l'expérience en enseignement Java
    };

    const javaClass = new Subjects.Java();
    javaClass.setTeacher(javaTeacher);
    console.log(javaClass.getAvailableTeacher()); // Affiche "Available Teacher: Alice"
}
