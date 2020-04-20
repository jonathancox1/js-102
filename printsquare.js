// print a square
function printSquare(num) {
    let line = '*'.repeat(num);
    while (num > 0) {
        console.log(line);
        num --;
    }
}

printSquare(5);
printSquare(12);