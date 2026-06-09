// ============================================================
//  TOPIC 1: FUNCTION BASICS — Parameters, Arguments & Return
// ============================================================

/*
 * [ENGLISH]
 * A function is a reusable block of code that you write once and can call
 * (execute) many times. Functions can accept inputs called "parameters"
 * (defined in the function) and "arguments" (the actual values passed
 * when calling the function).
 *
 * If a function does not explicitly return a value, JavaScript automatically
 * returns `undefined`.
 *
 * [HINGLISH]
 * Function ek reusable block of code hota hai — ek baar likho, baar baar use karo.
 * Function ke andar jo variables define karte ho unhe "parameters" kehte hain,
 * aur jab function call karte ho tab jo actual values dete ho unhe "arguments" kehte hain.
 *
 * Agar function kuch return nahi karta, toh JavaScript automatically
 * `undefined` return karta hai.
 */

// ─── Syntax ────────────────────────────────────────────────
// Parameters are placeholders defined in the function signature.
function greet(name) {   // <-- 'name' is a PARAMETER
    console.log(`Hello, ${name}!`);
}

greet('Maanik');         // <-- 'Maanik' is an ARGUMENT
greet('Arya');


// ─── Return value ──────────────────────────────────────────
function add(a, b) {
    return a + b;        // explicitly returns a value
}

let sum = add(3, 7);
console.log(sum);        // 10


// ─── No return → undefined ─────────────────────────────────
/*
 * [ENGLISH]  When a function body has no `return` statement, calling it
 *            gives back `undefined`.
 * [HINGLISH] Jab function mein koi `return` statement nahi hota, toh
 *            uska result `undefined` aata hai.
 */
function getName() {
    // nothing returned here
}

let output = getName();
console.log(output);     // undefined
