'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    // write code here
  };
}

module.exports = applyCustomPush;
