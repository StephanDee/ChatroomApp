/*
 * @Author: Stephan Dünkel 
 * @Date: 2019-07-15 16:57:26 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-15 16:58:28
 *
 * Some Tests
 */

 /**
  * Summing up two numbers.
  *
  * @param {*} a First number
  * @param {*} b Second number
  */
function sum(a, b) {
  return a + b;
}

/**
 * Testing sum() method.
 */
it("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
