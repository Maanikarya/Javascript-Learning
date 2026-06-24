// Rules : Truthy and Falsy value

// Falsy Value
// false , 0 , -0 , BigInt : 0n , null , undefined , NaN

// Truthy Value 
// "0" , 'false' , " ",  [] , {} , function() {} EMPTY FUNCTION


// Nullish Coalescing Operator (??) : null undefined

let val1 = 5 ?? 10 ;  // 5
let val2 = null ?? 20;  // 10
let val3 = undefiend ?? 20; // 20


// const userEmail = "maanikaryaofficial@gmail.com";
// const userEmail = "";
const userEmail = []; // True

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user");
}



const data = [];

if(data.length === 0){
    console.log("Array is Empty");
}


const obj = {data} ;

if( Object.entries(obj).length === 0 ){
    console.log("Object is Empty");
}else{
    console.log("Object is NOT Empty");
}