'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    this.splice(this.length, 0, ...args);
    return this.length;
  };
}

module.exports = applyCustomPush;
