async function* asyncGenerator(promises) {
    for (const promise of promises) {
      yield await promise;
    }
  }
  
  // Приклад використання:
  const promises = [
    new Promise(resolve => setTimeout(() => resolve('First'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Second'), 500)),
    new Promise(resolve => setTimeout(() => resolve('Third'), 1500))
  ];
  
  (async () => {
    for await (const result of asyncGenerator(promises)) {
      console.log(result);
    }
  })();
  