function logArguments(fn) {
    return function(...args) {
      console.log('Arguments:', args);
      return fn.apply(this, args);
    }
  }
  
  // Приклад використання:
  function add(a, b) {
    return a + b;
  }
  
  const loggedAdd = logArguments(add);
  console.log(loggedAdd(2, 3));
  