function generatePermutations(arr) {
    const result = [];

    function permute(array, permutation = []) {
        if (array.length === 0) {
            result.push(permutation);
            return;
        }

        for (let i = 0; i < array.length; i++) {
            const newArray = array.slice(0, i).concat(array.slice(i + 1));
            const newPermutation = permutation.concat(array[i]);
            permute(newArray, newPermutation);
        }
    }

    permute(arr);
    return result;
}

console.log(generatePermutations([1, 2, 3]));
