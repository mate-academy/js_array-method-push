'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const mainArr = Array.from(this);
    const result = this;

    for (let i = 0; i < elements.length; i++) {
      result[i + mainArr.length] = elements[i];
    }

    return result.length;
  };
}

module.exports = applyCustomPush;
