'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    // write code here
    for (let key of args) {
      this[this.length] = key;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
