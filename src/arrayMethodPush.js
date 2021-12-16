'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (let i = 0; i < elements.length; i += 1) {
      this[this.length] = elements[i];
    }

    return this.length;
  };
}
applyCustomPush();
module.exports = applyCustomPush;
