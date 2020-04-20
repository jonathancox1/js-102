// print a hollow box

function printBox(width, height) {
    let full = '*'.repeat(width);
    console.log(full);
    let empty = ' '.repeat(width - 2);
    while (height > 2) {
        console.log('*' + empty + '*');
        height --;
    }
    console.log(full);
}


printBox(1, 1);