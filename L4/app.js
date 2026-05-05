"use strict";
//! Function return type
function add(num1, num2) {
    return num1 + num2; //  return 30
}
// console.log(add(10,20));
function greet(name) {
    console.log(`Hi, ${name}`);
}
// let combineFunction : Function;
// combineFunction = 10; // invalid
// combineFunction = function(){}; valid
// combineFunction = add; // valid
// combineFunction = greet;
// console.log(combineFunction(1,2));
// Good Practice
let combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
function addHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
});
