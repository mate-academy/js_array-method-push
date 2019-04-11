'use strict';

/**
 * Implement method push
 *
 */
function applyCustomPush() {
  [].__proto__.push2 = function() {
    if (arguments.length) {
      for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
      }
      return this.length;
    } else {
      return this.length;
    }
  };
}

module.exports = applyCustomPush;
