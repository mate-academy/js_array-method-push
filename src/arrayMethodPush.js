'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const key of elements) {
      this[this.length++] = key;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
