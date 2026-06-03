/** Comparison Operators */
console.log("Comparison Operators");
console.log("2" > 1); // true
console.log("01" == 1); // true
console.log("01a" === 1); // false

/**** NULL comparision */
console.log("*****NULL COMPARISION*****")
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true : because null is converted to 0 and 0 >= 0 is true.

/**** UNDEFINED comparision */
console.log("*****UNDEFINED COMPARISION*****")
console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false : because undefined is converted to NaN and NaN >= 0 is false.

/** === strict equality */
console.log("*****STRICT EQUALITY*****")
console.log(null === 0) // false
console.log(undefined === 0) // false
console.log("2" === 2) // false : because === does not perform type coercion, it checks both value and type. "2" is a string and 2 is a number, so they are not strictly equal.
