'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    const length = this.length;
    for (let i = 0; i < elements.length; i++) {
      this[length + i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
