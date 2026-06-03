/**
 * Primitive and Non-Primitive Data Types in JavaScript
 */

// Primitive Data Types (Call by Value)
// Number
// BigInt
// String
// Boolean
// Undefined
// Null
// Symbol

// Non-Primitive Data Types (Call by Reference)
// Object
// Array
// Function
// Date
// RegExp
// Map
// Set 

// Javascript is Dynamically Typed, which means that variables can hold values of any type and the type can change at runtime. It is also a loosely typed language, which means that you don't have to declare the type of a variable explicitly.

// Typescript is a superset of JavaScript that adds static typing to the language. It allows developers to specify the types of variables, function parameters, and return values, which can help catch errors at compile time and improve code readability.

const score = 100; // Number
const name = "John"; // String
const isActive = true; // Boolean
const outsideTemprature = null; // Null
let address; // Undefined
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

const id = Symbol('123'); // Symbol
const anotherid = Symbol('123'); // Symbol

// console.log(id)
// console.log(anotherid)
// console.log(id == anotherid)

/** Arryas */

const hero = ["shaktiman", "nagraj", "doga", "dabang"];
let myObj = {
    name: "Maanik Arya",
    age: 27,
    place : "Delhi",
    insideObj : {
        subname : "Maanik",
    },
    displayName : function(){
        return this.name
    }
}

function getName(name){
    console.log(name)
}

console.log("Output:- ")
console.log(typeof getName)
console.log(typeof hero)
console.log(typeof myObj)



