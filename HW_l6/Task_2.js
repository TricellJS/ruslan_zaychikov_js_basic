function padString(str, length, symbol, toLeft = false) {
    if (str === null || str === '') {
        console.log(`Нужно ввести хоть какое то значение`);
        return '';
    }

    if (length === null || isNaN(length) || length <= 0) {
        console.log(`Не введена длина строки`);
        return '';
    }

    if (symbol === null || symbol === '') {
        console.log(`Нужно указать символ для заполнения`);
        return '';
    }

    if (str.length >= length) {
        return str;
    }

    let diff = length - str.length;
    let padding = symbol.repeat(diff);

    if (toLeft) {
        return padding + str;
    } else {
        return str + padding;
    }
}

let inputStr = prompt(`Введите вашу строку:`);
let inputLength = parseInt(prompt(`Введите длину строки:`));
let inputSymbol = prompt("Введите символ, которым заполнить пустое пространство:");

let paddedStr = padString(inputStr, inputLength, inputSymbol);

console.log(paddedStr);

