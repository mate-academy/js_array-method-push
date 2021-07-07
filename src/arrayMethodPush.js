'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for (let item = 0; item < elements.length; item++) {
      const arrLastInd = this.length;
      const arr = this;
      arr[arrLastInd] = elements[item];
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
