'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const items = [...elements];

    for (let i = 0; i < items.length; i++) {
      this[this.length] = items[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
