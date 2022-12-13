/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

// Split string up into array and if one element, return str in uppercase with !. Otherwise, join array together with 😱 emoji between each word, uppercase with exclamation point.

const panic = (str) =>
  str.split(" ").length === 1
    ? str.toUpperCase() + "!"
    : str.toUpperCase().split(" ").join(" 😱 ") + "!"

// Test your function
console.log(panic("I'm almost out of coffee"))
console.log(panic("winter is coming"))
console.log(panic("Hello"))
