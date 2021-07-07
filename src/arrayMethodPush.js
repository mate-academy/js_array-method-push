'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const keyVal of elements) {
      const len = this.length;
      this[len] = keyVal;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
