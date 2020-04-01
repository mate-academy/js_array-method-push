'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    const myLength = this.length;

    for (let i = 0; i < arguments.length; i++) {
      this[i + myLength] = arguments[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
