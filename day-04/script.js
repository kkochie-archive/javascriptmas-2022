/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
// Using splice and endsWith
const whisper = (str) =>
  str.endsWith("!")
    ? `shh... ${str.slice(0, -1).toLowerCase()}`
    : `shh... ${str.toLowerCase()}`

// Using replace but doesn't really apply because would replace all !, not just at end of sentence
const whisper2 = (str) => `shh... ${str.toLowerCase().replace("!", "")}`

console.log(whisper("PLEASE STOP SHOUTING."))
console.log(whisper("MA'AM, this is a Wendy's!"))

console.log(whisper2("PLEASE STOP SHOUTING."))
console.log(whisper2("MA'AM, this is a Wendy's!"))
