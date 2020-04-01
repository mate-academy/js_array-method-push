'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const value of elements) {
      this[this.length] = value;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
