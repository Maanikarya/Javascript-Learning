// Objects

// #1 - Literals {commonly used}
let objLiteral = {}
// #2 - Constructor
let objConstructor = new Object()
// console.log(objLiteral)
// console.log(objConstructor)

let keyName = "isAdmin";
let mySymb = Symbol('123');
let arr1 = [1,2,3,{name:"Maaanik"}]

let obj1 = {
    name : "Maanik Arya",
    age : 24,
    "first-name" : "Maanik",
    [keyName] : true,
    [mySymb] : "Testing",
    address : {
        street : "453B",
        city : "Badarpur",
    },
    [arr1] : "Testing"
}



//#3  There are 2 way to get acess the object values - 1 is dot 2 is sqr brackets. 
// obj1.name
// obj1['first-name']



// #4 Object Freeze
// Object.freeze(obj1)


// #5 Funciton in objects
obj1.greeting = function(){
    return this.name
}
// console.log(obj1.greeting())

// #6- Nested objects - 

let tinderUser = {
    age : 24,
    name : {
       fullname:{
        fname : 'Maanik',
        lname : 'Arya'
       } 
    },
    platform :  { name : 'tinder' }
}
fname = tinderUser?.fullname?.fname;
let {'lname' : lastname} = tinderUser.name.fullname
// console.log(lastname)

// #6 Wrong way to copy the object - Instaead of this use JSON-stringify then JSON parse
// let instauser = tinderUser
// instauser.platform.name = "Instagram"
// Correct Way 
let instauser = JSON.parse(JSON.stringify(tinderUser))
instauser.platform.name = "Instagram"

// console.log("instauser" , instauser)
// console.log("tinderUser" , tinderUser)

// #7 Merge 2 objects:
let ob_1 = {
    name : 'Maanik',
    age : 24,
    details:{
        profession : "Software Eng"
    }
}

let ob_2 = {
    address : 'Badarpur, New Delhi',
    phonenumber : 1234567890
}

// using assign:
let ob_3 = Object.assign({email:"maanik.arya@gmail.com"}, ob_1, ob_2)

// Using Spread operator
let ob_4 = JSON.parse(JSON.stringify({...ob_1,...ob_2}))


ob_4.name = "Ujjwal"
ob_4.details.profession = "Accountant"

// console.log(ob_1);
// console.log(ob_4);

// #8 - Array of objects
let arr_obj = [
    {name:'Maanik'},
    {age:24}
]

// #9- Object functions
console.log(Object.keys(obj1)); // Convert keys into array and return that array
console.log(Object.values(obj1)); // Convert values into array and return that array
console.log(Object.entries(obj1)); // convert into array like below

// [
//   [ 'name', 'Maanik Arya' ],
//   [ 'age', 24 ]
// ]






