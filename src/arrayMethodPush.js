'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (let item of elements) {
      this[this.length] = item;
    }
    
    return this.length;
  };
}

module.exports = applyCustomPush;
