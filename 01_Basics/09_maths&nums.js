const score = 400
// console.log(score);//400
const balance = new Number(900) //object 
// console.log(balance); //[Number: 900]

// console.log(balance.toString().length);

// console.log(balance.toFixed(3));//900.000  --> no. of 0 after decimal 

const num = 123.456789
// console.log(num.toPrecision(4)); //123.5 as it rounds off .45  to .50 so 123.5

const hundred = 1000000000000
// console.log(hundred.toLocaleString());//1,000,000,000,000 --> to count 0's  in us standerd (by default)
// console.log(hundred.toLocaleString('en-IN'));//10,00,00,00,00,000 --> to count 0's in indian standerd

/*
console.log(Math);//Object [Math] {}
console.log(Math.abs(-9));//9
console.log(Math.round(8,4));//8
console.log(Math.ceil(9.8));//10
console.log(Math.floor(9.8));//9
*/
// console.log(Math.random());// value always between 0 & 1

// console.log((Math.random()*10)+1);// value restrivted between 1 to 9 

const max = 10
const min = 20
console.log(Math.floor(Math.random()*(max - min +1))+min);

//value between 10 to 19
























