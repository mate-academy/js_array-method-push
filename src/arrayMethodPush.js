'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const list = [...elements];

    for (let i = 0; i < list.length; i++) {
      this[this.length] = list[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
