'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const items = this;

    for (let i = 0; i < elements.length; i++) {
      items[items.length] = elements[i];
    }

    return items.length;
  };
}

module.exports = applyCustomPush;
