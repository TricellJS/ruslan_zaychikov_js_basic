function* flatten(arr) {
    for (let element of arr) {
      if (Array.isArray(element)) {
        yield* flatten(element);
      } else {
        yield element;
      }
    }
  }
  
  const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
  const flattenGen = flatten(nestedArr);
  
  console.log([...flattenGen]);
  