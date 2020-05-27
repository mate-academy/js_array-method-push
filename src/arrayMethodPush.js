'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const elementsList = [...elements];
    const lastIndex = this.length;

    for (let i = 0; i < elementsList.length; i++) {
      this[lastIndex + i] = elementsList[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
