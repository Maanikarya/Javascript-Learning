// let num = "22"
// let num = "22abc"
let num = ""
console.log(typeof num)
num = Number(num)
console.log(typeof num)
console.log(num)


/**
 * 22 => number
 * "22" => 22
 * "22abc" => NaN (type number)
 *  true = 1 ; false = 0 
 */


let isLoggedIn = "";
console.log(typeof isLoggedIn)
console.log(isLoggedIn)
isLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(isLoggedIn)


let value = 1
let negValue = -value
console.log(typeof negValue)
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)
// console.log(2/2)
// console.log(2%3)

let num1 = 3
let num2 = num1++
console.log(num1, num2)
let a = 3
let b = ++a
console.log(a, b)
