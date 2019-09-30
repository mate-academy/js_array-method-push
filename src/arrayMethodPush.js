'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const value of elements) {
      const position = this.length;
      this[position] = value;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
