'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    for (let arg = 0; arg < args.length; arg++) {
      this[this.length] = args[arg];
    }
    return this.length;
  };
}

module.exports = applyCustomPush;
