
// Introductions
// Reusable block of code
// Write once, use many times

// Function VS Arguments
function greet(name){ // Params
    // Code 
}
greet('Maanik') // Arguments

// #1 If function not return any data then JS automatically return undefine by the function
function getName(){
    // console.log("Maanik Arya");
}

let output = getName();
// console.log(output) 




// #2 REST and SPREAD operator
// 1. Spread Operator (...)
// Spread expands an array, object, or iterable into individual elements.

let arr1 = [1,2,3,4,5,6];
let arr2 = [40,50,60]
let arr3 = [...arr1,...arr2];
// COPYING OBJECT
const userDetails = {
    name:"Maanik",
    age:24
}
const userAddress = {
    street:"453,33",
    city:"Badarpur,New Delhi"
}
const user = {...userDetails,...userAddress}

//2. Rest Operator (...)
// Rest collects multiple values into a single array.

// FUNCTION PARAMS
function getSum(...numbers){
    if(Array.isArray(numbers)){
        let result = 0;
        numbers.forEach((value) => {
            result += value
        });
        return result;
    }
}

// console.log(getSum(1,2,3,4,5))

// ARRAY DESTRUCTING - we use REST operator
const numbers = [10,20,30,40,50];
const [first,second,...rest] = numbers
// console.log(first);
// console.log(second);
// console.log(third);

// OBJECT DESTRUCTING
const userFb = {
    name:"MAANIK",
    age:23,
    dob:"27-11-2002",
    greet: function(){
        console.log(`This is the username: ${this.name}`);
    },
    greetAgain: () => {
        console.log(`This is the AGAIN username: ${this.name}`);
    },
}
const {name:NAAM, ...restObj} = userFb
// console.log(NAAM);
// console.log(restObj);
// userFb.greetAgain()



// #3 Closures
// A Closure in JavaScript is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.
// Voh functions joh ek inner function ko return karein aur inner function use any varible of outer function
function outer(){
    const username = "Maanik";
    function inner(){
        return `Your username is below: ${username}`
    }
    return inner;
}

let data = outer();
// console.log(data());




// #5 FUNCTION EXPRESSION  and Anonymous Functions
const getExp = function(){
    console.log(`This is function Expression`);
}
// getExp()

// Anonymous Function as a Callback (without name funcitons)
setTimeout(function() {
    // console.log("Executed after 2 seconds");
}, 2000);

// Anonymous Function with Array Methods
const annyArr = [1,2,3,4,5,6]
annyArr.forEach(function(value){
    // console.log(value);
});

// Anonymous Function with params
const add = function(a, b) {
    return a() + b();
};

let result = add(function(){return 20}, function(){return 10 - 5});
// console.log(result);

// Immediately Invoked Function Expression (IIFE) - Anonymous functions are often used in IIFEs.
(function(){
    // console.log("Maanik");
})();






// #6 Arrow function
// Arrow functions were introduced in ES6 (2015) to provide a shorter syntax for writing functions.

const arrowFun = (param1, param2)=>{
    return param1+param2;
}

// Single Parameter - arrow function
const singleParamFunc = param1 => {
    return param1 * param1;
}

// Single Line return 
const singleLineFunct = param1 => (param1 * param1);
const singleLineFunctObj = param1 => ({name:param1});
// console.log(singleLineFunctObj("Testing name"));


// IMPORTANT:
// Arrow functions do not create their own this.
// They inherit this from their surrounding scope (lexical scope).

// Example : 1
function person(){
    this.age = 500;
    const arrowFun = () => {
        console.log("Age is" , this.age);
    }
    arrowFun();
}

// person();

// Example 2: 
const objData = {
    name:'Maanik Arya',
    age: 20,
    getName: function(){
        setTimeout(() => {
            console.log("Settimeout" , this.name);
             console.log("Settimeout" , this);
        }, 1000);
    }
}





// #7 FUNCTION HOISTING

// Hoisting is JavaScript's behavior of moving declarations to the top
// of their scope during the compilation phase before code execution.

// Function declarations are fully hoisted, including their definitions.
// Therefore, the function can be called before it is declared.

// sayHello(); // Works successfully

function sayHello() {
    console.log("Maanik Arya");
}


// Function expressions and arrow functions assigned to variables are NOT
// fully hoisted. The variable declaration is hoisted, but it remains in
// the Temporal Dead Zone (TDZ) until initialization is reached.

// Calling the function before initialization results in a ReferenceError.

// name(); // ReferenceError: Cannot access 'name' before initialization

const name = () => {
    console.log("here");
};






// #8 - First Class functions:
// JavaScript treats functions like any other value.

// A function can be:

// Stored in a variable
// Passed as an argument
// Returned from another function
// Stored inside arrays/objects

// This property is called First-Class Function or First-Class Citizen.

// Stored as Value :
const greetings = function(){
    console.log("Hello")
}

// Pass as Arguments
function sayHello() {
    console.log("Hello")
}

function execute(fn){
    fn();
}

execute(sayHello);

// Function return from another function:
function outer(){
    return function(){
        console.log("Testing");
    }
}

const resultdata = outer()();


// Function Inside the Array
const arr = [
    function() {
        console.log("Say Hello");
    },
    function(){
        console.log("Say Byee");
    }
];
arr[0]();
arr[1]();


// HIGHER ORDER FUNCTION
// A function that:

// Accepts another function as an argument, or
// Returns a function

function operate(fn,a,b){
    return fn(a,b);
}

function addFunction(a,b){
    return a+b;
}

console.log(operate(addFunction,4,5));
