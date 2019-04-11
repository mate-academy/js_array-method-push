'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    for (let value of args) {
      this[this.length] = value;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
