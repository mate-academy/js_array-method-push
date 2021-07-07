'use strict';

/**
 * Implement method push
 */
function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    // для каждого элемента из ...elements
    for (const element of elements) {
      // this -это массив, для которого вызывается функция
      const length = this.length;
      // добавляем в конец массива новый элемент
      this[length] = element;
    }
    // возвращаем длину измененного массива
    return this.length;
  };
}

module.exports = applyCustomPush;
