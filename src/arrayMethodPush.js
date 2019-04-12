'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
    }
    console.log(this);
    console.log(this.length);
    return this.length;
  };
}

module.exports = applyCustomPush;
