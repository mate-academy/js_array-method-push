'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const n = arguments.length;

    for (let i = 0; i < n; i++) {
      this[this.length] = arguments[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
