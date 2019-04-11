'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...theArgs) {
    // write code here
    for (let arg of theArgs) {
      this[this.length] = arg;
    }
    return this.length;
  };
}
module.exports = applyCustomPush;
// const numbers = [0, 1, 2, 3];
//  const newLength = numbers.push(4, 5, 6);
//  console.log(numbers); // [0, 1, 2, 3, 4, 5, 6];
//  console.log(newLength); // 7 - новая длинна массива
