'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const i of arguments) {
      this[this.length] = i;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
