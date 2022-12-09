/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/
// Split string into array. If index is odd, make with .toUpperCase(); if even, make .toLowerCase(). Join into new string.

function altCaps(str) {
  return str
    .split("")
    .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("")
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"))

/* Iteration
function altCaps(str){
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        i % 2 === 0 ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase();
    }
    return newStr;
}
*/
