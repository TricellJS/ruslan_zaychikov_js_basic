function analyzeArray(numbers) {

    let sum = 0;
    let min = numbers[0];
    let max = numbers[0];


    for (let number of numbers) {
        sum += number;
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }

    let average = sum / numbers.length;

    let analysisResult = {
        sum: sum,
        average: average,
        min: min,
        max: max
    };

    return analysisResult;
}

const numbers = [1, 2, 3, 4, 5];


console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
