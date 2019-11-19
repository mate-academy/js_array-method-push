'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const arg of elements) {
      this[this.length] = arg;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
