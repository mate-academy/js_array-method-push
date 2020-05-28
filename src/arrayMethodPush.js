'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    let index = this.length;

    for (const element of elements) {
      this[index] = element;
      index++;
    }

    return this.length;
  };
}

// const source = [0, 1, 2, 3];

// console.log(source.push2(4));

module.exports = applyCustomPush;
