'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    let j = 0;
    for (let i = 0; i < arguments.length; i++) {
      this[i + this.length - j] = elements[i];
      j++;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
