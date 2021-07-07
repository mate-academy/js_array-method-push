'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const addLenght = elements.length;
    const thisStartLenght = this.length;

    this.length = this.length + addLenght;

    for (let i = 0; i < thisStartLenght - 1; i++) {
      this[i] = this[i];
    }

    for (let i = thisStartLenght; i < this.length; i++) {
      this[i] = elements[i - thisStartLenght];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
