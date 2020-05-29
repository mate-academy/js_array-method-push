'use strict';
/* eslint-disable */
/**
 * Implement method push
 */

function applyCustomPush() {
  [].__proto__.push2 = function(...elements) {
    for(let i = 0; i< elements.length; i++) {
      this[this.length] = elements[i];
    }
    return this.length;
  };
}

module.exports = applyCustomPush;

/*
function applyCustomPush(thisIS, ...elements) {
  for (const i in elements) {
    thisIS[thisIS.length] = elements[i];
  }
  return thisIS.length;
}
let a = [0, 1, 2, 3]; 
let a1 = [0, 1, 2, 3]; 
// let b = (4, 5, 6);
console.log(applyCustomPush(a, 4, 5, 6));
console.log("a", a)
console.log(a1.push(4, 5, 6));
// */
