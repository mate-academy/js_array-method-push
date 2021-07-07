'use strict';

/**
 * Implement method push
 */
const applyCustomPush = () => {
  [].__proto__.push2 = function(...elms) {
    for (const value of elms) {
      this[this.length] = value;
    }
    return this.length;
  };
};

module.exports = applyCustomPush;
