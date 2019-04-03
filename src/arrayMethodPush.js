'use strict';

/**
 * Implement method push
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */

function applyCustomPush() {
  [].__proto__.push2 = function(...args) {
    return this.push(...args);
  };
}

module.exports = applyCustomPush;
