'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    let addedIndex = this.length;

    for (let i = 0; i < elements.length; i++) {
      this[addedIndex] = elements[i];
      addedIndex++;
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
