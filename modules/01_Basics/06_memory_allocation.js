// Stack(primitive) , Heap (Non-Primitive)

let num1 = 20
let num2 = 20 

let obj1 = {
    name : "Maanik",
    age : 20
}

console.log(obj1)
let obj2 = obj1
obj2.name = "Ujjwal"
obj2['age'] =  25
console.log(obj1)

/**
 * Stack vs Heap in JavaScript

In JavaScript, memory is mainly divided into Stack and Heap.

Stack Memory is used for primitive data types like number, string, boolean, null, undefined, symbol, and bigint. It stores actual values and works in a LIFO (Last In First Out) manner. Access is fast and memory is managed automatically.

Heap Memory is used for non-primitive data types like objects, arrays, and functions. It stores data dynamically, and variables hold references (addresses) to this data instead of the actual value.

Primitive vs Non-Primitive:

Primitive → Stored in Stack → Passed by value
Non-Primitive → Stored in Heap → Passed by reference (reference value)

Call by Value vs Call by Reference:

In call by value, a copy of the variable is passed, so changes do not affect the original variable.
In call by reference, a reference to the original object is passed, so changes affect the original data.

Note: JavaScript is technically call by value, but for objects, the reference value is passed, which behaves like call by reference.
 * 
 * 
 */

console.log("********* TESTING FUNCITONS *******")
function getName(name){
    console.log(`My name is ${name}`)
}
let test = getName;
console.log(test)
test()