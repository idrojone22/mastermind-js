let array = [0, 1, 2, 3];
let n = 2;
function multiplicar(array, n) {
    for (let i of array) {
        console.log(array[i] * n);
    }
}

multiplicar(array, n);