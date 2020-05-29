'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const pushedArrLength = arguments.length + this.length;

    const j = this.length;

    for (let i = this.length; i < pushedArrLength; i++) {
      this[i] = elements[i - j];
    }

    return pushedArrLength;
  };
}

module.exports = applyCustomPush;
