function validate(fn, validator) {
    return function(...args) {
      if (validator(args)) {
        return fn.apply(this, args);
      } else {
        throw new Error('Arguments validation failed');
      }
    }
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function validateArgs(args) {
    return args.every(arg => typeof arg === 'number');
  }
  
  const validatedAdd = validate(add, validateArgs);
  console.log(validatedAdd(2, 3)); // Результат: 5
  // console.log(validatedAdd(2, '3')); // Викидає виняток, оскільки '3' не є числом
  