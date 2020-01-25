'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const items of elements) {
      this[this.length] = items;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
