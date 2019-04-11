'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    for (let arg of args) {
      /* next string is not required,
      but i try to teach my self working with variables */
      let len = this.length;
      this[len] = arg; // adding new element on position (lastIndex + 1)
    }
    // push method is required 'return statement' length of transformed array
    return this.length;
  };
}

module.exports = applyCustomPush;
