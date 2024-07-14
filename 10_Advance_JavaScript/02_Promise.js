/*
const promise1 = new Promise(function (resolve, reject){
    //Do an async task like DB calls, N/W calls, cryptograpohy
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000) 
})

//connnected with resolve
promise1.then(function(){
    console.log("Promise consumed");
}) 

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username :"ahana", mail : "ahana@gogle.com"})
    }, 1000);
})
promise3.then((username)=>{console.log(username);})

*/
/*
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "ahana1", pw: "123" });
    } else {
      reject("ERROR!! something went wrong");
    }
  }, 1000);
});
*/

/*
const username = promise4.then((user)=>{
    console.log(user);
    return user.username

})
*/
// console.log(username);

/*
promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolve or rejected");
})
*/

/*
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ uname: "ahana", id: "123" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});
async function consumePromise5(){
    try {
        const responce = await promise5;
        console.log(responce);    
    } catch (error) {
        console.log(error);
    }
    
}
consumePromise5()
*/

/*
async function getAllUser() {
  try {
    const responce = await fetch("https://api.github.com/users/Amohanta0019");
    // console.log(responce);
    const data = await responce.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();
*/

fetch ('https://api.github.com/users/Amohanta0019')
.then((responce)=>{
  return responce.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})