'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    for (let arg of args) {
      this[this.length] = arg;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
