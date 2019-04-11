'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    // write code here
    for (let arg of args) {
      this[this.length] = arg;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
