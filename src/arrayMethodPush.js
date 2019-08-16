'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    let length = 0;
    // eslint-disable-next-line no-unused-vars
    for (const item of this) {
      length++;
    }
    for (const element of elements) {
      this[length++] = element;
    }

    return length;
  };
}

module.exports = applyCustomPush;
