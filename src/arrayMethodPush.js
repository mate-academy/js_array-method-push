'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // write code here
    elements.forEach(element => {
      this[this.length] = element;
    });
    return this.length;
  };
}

module.exports = applyCustomPush;
