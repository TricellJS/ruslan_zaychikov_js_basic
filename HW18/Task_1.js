function sumArrayPromise(arr) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Array.isArray(arr)) {
          const sum = arr.reduce((acc, curr) => acc + curr, 0);
          resolve(sum);
        } else {
          reject(new Error("Входные данные не являются массивом"));
        }
      }, 3000);
    });
  }
  

  const numbers = [1, 2, 3, 4, 5];
  
  sumArrayPromise(numbers)
    .then(result => {
      console.log("Сума чисел c масива:", result);
    })
    .catch(error => {
      console.error("Ошибка:", error);
    });
  