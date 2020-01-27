'use strict';

/**
 * Implement method push
 **/
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const argLength = elements.length;

    for (let i = 0; i < argLength; i++) {
      this[this.length] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
