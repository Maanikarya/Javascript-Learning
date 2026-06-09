// ============================================================
//  TOPIC 7: FIRST-CLASS FUNCTIONS & HIGHER-ORDER FUNCTIONS
// ============================================================

/*
 * [ENGLISH]
 * FIRST-CLASS FUNCTIONS:
 * In JavaScript, functions are treated like any other value (number, string,
 * object). This is called "First-Class Functions" or "First-Class Citizens".
 *
 * A function can be:
 *   1. Stored in a variable
 *   2. Passed as an argument to another function
 *   3. Returned from another function
 *   4. Stored inside arrays or objects
 *
 * HIGHER-ORDER FUNCTION (HOF):
 * A function that either:
 *   • Accepts another function as an argument, OR
 *   • Returns a function
 *
 * Note: HOF is only possible BECAUSE functions are first-class.
 *
 * [HINGLISH]
 * FIRST-CLASS FUNCTIONS:
 * JavaScript mein functions ko kisi bhi doosri value (number, string,
 * object) ki tarah treat kiya jaata hai. Isse "First-Class Functions"
 * ya "First-Class Citizens" kehte hain.
 *
 * Function yeh sab kar sakta hai:
 *   1. Variable mein store ho sakta hai
 *   2. Doosri function ko argument ki tarah diya ja sakta hai
 *   3. Kisi function se return kiya ja sakta hai
 *   4. Array ya object ke andar reh sakta hai
 *
 * HIGHER-ORDER FUNCTION (HOF):
 * Aisi function jo:
 *   • Doosri function ko argument ki tarah le, YA
 *   • Ek function return kare
 *
 * HOF sirf isliye possible hai kyunki functions first-class hain.
 */


// ─── 1. Stored in a Variable ───────────────────────────────
const greetings = function () {
    console.log('Hello!');
};
greetings(); // Hello!


// ─── 2. Passed as an Argument ──────────────────────────────
/*
 * [ENGLISH]  `execute` is a Higher-Order Function — it accepts another
 *            function `fn` as its argument and calls it.
 * [HINGLISH] `execute` ek Higher-Order Function hai — yeh `fn` ko
 *            argument ki tarah leta hai aur use call karta hai.
 */
function sayHi() {
    console.log('Hi from sayHi!');
}

function execute(fn) {
    fn();  // calling the passed function
}

execute(sayHi);  // Hi from sayHi!


// ─── 3. Returned from Another Function ─────────────────────
/*
 * [ENGLISH]  `outer` returns an anonymous function. Calling `outer()()`
 *            first gets the returned function, then immediately calls it.
 * [HINGLISH] `outer` ek anonymous function return karta hai.
 *            `outer()()` pehle returned function lo, phir use call karo.
 */
function outer() {
    return function () {
        console.log('Returned function called!');
    };
}

const returnedFn = outer();
returnedFn();   // Returned function called!
// OR in one shot:
outer()();      // Returned function called!


// ─── 4. Stored Inside an Array ─────────────────────────────
/*
 * [ENGLISH]  Functions can live inside arrays just like any other value.
 * [HINGLISH] Functions bilkul numbers ya strings ki tarah arrays mein
 *            reh sakte hain.
 */
const arr = [
    function () { console.log('Say Hello'); },
    function () { console.log('Say Bye'); },
];

arr[0](); // Say Hello
arr[1](); // Say Bye


// ─── 5. Higher-Order Function — Full Example ───────────────
/*
 * [ENGLISH]  `operate` takes a function `fn` and two numbers.
 *            It delegates the actual calculation to `fn`.
 *            This makes `operate` reusable for ANY operation — add, subtract, multiply, etc.
 *
 * [HINGLISH] `operate` ek function `fn` aur do numbers leta hai.
 *            Actual calculation `fn` karta hai.
 *            Isse `operate` reusable ban jaata hai — add, subtract, multiply — sab ke liye.
 */
function operate(fn, a, b) {
    return fn(a, b);
}

function addFunction(a, b)      { return a + b; }
function subtractFunction(a, b) { return a - b; }
function multiplyFunction(a, b) { return a * b; }

console.log('Add:',      operate(addFunction,      4, 5)); // 9
console.log('Subtract:', operate(subtractFunction, 4, 5)); // -1
console.log('Multiply:', operate(multiplyFunction, 4, 5)); // 20


// ─── Real-World HOF Examples (built-in) ────────────────────
/*
 * [ENGLISH]  JavaScript's built-in array methods like `.map()`, `.filter()`,
 *            and `.reduce()` are all Higher-Order Functions — they accept a
 *            function as an argument.
 * [HINGLISH] JS ke built-in methods jaise `.map()`, `.filter()`, `.reduce()`
 *            sab Higher-Order Functions hain — yeh sab ek function argument
 *            ke roop mein lete hain.
 */
const nums = [1, 2, 3, 4, 5];

const doubled  = nums.map(n => n * 2);         // HOF: map
const evens    = nums.filter(n => n % 2 === 0); // HOF: filter
const total    = nums.reduce((acc, n) => acc + n, 0); // HOF: reduce

console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10]
console.log('Evens:',   evens);    // [2, 4]
console.log('Total:',   total);    // 15
