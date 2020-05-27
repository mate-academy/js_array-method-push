'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const pushedArray = Array.from(arguments);

    for (let i = 0; i < pushedArray.length; i++) {
      this[this.length] = pushedArray[i];
    }

    return this.length;
  };
}

module.exports = applyCustomPush;
