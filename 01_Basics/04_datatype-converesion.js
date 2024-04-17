let score = "99"
let score1 = "99abd"
let score2 = null
let score3 = undefined
let score4 = false
let score5 = "ahana"

console.log(typeof score);//string
console.log(typeof(score));//string 

//convert score from string to number
let valueInNum = Number(score)
console.log(valueInNum); //  
console.log(typeof(valueInNum));//number

//convert score1 from string to number
let valueInNum1 = Number(score1)
console.log(valueInNum1); // NaN 
console.log(typeof(valueInNum1));//number... but it is mix of digit and charecter!!

let valueInNum2 = Number(score2)
console.log(valueInNum2); // 0
console.log(typeof(valueInNum2));// number

let valueInNum3 = Number(score3)
console.log(valueInNum3); // NaN
console.log(typeof(valueInNum3));// number
let valueInNum4 = Number(score4)
console.log(valueInNum4); // 1
console.log(typeof(valueInNum4));// number

let valueInNum5 = Number(score5)
console.log(valueInNum5); // NaN
console.log(typeof(valueInNum5));// number

/*
"99" --> 99
"99abc" --> NaN
null--> 0
undefined--> NaN 
true--> 1
false --> 0
ahana-->  NaN
*/


// let isLoggedIn = 1 // true
// let isLoggedIn = 0 //false

// let isLoggedIn = "" //false
// let isLoggedIn = " " //true

// let isLoggedIn = NaN //false
// let isLoggedIn = undefined //false

let BoolisLoggedIn = Boolean(isLoggedIn)
console.log(BoolisLoggedIn);


