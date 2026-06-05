// Array :
// () - Paranthesis ; {} - curly braces ; [] - square bracket

// const arr1 = [];
const arr2 = [
    1,
    2,
    3,
    "Maanik",
    {
        name : "Maanik",
        age: 24
    }
];


arr2.push(26)
let obj1 = {
    testing : "yes"
}
arr2.push(obj1)

// arr2.pop()
// arr2.unshift(1111)
// arr2.shift()

// console.log(arr2.includes(obj1)) // true or false
// console.log(arr2.indexOf(obj1)) // Print the index
// console.log(arr2.join())
// console.log(typeof(arr2.join()))// convert into string

// Slice and Splice
const arr1 = [1,2,3,4,5,6]
console.log(`A: ${arr1}`)
let output = arr1.slice(0,4)
console.log(`output : ${output}`)
console.log(`B: ${arr1}`)
output = arr1.splice(0,4)
console.log(`output : ${output}`)
console.log(`c: ${arr1}`)

// Find it is array or not. 
let num1 = 0
console.log(`IsArray ${Array.isArray(num1)}`)

// Concatenation of Array
const myarr1 = [1,2,3,4,5,6]
const myarr2 = [7,8,9,10]
console.log("A" ,myarr1)
// Method 1 using Push
// myarr1.push(myarr2)
// console.log(myarr1)
// Method 2 using concat - return new array
let finalarr = myarr1.concat(myarr2)
// Method 3 using spread operator
let spreadfinal = [...myarr1,...myarr2]

console.log(`finalarr: ${finalarr}`)
console.log(`spreadfinal: ${spreadfinal}`)

