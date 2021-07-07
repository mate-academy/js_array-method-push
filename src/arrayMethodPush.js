'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const e of elements) {
      this[this.length] = e;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
