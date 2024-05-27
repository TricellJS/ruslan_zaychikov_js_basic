function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function isPalindrome(num) {
    return num === reverseNumber(num);
}

function findPalindrome(number) {
    let steps = 0;
    let result = number;

    while (!isPalindrome(result)) {
        result += reverseNumber(result);
        steps++;

        if (steps > 1000) {
            return { result: "Не найдений палiдром", steps: steps };
        }
    }

    return { result: result, steps: steps };
}

console.log(findPalindrome(196));
