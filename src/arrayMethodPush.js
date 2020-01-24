'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const items = elements;

    for (let i = 0; i < items.length; i++) {
      this.length += 1;
      this[this.length - 1] = items[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
