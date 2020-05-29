'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const i in arguments) {
      this[this.length] = arguments[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
