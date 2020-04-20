// factor the number

function fact(num) {
    let results = [];
    for (let count = 1; count <= num; count++) {
        if (num % count == 0) {
            results.push(count);
        }
    }
    console.log(results);
}


fact(24);
fact(100);