'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }
    const result = this.length;
    return result;
  };
}

module.exports = applyCustomPush;
