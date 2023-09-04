"use strict";
function findMissingLetter(array) {
    let arr = array.join('');
    for (let i = 0; i < arr.length; i++) {
        if (arr.charCodeAt(i + 1) - arr.charCodeAt(i) > 1) {
            return String.fromCharCode(arr.charCodeAt(i) + 1);
        }
    }
    return 'undefined';
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
