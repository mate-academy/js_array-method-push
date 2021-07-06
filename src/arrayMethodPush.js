'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    for (const el of elements) {
      this[this.length] = el;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
