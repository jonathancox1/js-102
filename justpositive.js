// positiveNumbers([1, -3, 5, -3, 0])
// returns [1, 5, 0]

function positiveNumnbers(arr) {
    positives = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positives.push(arr[i]);
        }
    }
    console.log(positives);
}

positiveNumnbers([1, -3, 5, -3, 0])