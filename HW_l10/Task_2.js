function memoize(fn, limit) {
  const cache = new Map(); 
  const seen = new Set(); 

  return function (...args) {
      const key = JSON.stringify(args); 

      if (cache.has(key)) {
          return cache.get(key); 
      }

      const result = fn.apply(this, args); 

      // Перевірка обмеження кешу
      if (cache.size >= limit) {
          const firstKey = Array.from(cache.keys())[0];
          cache.delete(firstKey); 
          seen.delete(firstKey); 
      }
      
     
      if (!seen.has(key)) {
          seen.add(key);
          cache.set(key, result);
      }

      return result; 
  };
}



function add(a, b) {
  console.log("Adding", a, "and", b);
  return a + b;
}

const memoizedAdd = memoize(add, 2); 

console.log(memoizedAdd(2, 3)); // Виклик функції
console.log(memoizedAdd(2, 3)); // Результат вже є в кеші, поверне його
console.log(memoizedAdd(4, 5)); // Виклик функції
console.log(memoizedAdd(6, 7)); // Виклик функції
console.log(memoizedAdd(4, 5)); // Результат вже є в кеші, поверне його

  
 
  