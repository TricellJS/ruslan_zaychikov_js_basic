function summarize(num) {
    const initialNum = typeof num === 'number' ? num : 1;

    return function(additionalNum = 1) { 
        return initialNum + additionalNum;
    };
}

const addFive = summarize(5);
console.log(addFive(3)); // Выдаст 8
console.log(addFive()); //Получим 6, поскольку аргумент не передан и по стандарту добавляется 1
