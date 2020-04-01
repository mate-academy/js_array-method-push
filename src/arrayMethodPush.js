'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const array = [...elements];
    const count = this.length;

    for (let i = count; i < count + array.length; i++) {
      this[i] = array[i - count];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
