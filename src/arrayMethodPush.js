'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    const len = this.length;
    for (const element of elements) {
      this[len] = element;
    }
    return len;
  };
}

module.exports = applyCustomPush;
