/*** Date *****/
const date = new Date();

console.log(date , typeof date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.getMonth())

const myCreatedDate = new Date(2002,10,27,18,2)
console.log(myCreatedDate.toLocaleString())

const myCreatedDate2 = new Date('2002-11-27')
console.log(myCreatedDate2.toLocaleString())

const myCreatedDate3 = new Date('01-27-2026')
console.log(myCreatedDate3.toLocaleString())

/**** Time Stamp  */
let timestamp = Date.now() // miliseconds
console.log(timestamp)
console.log(Math.floor(timestamp/1000)) // Seconds

console.log(myCreatedDate3.getTime())

console.log(myCreatedDate3.toString())
console.log(myCreatedDate3.getDate())
console.log(myCreatedDate3.getMonth())
console.log(myCreatedDate3.getDay())

console.log(myCreatedDate3.toLocaleString('default',{
    weekday:"short"
}))