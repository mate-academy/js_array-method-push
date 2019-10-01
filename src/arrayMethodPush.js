'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (const unit of elements) {
      this[this.length] = unit;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
