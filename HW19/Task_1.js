function* fibonacci(n) {
    let a = 0;
    let b = 1;
    let count = 0;
    while (count < n) {
      yield a;
      [a, b] = [b, a + b];
      count++;
    }
  }
  
  const fibGen = fibonacci(10); 
  for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
  }
