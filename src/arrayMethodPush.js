'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const newArr = [ ...elements ];

    for (let i = 0; i < newArr.length; i++) {
      this[this.length] = newArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
