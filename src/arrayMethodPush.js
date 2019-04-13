'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (let arg = 0; arg < elements.length; arg++) {
      this[this.length] = elements[arg];
    }
    return this.length;
  };
}
module.exports = applyCustomPush;
