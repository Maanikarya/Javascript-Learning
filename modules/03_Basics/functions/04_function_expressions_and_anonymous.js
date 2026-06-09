// ============================================================
//  TOPIC 4: FUNCTION EXPRESSIONS & ANONYMOUS FUNCTIONS
// ============================================================

/*
 * [ENGLISH]
 * FUNCTION EXPRESSION: A function that is assigned to a variable.
 * Unlike a function declaration, it is NOT hoisted — you can only call it
 * AFTER the line where it is defined.
 *
 * ANONYMOUS FUNCTION: A function without a name. It is most commonly used:
 *   1. As a function expression stored in a variable
 *   2. As a callback (passed into another function)
 *   3. Inside IIFEs (Immediately Invoked Function Expressions)
 *
 * [HINGLISH]
 * FUNCTION EXPRESSION: Jab ek function ko directly ek variable mein assign
 * karte hain. Yeh hoist nahi hoti — isko define karne ke BAAD hi call kar sakte ho.
 *
 * ANONYMOUS FUNCTION: Aisi function jiska koi naam nahi hota. Commonly use hoti hai:
 *   1. Variable mein store karne ke liye
 *   2. Callback ke roop mein (doosri function ko pass karte waqt)
 *   3. IIFEs mein
 */


// ─── 1. Function Expression ────────────────────────────────
const getExp = function () {
    console.log('This is a Function Expression');
};

getExp(); // This is a Function Expression

// NOTE: Calling before definition → ReferenceError (not hoisted)
// getExp2(); ← This would CRASH
const getExp2 = function () {
    console.log('This would crash if called before this line');
};


// ─── 2. Anonymous Function as a Callback ───────────────────
/*
 * [ENGLISH]  A callback is a function passed as an argument to another
 *            function and called later. Anonymous functions are perfect here
 *            since you don't need to reuse them by name.
 * [HINGLISH] Callback woh function hota hai jo doosri function ko argument
 *            ke roop mein diya jaata hai. Anonymous functions yahaan perfectly
 *            fit hoti hain kyunki inhe baad mein naam se call nahi karna.
 */
setTimeout(function () {
    console.log('Executed after 1 second');
}, 1000);


// ─── 3. Anonymous Function with Array Methods ──────────────
const annyArr = [1, 2, 3, 4, 5, 6];

annyArr.forEach(function (value) {
    console.log(value);
});


// ─── 4. Anonymous Function Passed as an Argument ───────────
/*
 * [ENGLISH]  Functions can themselves be passed as arguments, and those
 *            passed functions can be immediately invoked (called) inside.
 * [HINGLISH] Functions ko arguments ki tarah pass kar sakte ho, aur unhe
 *            andar immediately call kar sakte ho.
 */
const add = function (a, b) {
    return a() + b();
};

let result = add(
    function () { return 20; },
    function () { return 10 - 5; }
);
console.log('Result:', result); // 25


// ─── 5. IIFE — Immediately Invoked Function Expression ─────
/*
 * [ENGLISH]
 * An IIFE is a function that is defined and called at the same time.
 * Syntax: wrap the function in `()` and immediately add `()` to call it.
 * Use case: Creates its own scope, so its variables don't pollute the global scope.
 *
 * [HINGLISH]
 * IIFE woh function hai jo define hote hi turant execute ho jaati hai.
 * Iska fayda: iska apna alag scope hota hai — global scope mein koi
 * gandagi nahi hoti.
 */
(function () {
    const secret = 'I am inside an IIFE';
    console.log(secret); // accessible here
})();

// console.log(secret); // ← ReferenceError: secret is not defined (good!)
