const promiseOne = new Promise(function(resolve,reject){
    // Do async Task
    // DB calls, cryptography task
    setTimeout(() => {
        console.log("Async Task is complete.");
        resolve()
    }, 1000);
})
promiseOne.then(() => {
    console.log("Promise Consumed");
});


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task-2 is complete.");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task - 3 is complete.");
        resolve({username : "Maanikarya" , email :  "maanik@gmail.con"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);  
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){ 
            resolve({username : "Maanik Arya" , password :  "Testing"}) 
        }else{
            reject('ERROR: Something Went Wrong');
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);  
    return user.username
})
.then((username) => {
    console.log(username);  
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("All Done");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){ 
            resolve({username : "Maanik Arya" , password :  "Testing"}) 
        }else{
            reject('ERROR: Something Went Wrong');
        }
    }, 1000);
})
async function consumePromiseFive(){
    try{
        const resp = await promiseFive
        console.log(resp);
    }catch (err) {
        console.log(err);
    }
    
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await resp.json();
//         console.log(data);
//     }catch (err) {
//         console.log("E: " ,err);
//     }   
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((resp) =>  {
//     return resp.json();
// })
// .catch((err) => console.log(err))
// .then((data) => console.log(data)) 


fetch('https://api.github.com/users/hiteshchoudhary')
.then((resp) =>  {
    return resp.json();
})
.catch((err) => console.log(err))
.then((data) => console.log(data)) 