'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const arr = this;

    for (const item of elements) {
      arr[arr.length] = item;
    }

    return arr.length;
  };
}

module.exports = applyCustomPush;
