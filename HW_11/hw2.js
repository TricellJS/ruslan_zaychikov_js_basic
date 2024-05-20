function counter(startValue, step) {
    let count = startValue;

    function increment() {
        count += step;
        return count;
    }

    function decrement() {
        count -= step;
        return count;
    }

    function reset() {
        count = startValue;
        return count;
    }

    return {
        increment,
        decrement,
        reset
    };
}


const myCounter = counter(0, 1);
console.log(myCounter.increment()); // Выведет 1
console.log(myCounter.increment()); // Выведет 2
console.log(myCounter.decrement()); // Выведет 1
console.log(myCounter.reset());     // Выведет 0
