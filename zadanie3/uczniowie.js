class Student {
    constructor(imie, wiek, oceny = []) {
        this.StudentName = imie;
        this.StudentAge = wiek;
        this.StudentGrade = oceny; 
    }
    getGrade(nowa) {
        this.StudentGrade = [...this.StudentGrade, nowa]; 
        console.log(`Dodano nową ocenę, aktualna liczba ocen wynosi: ${this.StudentGrade}`);
    }
    getAverage() {
        const suma = this.StudentGrade.reduce((acc, num) => acc + num, 0); 
        console.log(`Średnia ocen wynosi: ${(suma / this.StudentGrade.length).toFixed(2)}`);
    }
}
const student = new Student(`Adam`, 17, [5, 5, 1, 1]);
student.getAverage(); 
const student2 = new Student('Ala', 16);
student2.getGrade(5);
student2.getGrade(3);
student2.getAverage(); 
