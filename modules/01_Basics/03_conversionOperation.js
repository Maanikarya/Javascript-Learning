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