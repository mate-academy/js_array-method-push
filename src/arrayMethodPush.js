'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const lastIndex = this.length;
    this.splice(lastIndex, 0, ...elements);
    return this.length;
  };
}

module.exports = applyCustomPush;
