//Це для простих чисел.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); // Виведе 8 (п'яте число Фібоначчі)
 

// Цей код для бiль складних чисел

function fibonacci(n, memo = {}) {
    if (n <= 1) {
        return n;
    }
    
    if (memo[n]) {
        return memo[n];
    } else {
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
}

console.log(fibonacci(6)); // Виведе 8 (п'яте число Фібоначчі)
