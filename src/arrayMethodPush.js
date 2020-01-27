'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const lengthInitial = this.length;

    for (let i = 0; i < elements.length; i++) {
      this[lengthInitial + i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
