// let num = "22"
// let num = "22abc"
let num = ""
console.log(typeof num)
num = Number(num)
console.log(typeof num) // Number 
console.log(num) // 0 


/**
 * 22 => number
 * "22" => 22
 * "22abc" => NaN (type number)
 *  true = 1 ; false = 0 
 */


let isLoggedIn = "";
console.log(typeof isLoggedIn) // String
console.log(isLoggedIn) // blank
isLoggedIn = Boolean(isLoggedIn) 
console.log(typeof isLoggedIn) // Boolean
console.log(isLoggedIn) // false


let value = 1 
let negValue = -value
console.log(typeof negValue) // number
console.log(negValue) // -1

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4) -> 2 to the power 4
// console.log(2/2)
// console.log(2%3) -> modulus operator (remainder)

let num1 = 3
let num2 = num1++
console.log(num1, num2)
let a = 3
let b = ++a
console.log(a, b)

{
    console.log("testing here")
    let a = 80
    console.log(typeof a)
    // a = String(a)
    // a = BigInt(a)
    // a = Object(a)
    a = Boolean(a)
    console.log(typeof a)
    console.log(a)
}

/**
 * We can convert any data type to another data type using the following functions:
 * Number() => converts to number
 * String() => converts to string
 * Boolean() => converts to boolean
 * BigInt() => converts to bigint
 * Object() => converts to object
 */

/**
 * Scripting langugae:
Interpreted langugae. 
Dynamic Typing :
a varibale can store any data-type value. 
it is not restricted to a single data-type. 

Static typing:
A variable can store a single data-type value. 
Typescript is Static type. 



2 phase:
***1 Memory allocation phase:
In this phase, memory is allocated for all variables. Since we are using let, the variables are hoisted but kept in the Temporal Dead Zone (TDZ) until they are initialized.


***2 Code Execution phase:
JavaScript, being a single-threaded language, runs the code line by line.
 * 
 */
