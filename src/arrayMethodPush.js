'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const index of elements) {
      this[this.length] = index;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
