'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const elem of elements) {
      this[this.length] = elem;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
