// ============================================================
//  TOPIC 3: CLOSURES
// ============================================================

/*
 * [ENGLISH]
 * A Closure is created when an inner function "remembers" and can still
 * access variables from its outer (enclosing) function — even AFTER the
 * outer function has finished executing.
 *
 * Why it matters:
 *  • Data privacy / encapsulation (variables are hidden from outside)
 *  • Stateful functions (a function that remembers a value between calls)
 *  • Factory functions (creating customised functions on the fly)
 *
 * [HINGLISH]
 * Closure tab banta hai jab ek inner function apne outer function ke
 * variables ko "yaad" rakhta hai — tab bhi, jab outer function apna kaam
 * poora kar chuka ho aur band ho gaya ho.
 *
 * Kyun zaroori hai:
 *  • Data ko bahar se chhupaane ke liye (encapsulation)
 *  • Aisi functions banane ke liye jo ek value yaad rakhein (stateful)
 *  • Factory functions — on-the-fly customised functions banana
 */


// ─── Basic Closure ─────────────────────────────────────────
function outer() {
    const username = 'Maanik';   // variable in outer scope

    function inner() {
        // inner function accesses `username` from outer scope
        return `Your username is: ${username}`;
    }

    return inner;  // return the function itself, not its result
}

const data = outer();   // outer() has finished — but `username` is still alive!
console.log(data());    // "Your username is: Maanik"


// ─── Practical Example: Counter (Data Privacy) ─────────────
/*
 * [ENGLISH]  The variable `count` is private — no one outside can change
 *            it directly. Only the returned functions can touch it.
 * [HINGLISH] `count` variable bahar se koi directly change nahi kar sakta.
 *            Sirf returned functions usse access kar sakte hain.
 */
function makeCounter() {
    let count = 0;           // private variable

    return {
        increment: function () { count++;     console.log('Count:', count); },
        decrement: function () { count--;     console.log('Count:', count); },
        getCount:  function () { return count; },
    };
}

const counter = makeCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log('Final count:', counter.getCount()); // 1


// ─── Factory Function Example ──────────────────────────────
/*
 * [ENGLISH]  Each call to `multiplyBy` creates a NEW closure with its own
 *            `factor` value.
 * [HINGLISH] Har baar `multiplyBy` call karne par ek nayi closure banti hai
 *            jo apna alag `factor` yaad rakhti hai.
 */
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
