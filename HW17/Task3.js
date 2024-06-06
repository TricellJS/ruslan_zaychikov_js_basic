
// РОМА ТУТ ВЫВОДИТСЯ РЕЗУЛЬТАТ ФУНКЦИЙ В "РЕЗУЛЬТАТ ФУНКЦИИ 1"

// function intervalRace(funcArray, t) {
//     const results = [];
//     let index = 0;
  
//     function runNext() {
//       if (index < funcArray.length) {
//         const result = funcArray[index]();
//         results.push(result);
//         index++;
//         setTimeout(runNext, t);
//       }
//     }
  
//     runNext();
  
//     return results;
//   }
  
//   function func1() {
//     console.log('Функция 1 выполнена');
//     return 'Результат функции 1';
//   }
  
//   function func2() {
//     console.log('Функция 2 выполнена');
//     return 'Результат функции 2';
//   }
  
//   function func3() {
//     console.log('Функция 3 выполнена');
//     return 'Результат функции 3';
//   }
  
//   const result = intervalRace([func1, func2, func3], 1000);
//   console.log(result);
  


// РОМ ТУТ ВЫВОДИТСЯ РЕЗУЛЬТАТ ФУНКЦИЙ ОТДЕЛЬНОЙ СТРОКОЙ (Я ПОДУМАЛ ТАК БУДЕТ КРАСИВЕЕ И ЛОГИЧНЕЕ)
function intervalRace(funcArray, t, callback) {
    const results = [];
    let index = 0;
  
    function runNext() {
      if (index < funcArray.length) {
        const result = funcArray[index]();
        results.push(result);
        index++;
        setTimeout(runNext, t);
      } else {
        callback(results);
      }
    }
  
    runNext();
  }
  
  // Пример использования:
  function func1() {
    console.log('Функция 1 выполнена');
    return 'Результат функции 1';
  }
  
  function func2() {
    console.log('Функция 2 выполнена');
    return 'Результат функции 2';
  }
  
  function func3() {
    console.log('Функция 3 выполнена');
    return 'Результат функции 3';
  }
  
  function printResults(results) {
    console.log('Результаты выполнения функций:', results);
  }
  
  intervalRace([func1, func2, func3], 1000, printResults);
  