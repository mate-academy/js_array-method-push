'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...array) {
    for (let item of array) {
      this[this.length] = item;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
