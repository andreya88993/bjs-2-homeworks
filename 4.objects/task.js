function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }

  let student1 = new Student("Саша", "Мужчина", 20);
  let student2 = new Student("Алеша", "Мужчина", 16);

  Student.prototype.setSubject = function (subjectName) {
    return this.subject = subjectName;
    }

    Student.prototype.addMarks = function (...marks) {
        if (!this.marks) {
          return 'отчислен';
        }
        this.marks.push(...marks);
          }

Student.prototype.getAverage = function () {
   if(!this.marks || this.marks.length === 0) {
    return 0;
   }
   let sum = this.marks.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sum / this.marks.length;
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
