'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    const array = Array.from(arguments);

    for (let i = 0; i < array.length; i++) {
      this[this.length] = array[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
