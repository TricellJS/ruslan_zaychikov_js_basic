function sequence(...functions) {
    return function(initialValue) {
        return functions.reduce((accumulator, currentFunction) => {
            return currentFunction(accumulator);
        }, initialValue);
    };
}

function double(x) {
    return x * 2;
}

function increment(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

const seqFn = sequence(increment, double, square);

console.log(seqFn(2)); // Выдаст 36: (2 + 1) * 2 * 2
