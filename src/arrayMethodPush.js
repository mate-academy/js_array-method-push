'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const arrParent = this;
    const PushToArr = function(a) {
      arrParent[arrParent.length] = a;
    };
    elements.forEach(PushToArr);
    return arrParent.length;
  };
}

module.exports = applyCustomPush;
