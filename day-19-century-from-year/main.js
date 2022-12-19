/*
Century From Year

Given a year, return the century it is in. The first century spans from year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example:
• For year = 1905, the output should be centuryFromYear(year) = 20
• For year = 1700, the output should be centuryFromYear(year) = 17

Hints:
• Math.floor()
*/
// If number ends in 00, round number down, convert to string, slice off first two digits and convert back to Integer; else add 100 to num before other actions.

// Using Math.floor()
function centuryFromYear(num) {
  const year = Math.floor(num/100)  // Round down number
  return (num/100 - year > 0) ? year + 1 : year // If remainder > 0 add 1 to year; else return year
}

// One-line with Math.ceil()
const centuryFromYear1 = (num) => Math.ceil(num / 100)


/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
  it('returns current century', () => {
      // arrange
      const year = 1905;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 1: ", result);
      
      // assert
      expect(result).toBe(20);
  });
  
  it('returns current century for edge case of start of century', () => {
      // arrange
      const year = 1700;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 2: ", result);
      
      // assert
      expect(result).toBe(17);
  });    
});