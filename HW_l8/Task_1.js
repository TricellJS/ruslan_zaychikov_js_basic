function capitalizeStrings(words) {

    let capitalizedWords = [];

    for (let word of words) {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords;
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]