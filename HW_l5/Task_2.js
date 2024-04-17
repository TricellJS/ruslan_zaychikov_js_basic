function isPalindrome(str) {
    let outputTxt = '';
    for (let i = str.length - 1; i >= 0; i--) {
        outputTxt += str[i];
    }

    if (str === outputTxt) {
        console.log(`Это слово Полидром!`);
    } else {
        console.log(`Это слово не Полидром!`);
    }
    return outputTxt;
}

let inputTxt = prompt(`Введи слово, проверим, являеться ли оно полидромом`);
isPalindrome(inputTxt.toLowerCase());


// INFO: Денис я нашел функцию которая приравнивает весь текст к нижнему регисту(ну пока что, что позволяет моим знаниям)
// По этому добавил его чтоб при воде (Пример: 'Как') не выдавало не правильный ответ (что это не полидром)!!!
// Вот ссылка https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase