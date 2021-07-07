'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    this.splice(this.length, elements.length, ...elements);
    return this.length;
  };
}

module.exports = applyCustomPush;
