async function sequenceAsync(asyncFunctions) {
    let result = null;
  
    for (const asyncFunction of asyncFunctions) {
      result = await asyncFunction(result);
    }
  
    return result;
  }

  const asyncFunction1 = async (prevResult) => {
    console.log("Виконується функція 1 з попереднім результатом:", prevResult);
    return "Result from function 1";
  };
  
  const asyncFunction2 = async (prevResult) => {
    console.log("Виконується функція 2 з попереднім результатом:", prevResult);
    return "Result from function 2";
  };
  
  const asyncFunction3 = async (prevResult) => {
    console.log("Виконується функція 3 з попереднім результатом:", prevResult);
    return "Result from function 3";
  };
  
  const asyncFunctions = [asyncFunction1, asyncFunction2, asyncFunction3];
  
  sequenceAsync(asyncFunctions)
    .then(finalResult => {
      console.log("Кінцевий результат:", finalResult);
    })
    .catch(error => {
      console.error("Помилка:", error);
    });
  