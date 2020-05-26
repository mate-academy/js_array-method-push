'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const originalLength = this.length;

    for (let i = 0; i < elements.length; i++) {
      this[i + originalLength] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
