'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const arrayLength = this.length;

    for (let i = 0; i < elements.length; i++) {
      this[arrayLength + i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
