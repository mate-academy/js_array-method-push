'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...arg) {
    return this.push(...arg);
  };
}

module.exports = applyCustomPush;
