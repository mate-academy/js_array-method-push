'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (let index = 0; index < elements.length; index++) {
      this[this.length] = elements[index];
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
