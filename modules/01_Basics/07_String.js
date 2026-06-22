const name = "Maanik Arya"
const age = 24
const gender =  "Male"
console.log(`My name is ${name} and my age is ${age}, Gender: ${gender}`)

const str = new String("Maanik")

let output = name.charAt(1)
//  output = name.toUpperCase()
//  output = name.indexOf("a")
// output = name.substr(2,6). //treat negative as 0  -> substr(start, length)
// output = name.slice(2,2) // include negative numbers -> slice(start, end)
// output = name.trim()
output = name.replaceAll("a" , "9")
// output = name.includes("aanik")
// output = name.split(" ")
console.log(output)





/**

* Topic: Primitive String vs String Object in JavaScript
* File: string-types.js
  */

// ==============================
// 1. Primitive String
// ==============================
const str2 = "Maanik";

console.log("Primitive String:");
console.log(str2);                 // Maanik
console.log(typeof str2);          // "string"

// ==============================
// 2. String Object (Wrapper)
// ==============================
const str = new String("Maanik");

console.log("\nString Object:");
console.log(str);                 // [String: 'Maanik']
console.log(typeof str);          // "object"

// ==============================
// 3. Comparison Difference
// ==============================
console.log("\nComparison:");
console.log(str == str2);         // true  (type coercion)
console.log(str === str2);        // false (different types)

// ==============================
// 4. Truthy vs Falsy Behavior
// ==============================

// Object (always truthy)
const objStr = new String("");
if (objStr) {
console.log("\nObject string is truthy"); // Runs
}

// Primitive (empty string is falsy)
const primStr = "";
if (!primStr) {
console.log("Primitive empty string is falsy"); // Runs
}

// ==============================
// 5. Method Access (Auto-boxing)
// ==============================
console.log("\nMethods:");
console.log(str2.toUpperCase());  // MAANIK
console.log(str.toUpperCase());   // MAANIK

/**

* JavaScript automatically converts primitive string
* to String object temporarily (auto-boxing)
  */

// ==============================
// 6. JSON Behavior (Important)
// ==============================

let obj3 = {
nameObj3: "Khushi Arya",
classObj3: "10-a",
greetingObj3: function () {
return `Hello ${this.nameObj3}`;
},
objObj3: {
name: "Maanik"
}
};

console.log("\nOriginal Object:");
console.log(obj3);

const converted = JSON.parse(JSON.stringify(obj3));

console.log("\nAfter JSON stringify + parse:");
console.log(converted);

/**

* NOTE:
* * Functions are removed during JSON.stringify()
* * JSON only supports data (not functions, undefined, Symbol)
    */

// ==============================
// 7. Interview Key Points
// ==============================

/**

* ✔ "string" is primitive, lightweight, recommended
* ✔ new String() creates object, not recommended
* ✔ typeof difference: "string" vs "object"
* ✔ === comparison fails due to type mismatch
* ✔ Object is always truthy (can cause bugs)
* ✔ JSON.stringify removes functions
  */

// ==============================
// 8. Best Practice
// ==============================

// ✅ Use this
const best = "Maanik";

// ❌ Avoid this
const avoid = new String("Maanik");

console.log("\nBest Practice:");
console.log(best);
