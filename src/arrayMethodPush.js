'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const el of elements) {
      this[this.length] = el;
    }
    return this.length;
    // write code here
  };
}

module.exports = applyCustomPush;
