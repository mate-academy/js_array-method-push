'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    return this.push(...args);
  };
}

module.exports = applyCustomPush;
