'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const add = [...elements];
    const step = this.length;
    for (let i = 0; i < add.length; i++) {
      this[(step) + i] = add[i];
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
