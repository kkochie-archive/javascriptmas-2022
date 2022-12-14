/*
You are given a string s that consists of only lowercase English letters. If vowel ('a', 'e', 'i', 'o', 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all the letters in the input string.

Example:
• For s = "abcde", the output should be countVowelConsonant(s) = 8

Hints:
• split()
• reduce()

Notes:
Split string up into array. For each element, assign value of either 1 or 2 depending on if vowel or not into a new array. Then return the sum of new array.
*/

// Using spread operator to break up string into array, reduce() with regex test()
function countVowelConsonant(str) {
  return [...str].reduce((sum, el) => /[aeiou]/.test(el) ? sum + 1 : sum + 2, 0)
}


// Using spread operator, reduce() and indexOf()
function countVowelConsonant1(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return [...str].reduce((sum, el) => vowels.indexOf(el) >= 0 ? sum += 1 : sum += 2, 0)
}

// Using Iteration and split()
function countVowelConsonant2(str) {
  const vowels = 'aeiou'
  let sum = 0
  str = str.split('')
  
  for (let i = 0; i < str.length; i++) {
    vowels.includes(str[i]) ? sum += 1 : sum += 2
  }
  return sum
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});