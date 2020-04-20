// print a banner

function printBanner(text) {
    let full = '*'.repeat((text.length) + 4);
    console.log(full);
    console.log('* ' + text + ' *');
    console.log(full);
}

printBanner("Welcome to DigitalCrafts");