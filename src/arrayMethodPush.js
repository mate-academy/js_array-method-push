'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const i of elements) {
      const lengthOfArray = this.length;
      this.splice(lengthOfArray, 1, i);
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
