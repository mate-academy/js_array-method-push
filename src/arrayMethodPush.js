'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    const arr = elements;
    if (this.length) {
      for (let i = 0; i < arr.length; i++) {
        this[this.length] = elements[i];
      }
    }
    return this.length ? this.length : undefined;
  };
}

module.exports = applyCustomPush;
