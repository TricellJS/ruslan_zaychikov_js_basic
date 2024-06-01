// Конструктор Student
function Student(firstName, lastName, birthYear, initialCourses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = initialCourses || [];
    this.grades = {};
    this.attendance = {};
    this.totalClassesPerCourse = {};

    // Метод додавання курсу
    this.addCourse = function(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
            this.grades[course] = [];
            this.attendance[course] = [];
            this.totalClassesPerCourse[course] = course * 15; // Припускаємо, що на кожному курсі 15 занять
        }
    };

    // Метод видалення курсу
    this.removeCourse = function(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
            delete this.grades[course];
            delete this.attendance[course];
            delete this.totalClassesPerCourse[course];
        }
    };

    // Метод додавання оцінки
    this.addGrade = function(course, grade) {
        if (!this.grades[course]) return;
        this.grades[course].push(grade);
    };

    // Метод додавання відвідування
    this.addAttendance = function(course, attended) {
        if (!this.attendance[course]) return;
        this.attendance[course].push(attended);
    };

    // Метод отримання середньої успішності на певному курсі
    this.getAverageGrade = function(course) {
        if (!this.grades[course] || this.grades[course].length === 0) return 0;
        const sum = this.grades[course].reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades[course].length;
    };

    // Метод отримання середньої відвідуваності на певному курсі
    this.getAverageAttendance = function(course) {
        if (!this.attendance[course] || this.attendance[course].length === 0) return 0;
        const total = this.attendance[course].reduce((acc, curr) => acc + curr, 0);
        return (total / this.totalClassesPerCourse[course]) * 100;
    };

    // Метод отримання кількості пройдених занять на певному курсі
    this.getAttendedClasses = function(course) {
        if (!this.attendance[course]) return 0;
        return this.attendance[course].filter(attended => attended === true).length;
    };

    // Метод для зміни курсу
    this.changeCourse = function(course) {
        this.courses = [course]; // Змінюємо курс на переданий курс
        this.grades = {}; // Очищаємо дані про оцінки
        this.attendance = {}; // Очищаємо дані про відвідуваність
        this.totalClassesPerCourse = {}; // Очищаємо дані про загальну кількість занять
        this.addCourse(course); // Додаємо новий курс
    };

    // Метод для отримання інформації про студента
    this.getStudentInfo = function() {
        const fullName = this.firstName + ' ' + this.lastName;
        const age = new Date().getFullYear() - this.birthYear;
        const coursesInfo = {};
        this.courses.forEach(course => {
            coursesInfo[course] = {
                averageGrade: this.getAverageGrade(course),
                averageAttendance: this.getAverageAttendance(course),
                attendedClasses: this.getAttendedClasses(course),
                totalClasses: this.totalClassesPerCourse[course]
            };
        });
        return {
            fullName: fullName,
            age: age,
            birthYear: this.birthYear,
            courses: coursesInfo
        };
    };
}

// Конструктор Group
function Group() {
    this.students = [];

    // Метод для додавання студента
    this.addStudent = function(student) {
        this.students.push(student);
    };

    // Метод для видалення студента
    this.removeStudent = function(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };

    // Метод для отримання рейтингу студентів за відвідуваністю
    this.getAttendanceRating = function() {
        const sortedStudents = this.students.sort((a, b) => {
            const attendanceA = a.getAverageAttendance();
            const attendanceB = b.getAverageAttendance();
            return attendanceB - attendanceA; // Сортування за спаданням
        });
        return sortedStudents;
    };

    // Метод для отримання рейтингу студентів за успішністю
    this.getGradeRating = function() {
        const sortedStudents = this.students.sort((a, b) => {
            const gradeA = a.getAverageGrade();
            const gradeB = b.getAverageGrade();
            return gradeB - gradeA; // Сортування за спаданням
        });
        return sortedStudents;
    };
}

// Приклад використання конструкторів
const student1 = new Student('Іван', 'Петров', 1998, [1]);
const student2 = new Student('Марія', 'Іванова', 1999, [2]);
const student3 = new Student('Петро', 'Сидоров', 2000, [3]);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log("Рейтинг студентів за відвідуваністю:");
console.log(group.getAttendanceRating());

console.log("Рейтинг студентів за успішністю:");
console.log(group.getGradeRating());

// Приклад додавання та видалення курсу для студента
student1.addCourse(4); // Додаємо курс для студента
console.log(student1.getStudentInfo()); // Виводимо інформацію про студента

student1.removeCourse(1); // Видаляємо курс для студента
console.log(student1.getStudentInfo()); // Виводимо оновлену інформацію про студента
