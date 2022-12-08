/* 
Valid Time

Check if the given string is a correct time representation of the 24-hour clock.

Example:
• For time = "13:58", the output should be validTime(time) = true;
• For time = "25:51", the output should be validTime(time) = false;
• For time = "02:76", the output should be validTime(time) = false.

Hints:
• parse(Int)
• split()

*/

//Split str at : for two different numbers and convert to Integers. Check if element at [0] is between 00-24 and if element [1] is between 00-60. If so, return true

function validTime(str) {
  const [hours, mins] = str.split(":").map((num) => parseInt(num))
  return hours >= 0 && hours < 24 && mins >= 0 && mins < 60 ? true : false
}

/**
 * Test Suite
 */
describe("validTime()", () => {
  it("returns true for valid time", () => {
    // arrange
    const str = "13:58"

    // act
    const result = validTime(str)

    // log
    console.log("result 1: ", result)

    // assert
    expect(result).toBe(true)
  })

  it("returns false when invalid hours", () => {
    // arrange
    const str = "25:51"

    // act
    const result = validTime(str)

    // log
    console.log("result 1: ", result)

    // assert
    expect(result).toBe(false)
  })

  it("returns false when invalid minutes", () => {
    // arrange
    const str = "02:76"

    // act
    const result = validTime(str)

    // log
    console.log("result 1: ", result)

    // assert
    expect(result).toBe(false)
  })
})
