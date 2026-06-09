// ============================================================
//  TOPIC 5: ARROW FUNCTIONS
// ============================================================

/*
 * [ENGLISH]
 * Arrow functions (introduced in ES6 / 2015) provide a shorter syntax
 * for writing functions. They also behave differently with `this`:
 *
 *   • Regular functions create their OWN `this` context.
 *   • Arrow functions do NOT — they inherit `this` from the surrounding
 *     (lexical) scope. This is called LEXICAL `this`.
 *
 * [HINGLISH]
 * Arrow functions (ES6 / 2015 mein aaye) functions likhne ka ek chhota
 * aur clean tarika hai. `this` keyword ke saath inका behavior alag hai:
 *
 *   • Regular functions apna KHUD ka `this` banate hain.
 *   • Arrow functions nahi banate — woh apne surrounding scope ka `this`
 *     use karte hain. Isse LEXICAL `this` kehte hain.
 */


// ─── Basic Syntax ──────────────────────────────────────────
const arrowFun = (param1, param2) => {
    return param1 + param2;
};
console.log(arrowFun(3, 4)); // 7


// ─── Single Parameter — parentheses optional ───────────────
const square = param1 => {
    return param1 * param1;
};
console.log(square(5)); // 25


// ─── Single-Line / Implicit Return ─────────────────────────
/*
 * [ENGLISH]  If the function body is a single expression, drop the `{}`
 *            and `return`. The expression is returned automatically.
 * [HINGLISH] Agar function mein sirf ek expression hai, toh `{}` aur
 *            `return` hata sakte ho — value automatically return hogi.
 */
const cube = n => n * n * n;
console.log(cube(3)); // 27

// Returning an object literal — wrap it in ( ) to avoid ambiguity
const makeUser = name => ({ name: name });
console.log(makeUser('Maanik')); // { name: 'Maanik' }


// ─── `this` in Arrow Functions ─────────────────────────────

// Example 1: Arrow function inside a regular function
/*
 * [ENGLISH]  The arrow function captures `this` from `person()`.
 *            So `this.age` correctly points to the `person` object's age.
 * [HINGLISH] Arrow function, `person()` ka `this` use karta hai.
 *            Isliye `this.age` sahi value deta hai.
 */
function person() {
    this.age = 500;

    const showAge = () => {
        console.log('Age is', this.age); // `this` = person's context
    };

    showAge();
}
person(); // Age is 500


// Example 2: Arrow function inside an object method with setTimeout
/*
 * [ENGLISH]
 * If we used a regular function inside setTimeout, `this` would be
 * `undefined` (in strict mode) or the global object — NOT the object.
 * Using an arrow function FIXES this because it inherits `this` from
 * `getName`, which belongs to `objData`.
 *
 * [HINGLISH]
 * Agar setTimeout ke andar regular function use karte, toh `this`
 * object ki jagah `undefined` ya global object hota.
 * Arrow function use karne se `this` sahi object (`objData`) ko point
 * karta hai — kyunki arrow function `getName` ka `this` inherit karta hai.
 */
const objData = {
    name: 'Maanik Arya',
    age: 20,
    getName: function () {
        setTimeout(() => {
            console.log('Name:', this.name); // Maanik Arya ✅
        }, 500);
    },
};

objData.getName();


// ─── Quick Comparison Table ────────────────────────────────
/*
 *  Feature                  | Regular Function   | Arrow Function
 * --------------------------|--------------------|-------------------
 *  Syntax                   | function() {}      | () => {}
 *  `this` binding           | Own `this`         | Lexical (inherited)
 *  Can be a constructor     | Yes                | No
 *  `arguments` object       | Yes                | No
 *  Hoisted                  | Yes (declaration)  | No
 */
