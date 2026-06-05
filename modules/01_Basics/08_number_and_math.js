const score = 400
const balance = new Number(400)
console.log(score)
console.log(balance)

console.log(balance.toString().length) // 3

/**
 * length is a property of a string, not a method. It returns the number of characters in the string and is accessed without parentheses (str.length). Methods like toUpperCase() and replace() are functions and are called with parentheses. Internally, JavaScript temporarily wraps primitive strings in a String object to provide access to these properties and methods.
 */

/**
 * String(value) is a global function that converts any value to a string and safely handles null and undefined. toString() is a method available on most objects and primitives, but it throws an error for null and undefined. Additionally, Number.prototype.toString() can convert numbers to different bases such as binary and hexadecimal.
 */

console.log(score.toFixed(2)) //400.00

const num1 = 123.3456789
console.log(num1.toPrecision(5))

/**
 * String.length is a read-only property. Strings in JavaScript are immutable, so neither their characters nor their length can be modified. Assignments like str.length = 0 have no effect (or may throw in strict mode). Arrays, however, have a writable length property, so arr.length = 0 empties the array.
 */



/***** MATH ******/

let hunderds = 100000000;
let local = hunderds.toLocaleString();
local = hunderds.toLocaleString('en-IN');
console.log(local)

let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
console.log(max)
console.log(min)

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(45.562))
console.log(Math.ceil(45.562))
console.log(Math.floor(45.562))
console.log(Math.sqrt(16))

let numbers = [4,5,6,7,8,9]
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

let minRand = 30
let maxRand = 40
let rand = Math.random();
rand = Math.floor ( (rand * (maxRand-minRand +1 )) + minRand )
console.log(`Random Number ${rand}`)