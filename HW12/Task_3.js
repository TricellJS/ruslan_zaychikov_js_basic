function retry(fn, maxAttempts) {
    return function(...args) {
      let attempts = 0;
      let lastError = null;
      
      while (attempts < maxAttempts) {
        try {
          return fn.apply(this, args);
        } catch (error) {
          attempts++;
          lastError = error;
        }
      }
      
      throw lastError;
    }
  }
  
  function unreliableFunction() {
    if (Math.random() < 0.5) {
      throw new Error('Random error occurred');
    } else {
      return 'Success';
    }
  }
  
  const retryUnreliableFunction = retry(unreliableFunction, 3);
  console.log(retryUnreliableFunction()); // Може вивести або 'Success', або викинути помилку після 3 спроб
  