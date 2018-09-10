import addToDOM from './add_to_dom';
// import {
//     add,
//     substract,
//     multiply,
//     divide
// } from './math';
import * as math from './math';
//import str, {subtract} as math from './math';
//import default (in this case name it str) and some function with names.
//default does not need {}

addToDOM('h1', 'This is some texts!');

// addToDOM('h2', `52 - 10 = ${add(52,10)}`);
// addToDOM('h2', `52 - 10 = ${substract(52,10)}`);
// addToDOM('h2', `52 - 10 = ${multiply(52,10)}`);
// addToDOM('h2', `52 - 10 = ${divide(52,10)}`);

addToDOM('h2', `52 - 10 = ${math.add(52,10)}`);
addToDOM('h2', `52 - 10 = ${math.substract(52,10)}`);
addToDOM('h2', `52 - 10 = ${math.multiply(52,10)}`);
addToDOM('h2', `52 - 10 = ${math.divide(52,10)}`);

console.log("math:", math);