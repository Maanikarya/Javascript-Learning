// ============================================================
//  TOPIC 2: SPREAD & REST OPERATOR  ( ... )
// ============================================================

/*
 * [ENGLISH]
 * Both Spread and Rest use the same `...` syntax but serve opposite purposes:
 *
 *   • SPREAD  → Expands / unpacks an array or object into individual elements.
 *   • REST    → Collects multiple individual values into a single array.
 *
 * Quick rule: if `...` is on the RIGHT side of `=` (or in a call), it's Spread.
 *             If `...` is on the LEFT side (or in a function param), it's Rest.
 *
 * [HINGLISH]
 * Spread aur Rest dono ek hi `...` syntax use karte hain, lekin kaam ulta hai:
 *
 *   • SPREAD  → Array ya object ko individual elements mein expand karta hai.
 *   • REST    → Multiple individual values ko ek array mein collect karta hai.
 *
 * Easy trick: `...` agar RIGHT side pe hai → Spread.
 *             `...` agar LEFT side pe hai  → Rest.
 */


// ════════════════════════════════════════════════════════════
//  SPREAD OPERATOR
// ════════════════════════════════════════════════════════════

// 1. Merging / combining arrays
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [40, 50, 60];
let arr3 = [...arr1, ...arr2];   // [1, 2, 3, 4, 5, 6, 40, 50, 60]
console.log('Merged array:', arr3);

// 2. Copying & merging objects
const userDetails = { name: 'Maanik', age: 24 };
const userAddress = { street: '453,33', city: 'Badarpur, New Delhi' };

const user = { ...userDetails, ...userAddress };
/*
 * [ENGLISH]  Both objects are "spread" into a new object.
 * [HINGLISH] Dono objects ke saare properties ek naye object mein merge ho gayi.
 */
console.log('Merged user object:', user);


// ════════════════════════════════════════════════════════════
//  REST OPERATOR
// ════════════════════════════════════════════════════════════

// 1. Rest in function parameters
/*
 * [ENGLISH]  `...numbers` collects ALL arguments passed to the function
 *            into a single array named `numbers`.
 * [HINGLISH] `...numbers` function ko diye gaye saare arguments ko ek
 *            array `numbers` mein collect kar leta hai.
 */
function getSum(...numbers) {
    let result = 0;
    numbers.forEach((value) => {
        result += value;
    });
    return result;
}

console.log('Sum:', getSum(1, 2, 3, 4, 5));  // 15


// 2. Rest in Array Destructuring
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = numbers;
/*
 * [ENGLISH]  `first` = 10, `second` = 20, `remaining` = [30, 40, 50]
 * [HINGLISH] Pehle do values alag variables mein, baaki sab `remaining` array mein.
 */
console.log('first:', first);         // 10
console.log('second:', second);       // 20
console.log('remaining:', remaining); // [30, 40, 50]


// 3. Rest in Object Destructuring
const userFb = {
    name: 'MAANIK',
    age: 23,
    dob: '27-11-2002',
};

const { name: NAAM, ...restObj } = userFb;
/*
 * [ENGLISH]  `name` is extracted and renamed to `NAAM`.
 *            Everything else goes into `restObj`.
 * [HINGLISH] `name` property ko `NAAM` naam se nikala, baaki sab `restObj` mein.
 */
console.log('NAAM:', NAAM);       // MAANIK
console.log('restObj:', restObj); // { age: 23, dob: '27-11-2002' }
