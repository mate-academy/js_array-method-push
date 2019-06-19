'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    for (const element of elements) {
      this[this.length] = element;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
