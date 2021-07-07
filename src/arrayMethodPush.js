'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const arr = this;

    for (let i = 0; i < elements.length; i++) {
      arr[arr.length] = elements[i];
    }

    return arr.length;
  };
}

module.exports = applyCustomPush;
