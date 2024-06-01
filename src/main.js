// console.log('Hey, this is my first JS program');
// const height = parseInt(prompt("Введіть висоту ялинки: "));
// let tree = '';
// for (let i = 0; i < height; i++) {
//     tree += ' '.repeat(height - i - 1) + '*'.repeat(2 * i + 1) + '\n';
// }
// console.log(tree);



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Введіть число: ', (number) => {
//   number = parseInt(number);
//   let isPrime = true;

//   if (number === 1) {
//     isPrime = false;
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }

//   if (isPrime) {
//     console.log(`Число ${number} є простим числом`);
//   } else {
//     console.log(`Число ${number} не є простим числом`);
//   }

//   rl.close();
// });

// // let a = '100px';
// // console.log(parseInt(a));


// let yearStr = prompt('Ваш год рождения:');
// let year = parseInt(yearStr);

// if (!isNaN(year) && yearStr !== '' && year >= 0) {
    
//     let ageTxt;

//     if (year === 0) {
//         console.log(`Тебе меньше года, ути мой малнький =)`);
//     } else if (year % 10 === 1 && year % 100 !== 11) {
//         ageTxt = 'год';
//     } else if ((year % 10 === 2 || year % 10 === 3 || year % 10 === 4) && (year % 100 < 10 || year % 100 > 20)) {
//         ageTxt = 'года';
//     } else {
//         ageTxt = 'лет';
//     }

//     if (ageTxt) {
//         console.log(`Тебе ${year} ${ageTxt}`);
//     }
// } else {
//     console.log('Введен некорректный год рождения');
// }

// let lines = 7;
// let str = " ";
// let star = "*";
// for (let i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }


// первый способ

// let lines = 5;
// let sym = '*';

// for (let i = 1; i <= lines; i++) {
//     let row = '';
//     for (let j = 0; j < i; j++) {
//         row += sym;
//     }
//     console.log(row);
// }

// // 2й способ


// let height = 7;
// let symbol = '*';

// let str = '';
// for (let i = 1; i <= height; i++) {
//     str += symbol.repeat(i) + '\n';
// }
// console.log(str);


// let yearStr = prompt('Ваш вік:');
// let year = parseInt(yearStr);

// if (!isNaN(year) && yearStr !== '' && year >= 0) {
    
//     let ageTxt;

//     if (year === 0) {
//         console.log(`Тобі менше року, малюк`);
//     } else if (year % 10 === 1 && year % 100 !== 11) {
//         ageTxt = 'рік';
//     } else if ((year % 10 === 2 || year % 10 === 3 || year % 10 === 4) && (year % 100 < 10 || year % 100 > 20)) {
//         ageTxt = 'роки'; // Змінено з "рокі" на "роки"
//     } else {
//         ageTxt = 'років';
//     }

//     if (ageTxt) {
//         console.log(`Тобі ${year} ${ageTxt}`);
//     }
// } else {
//     console.log('Введено некоректні дані');
// }


// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 !== 0) { // 1\3 2\3 3\3=0
//         sum += i;
//     }
// }

// console.log(sum);




// function pow(x, y) {
//     if (isNaN(x) || isNaN(y)) {
//         return `Введені значення повинні бути числами`;
//     }

//     let result = 1;
//     for (let i = 0; i < y; i++) {
//         result *= x;
//     }
//     return result;
// }

// let num1 = parseInt(prompt(`Введи число, яке хочеш піднести до степеня:`));
// let num2 = parseInt(prompt(`Укажи степінь, до якої піднести перше число:`));

// console.log(`Число ${num1} в степени ${num2} =`,pow(num1, num2));


// function pow(x, y) {
//     if (x == null || isNaN(x) || y == null || isNaN(y)) {
//         return `Введені значення повинні бути числами`;
//     }

//     let result = 1;
//     for (let i = 0; i < y; i++) {
//         result *= x;
//     }
//     return result;
// }

// let num1 = parseInt(prompt(`Введи число, яке хочеш піднести до степеня:`));
// let num2 = parseInt(prompt(`Укажи степінь, до якої піднести перше число:`));

// console.log(`Число ${num1} в степени ${num2} =`, pow(num1, num2));


// function pow(x, y) {
//     // Перевіряємо, чи x або y є null, NaN або undefined
//     if (x == null || isNaN(x) || y == null || isNaN(y)) {
//         return `Введені значення повинні бути числами`;
//     }

//     let result = 1; // Ініціалізуємо змінну для зберігання результату піднесення числа до степеня
//     // Виконуємо цикл, який перемножує число x y (число яке отримуємо) разів.
//     for (let i = 0; i < y; i++) {
//         result *= x;
//     }
//     return `Число ${x} в степені ${y} = ${result}`; // Повертаємо рядок з результатом піднесення числа до степеня
// }

// // Запитуємо користувача про значення для піднесення до степеня
// let num1 = parseInt(prompt(`Введи число, яке хочеш піднести до степеня:`));
// let num2 = parseInt(prompt(`Укажи степінь, до якої піднести перше число:`));

// // Виводимо результат в консоль
// console.log(pow(num1, num2));

function calculateAverageGrade(students) {
    if (students.length === 0) {
        return 0; // якщо масив порожній, повертаємо 0
    }

    let totalGradeSum = 0;

    // Сумуємо всі середні бали студентів
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        totalGradeSum += student.grade;
    }

    // Обчислюємо середній бал
    const averageGrade = totalGradeSum / students.length;

    return averageGrade;
}

// Приклад використання:
const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // Повинно вивести 4.4
