function camelCase(str, separator) {

    if(!str || !separator) {
        return `Поля(е) не могут быть пустым(и).`;
    }
    
    let words = str.split(separator);
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

let str = prompt(`Введи свое слово(а):`);
let separator = prompt(`Введи символ(букву,цифру или пробел) по которому сделать сепорацию для CamelCase:`);

let camelCasedStr = camelCase(str, separator);
console.log(camelCasedStr);
