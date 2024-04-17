function findGCD(a, b) {

    if (isNaN(a) || isNaN(b)) {
        return `Вы ввели не число или не заполнили поле(я)!`;
    }
    if (a === 0 && b === 0) {
        return `На разных ресурсах НОД этих чисел равен 0 или 1`;
    }
    if (b === 0) {
        return a;
    } else {
        let temp;
        while (b !== 0) {
            temp = b;
            b = a % b;
            a = temp;
        }

        if (a < 0) {
            a = -a;
        }
        return `НОД чисел ${num} и ${num1}: = ${a}`;

    }

}

let num = parseInt(prompt(`Введите первое число:`));
let num1 = parseInt(prompt(`Введите второе число:`));

console.log(findGCD(num, num1));


// Ром вот я использовал калькулятор для проверки своего кода https://ru.onlinemschool.com/math/assistance/number_theory/nod_nok/