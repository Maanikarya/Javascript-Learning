/**
**Problem Statement: Flatten a Nested Array**

Given an array that may contain nested arrays at multiple levels, write a function to convert it into a single flattened array.

The function should return a new array containing all elements in the same order, but without any nested structure.

**Example:**

Input:
[1, 2, [3, 4, [5, 6], 7], 8, 9, [2, 4, 6]]

Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 6]

**Constraints:**

* The input can contain numbers and nested arrays of any depth.
* Do not use built-in flattening methods like `.flat()` (if specified in interview).
* Try to solve using recursion.

**Follow-up:**

* Can you solve it using an iterative approach (stack)?
* What is the time and space complexity?

 */


function getNormalArr(arr){
    let result = []
    for(let i = 0 ; i < arr.length; i++){
        let spreadData = []
        if(Array.isArray(arr[i])){
            spreadData = getNormalArr(arr[i])
        }else{
            result.push(arr[i])
        }
        result.push(...spreadData)
    }
    return result
}

let data = [1,2,[3,4,[5,6,[7,8],9],10],11,12 ,[13,14,[15,16],17]]

// Complexity => O(n)