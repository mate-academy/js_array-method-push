'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const pushed = this;
    const pushedLength = pushed.length;
    const toAdd = [...elements];

    for (let i = 0; i < toAdd.length; i++) {
      pushed[pushedLength + i] = toAdd[i];
    }

    return pushed.length;
  };
}

module.exports = applyCustomPush;
