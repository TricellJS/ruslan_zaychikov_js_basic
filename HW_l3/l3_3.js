let yearStr = prompt('Ваш год рождения:');
let year = parseInt(yearStr);
let currentYear = 2024;

if (!isNaN(year) && yearStr !== '' && year <= currentYear && year >= 0) {
    
    let age = currentYear - year;
    let ageTxt;

    if (age % 10 === 1 && age % 100 !== 11) {
        ageTxt = 'год';
    } else if ((age % 10 === 2 || age % 10 === 3 || age % 10 === 4) && (age % 100 < 10 || age % 100 > 20)) {
        ageTxt = 'года';
    } else {
        ageTxt = 'лет';
    }

    console.log(`Ты ${year} года рождения и тебе ${age} ${ageTxt}`);
} else {
    console.log('Введен некорректный год рождения');
}