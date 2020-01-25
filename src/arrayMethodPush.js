'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const arrElements = [...elements];
    const arrLength = this.length;

    for (let i = 0; i < arrElements.length; i++) {
      const addIndex = i + arrLength;

      this[addIndex] = arrElements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
