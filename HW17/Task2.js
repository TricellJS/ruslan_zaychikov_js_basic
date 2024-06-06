function debounce(callback, delay) {
    let timeoutId;
  
    return function() {
      const context = this;
      const args = arguments;
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback.apply(context, args);
      }, delay);
    };
  }
  

  const expensiveOperation = () => console.log("Виконую складну операцію...");
  const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

  debouncedExpensiveOperation();
  debouncedExpensiveOperation();
  debouncedExpensiveOperation();
  
  // Через 1 секунду после последнего вызова будет выведено сообщение "Виконую складну операцію..." только один раз.
  