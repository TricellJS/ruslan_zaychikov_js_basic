function uniqueValues(arr1, arr2) {
    const conCat = arr1.concat(arr2);
    const uniqueArray = [];

    for (let i = 0; i < conCat.length; i++) {
        const currentValue = conCat[i];
        if (uniqueArray.indexOf(currentValue) === -1) {
            uniqueArray.push(currentValue);
        }
    }
    
    return uniqueArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
