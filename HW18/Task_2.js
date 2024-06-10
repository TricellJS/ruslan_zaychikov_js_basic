function concurrentPromises(promises, maxConcurrency) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject(new Error("Input is not an array of promises"));
        return;
      }
  
      const results = [];
      let runningPromises = 0;
      let index = 0;
  
      function runNextPromise() {
        if (index >= promises.length && runningPromises === 0) {
          resolve(results);
          return;
        }
  
        if (index < promises.length && runningPromises < maxConcurrency) {
          const promise = promises[index];
          index++;
  
          promise.then(result => {
            results.push(result);
          }).catch(error => {
            results.push(error);
          }).finally(() => {
            runningPromises--;
            runNextPromise();
          });
  
          runningPromises++;
        }
      }
  
      runNextPromise();
    });
  }
  
  // Приклад використання:
  concurrentPromises([
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))
  ], 2).then(console.log);
  