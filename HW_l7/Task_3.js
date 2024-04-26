function calculateAverageGrade(students) {
    if (students.length === 0) {
        return 0;
    }

    let totalSum = 0;

    for (let i = 0; i < students.length; i++) {
        totalSum += students[i].grade;
    }

    const averageGrade = totalSum / students.length;

    return averageGrade;
}

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // Повинно вивести 4.4
