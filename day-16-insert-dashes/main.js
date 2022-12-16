/*
Insert Dashes
Transform a given sentence into a new one with dashes between each two consecutive letters.

Example:
For inputString = "aba caba", the output should be insertDashes(inputString) = "a-b-a c-a-b-a".

Hints:
• join()
• split()
*/

// Split words into array & add dashes in between each letter, then join words back into a string with a space.
function insertDashes(arr) {
  return arr.split(" ").map(word => [...word].join("-")).join(" ")
}

/**
* Test Suite 
*/
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";
      
      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});