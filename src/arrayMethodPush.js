'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    const element = elements;
    let pushLenght = this.reverse();

    for (let i = 0; i < element.length; i++) {
      pushLenght = this.unshift(element[i]);
    }

    this.reverse();

    if (element.length === 0) {
      return pushLenght.length;
    }

    return pushLenght;
  };
}

module.exports = applyCustomPush;
