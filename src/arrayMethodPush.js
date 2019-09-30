'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      const startLength = this.length;
      this[startLength] = elements[i];
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
