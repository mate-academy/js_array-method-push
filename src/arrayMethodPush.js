'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    const arr = this;

    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];

      arr[arr.length] = item;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
