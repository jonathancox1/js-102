// sumNumbers([1, 4, 8])
// returns 13

function sumNumbers(arr) {
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}

sumNumbers([1, 4, 8, 1, 1, 1]);