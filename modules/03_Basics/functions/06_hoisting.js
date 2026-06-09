// ============================================================
//  TOPIC 6: FUNCTION HOISTING
// ============================================================

/*
 * [ENGLISH]
 * Hoisting is JavaScript's behaviour of moving DECLARATIONS to the top
 * of their scope during the "compilation phase" — before any code runs.
 *
 * There are TWO distinct behaviours depending on how a function is defined:
 *
 *  1. FUNCTION DECLARATION  → Fully hoisted (definition + body moved up).
 *     You can call it BEFORE the line it is written on. ✅
 *
 *  2. FUNCTION EXPRESSION / ARROW FUNCTION (assigned to `const`/`let`)
 *     → The variable declaration is hoisted, but the VALUE (the function)
 *       is NOT. The variable sits in the "Temporal Dead Zone" (TDZ) until
 *       the code reaches that line. Calling it before that line = ERROR. ❌
 *
 * [HINGLISH]
 * Hoisting JavaScript ka woh behavior hai jisme declarations ko code
 * run hone SE PEHLE scope ke top par move kar diya jaata hai (compilation phase mein).
 *
 * Function define karne ke tarike ke hisaab se do alag behaviors hote hain:
 *
 *  1. FUNCTION DECLARATION  → Puri tarah hoist hoti hai (naam + body dono).
 *     Isko define karne SE PEHLE call kar sakte ho. ✅
 *
 *  2. FUNCTION EXPRESSION / ARROW FUNCTION (`const`/`let` mein assign ki gayi)
 *     → Sirf variable ka naam hoist hota hai, lekin uski VALUE (function) nahi.
 *       Jab tak code us line tak nahi pahunchta, variable "Temporal Dead Zone"
 *       (TDZ) mein rehta hai. Pehle call karo → ERROR. ❌
 */


// ─── 1. Function Declaration — fully hoisted ───────────────

sayHello();   // ✅ Works! Called BEFORE the function definition below.

function sayHello() {
    console.log('Hello from sayHello — hoisted declaration!');
}


// ─── 2. Function Expression — NOT fully hoisted ────────────

// greetUser(); // ❌ ReferenceError: Cannot access 'greetUser' before initialization

const greetUser = function () {
    console.log('Hello from greetUser — function expression');
};

greetUser();  // ✅ Works after definition


// ─── 3. Arrow Function — NOT fully hoisted ─────────────────

// farewell(); // ❌ ReferenceError: Cannot access 'farewell' before initialization

const farewell = () => {
    console.log('Bye from farewell — arrow function');
};

farewell(); // ✅ Works after definition


// ─── Visual Mental Model ───────────────────────────────────
/*
 * What JavaScript "sees" after hoisting:
 *
 *  // ---- Function declarations moved to top ----
 *  function sayHello() { ... }     ← whole body moved up ✅
 *
 *  // ---- Variable names reserved but no value yet ----
 *  const greetUser = TDZ;          ← value not assigned yet ❌
 *  const farewell  = TDZ;          ← value not assigned yet ❌
 *
 *  // ---- Rest of code runs line by line ----
 *  sayHello();       ✅
 *  greetUser = function() { ... }; ← NOW it gets the value
 *  greetUser();      ✅
 */


// ─── TDZ (Temporal Dead Zone) — Quick Note ─────────────────
/*
 * [ENGLISH]
 * TDZ is the period between the START of the scope and the line where
 * `let`/`const` is initialized. Accessing the variable in this zone
 * throws a ReferenceError.
 *
 * [HINGLISH]
 * TDZ woh time period hai jab `let`/`const` ka variable declare toh ho
 * gaya hai (scope ke shuruaat mein) lekin abhi assign nahi hua.
 * Is zone mein variable access karo toh ReferenceError aata hai.
 */
