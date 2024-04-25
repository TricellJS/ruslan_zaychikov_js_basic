function doubleLetter(str) {
    if ( str === null|| str === '' ) {
        return 'Ты не ввел ничего в строку ввода =('
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

let inputStr = prompt(`Введите свое слово:`);
let doubled = doubleLetter(inputStr);
console.log(doubled);