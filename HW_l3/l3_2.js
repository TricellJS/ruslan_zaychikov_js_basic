let year = +prompt(`Введи год, чтобы узнать высокосный он или нет!`);

if (year === 0) {
    console.log(`${year} - это первый высокосный год.`);
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} - это высокосный год`);
} else {
    console.log(`${year} - это не высокосный год `);
}
