'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const result = elements;
    let arr = this.length;
    for (let i = 0; i < result.length; i++) {
      this[arr] = result[i];
      arr++;
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
