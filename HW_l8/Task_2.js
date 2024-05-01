function findCommonElements(array1, array2) {
    let commonElements = [];

    for (let element of array1) {
        if (array2.includes(element)) {
            commonElements.push(element);
        }
    }

    return commonElements;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2));
