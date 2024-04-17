const user = {
    uname : "ahana",
    price : 9999,

    welcomeMsg : function (params) {
        console.log(`${this.uname} , welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMsg()//ahana , welcome to our website

user.uname = "mamata"
// user.welcomeMsg()//mamata, welcome to our website

/*
this gives reference to current object
{ uname: 'ahana', price: 9999, welcomeMsg: [Function: welcomeMsg] }
{ uname: 'mamata', price: 9999, welcomeMsg: [Function: welcomeMsg] }
*/
// console.log(this); //{} empty object

/*
function fun1(params) {
    let uname = "ahana"
    console.log(this);
    // console.log(this.uname); undefined
}
fun1() 
*/

const fun1 = (params) => {
    let uname = "ahana"
    console.log(this); // {}
    // console.log(this.uname); undefined
}
// fun1()

const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(3,4));//7

// implicit arrow function 
const addThree = (num1, num2, num3) =>  (num1+num2+num3)
console.log( addThree(1,2,3));// 6

//object return chaile take paranthesis e wrap kortei hbe
const objectParanthesis = (num1) => {uname : "ahana"}
console.log(objectParanthesis(1)); // undefined


const objectParanthesis1 = (num1) => ({uname : "ahana"})
console.log(objectParanthesis(1)); // { uname: 'ahana' }














