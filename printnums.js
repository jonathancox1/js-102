// for loop
function printNumbers(start, end) {
    for (let count = start; count <= end; count ++) {
        console.log(count);
    }
}

// while loop
function printNumbersWhile(start, end) {
    while (start <= end) {
        console.log(start);
        start ++;
    }
}


printNumbers(1, 10)
printNumbersWhile(1, 10)