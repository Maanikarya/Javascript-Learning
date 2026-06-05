const name = "Maanik Arya"
const age = 24
const gender =  "Male"
console.log(`My name is ${name} and my age is ${age}, Gender: ${gender}`)

const str = new String("Maanik")

let output = name.charAt(1)
//  output = name.toUpperCase()
//  output = name.indexOf("a")
// output = name.substr(2,6). //treat negative as 0
// output = name.slice(2,2) // include negative numbers 
// output = name.trim()
output = name.replaceAll("a" , "9")
// output = name.includes("aanik")
// output = name.split(" ")
console.log(output)
