let num = +prompt(`Укажите пожалуйста число!`);

if ( num % 3 === 0 && num % 5 === 0) {
    console.log (`FizzBuzz`);
} else if (num % 3 === 0){
    console.log (`Fizz`);
} else if(num % 5 === 0){
    console.log(`Buzz`);
} else {
    console.log(`Ты указал чтсло ${num}, а оно не делится ни на 3, ни на 5 =(`);
}
