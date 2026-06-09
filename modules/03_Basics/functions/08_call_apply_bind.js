// call(), apply(), bind()

// These methods let you manually set the value of this.


// Problem
const person1 = {
    name:'Maanik',
    age: 23
} 

function greet(){
    console.log(this.name);
}
//How can we make greet() use person1 as this?

greet.call(person1);

// Call() with Args
function getAge(city,state){
    console.log(
        `My age is ${this.age} and I live in ${city}, ${state}`
    );
}

getAge.call(
    person1,
    "Badarpur",
    "New Delhi"
)

//apply() - Same as call(), but arguments are passed as an array.
getAge.apply(
    person1,
    ["Badarpur" , "New Delhi"]
)

// bind() - Does not execute immediately.Returns a new function.
let boundfun = getAge.bind(
    person1,
    "Badarpur",
    "New Delhi"
)

boundfun();

