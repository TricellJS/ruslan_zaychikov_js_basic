let num = +prompt(`Укажи число:`);
console.log(`Совершенное число от 1 до ${num}:`);

for (let i = 1; i <= num; i++) {
    let perfectNum = 0;
    for (let k = 1; k < i; k++){
        if (i % k === 0) {
            perfectNum += k;
        }
    }
    if (perfectNum === i) {
        console.log("Число:", i);
    }
}


