// ceaser cipher

function cipher(string, offset) {
    let lowerString = string.toLowerCase();
    // converts string into idividual array elements
    let stringArray = lowerString.split("");
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // converts the string into individual array elements
    let alpha = alphabet.split("");
    // splits the alphabet at the offset
    let front = alpha.slice(0, (offset));
    let back = alpha.slice((offset));
    // rearranges alphabet to be the offset
    let ceaser = [...back, ...front];
    let deciphered = [];


    for (let count = 0; count < stringArray.length; count++) {
        let position = alpha.indexOf(stringArray[count]);
        deciphered.push(ceaser[position]);
        // console.log(deciphered);
    }

    console.log(deciphered.join(""));
}


cipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);