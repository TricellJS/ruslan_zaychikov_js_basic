let num = +prompt(`Введи число:`);

if (num === 1 || num === 0) {
    console.log(`Число ${num} является ни простым, ни составным числом.`);
} else {
    let sum = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            sum = false;
            break;
        }
    }

    if (sum) {
        console.log(`Число ${num} является простым числом.`);
    } else {
        console.log(`Число ${num} относится к составным числам.`);
    }
}