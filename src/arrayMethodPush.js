'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    // write code here
    for (let element of args) {
      this[this.length] = element;
    };
    return this.length;
  };
}

module.exports = applyCustomPush;
