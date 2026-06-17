/**
 * Javascript - SYNCHRONUS , SINGLE THREADED
 * 
 * Execution Context: execute 1 line of code at a time.
 * Each operation waits for the last one to complete before executing.
 */

/**
 * Blocking code VS Non-Blocking code
 * 
 * Blocking: Block the flow of program - Read file Sync
 * Non-Blocking: Doesn't Block the flow of program - Read file Async
 */

// Kindly go through the screenshot of the Async Event Loop diagram.


// console.log("first");

// setTimeout(() => {
//     console.log("second");
// }, 0);

// console.log("third");

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("forth");

console.log("first");

setTimeout(() => {
    console.log("second");
}, 0);

console.log("third");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("forth");
