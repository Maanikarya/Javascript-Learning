// Generators

// A Generator Function is a special function that can pause its execution and resume later.

//  Notice:
// function*
// yield instead of return

function* test(){
    yield "A";
    yield "B";
    yield "C";
    yield "D";
    yield "E";
}

const gen = test();

console.log(gen.next()); // Return Iterator Object
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Another Eg:
function* genfunc(){
    console.log("first");
    
    yield 1;
    console.log("second");
    
    yield 2;
    console.log("third");

    yield 3;
}

const genFuncCall = genfunc();
genFuncCall.next();
genFuncCall.next();
genFuncCall.next();
genFuncCall.next();



