'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    elements.forEach((item) => {
      this[this.length] = item;
    });

    return this.length;
  };
}

module.exports = applyCustomPush;
