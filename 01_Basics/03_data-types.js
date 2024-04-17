"use strict"; //treat all js code as per newer version

// alert(3+3)  //gives error as  we are using node js not browser

let name = "ahana"
let age = 20
let isLoggedIn = false

/* 
number --> 2^53 appox limit
bigint --> for very large number
string --> '' or ""
boolean --> true or false
null --> standalone value as well as data-type
representation of empty value
undefined --> variable is declared but value not assigned
symbol --> to find uniqueness
object -->
*/

// console.log( typeof("ahana")) // string
// console.log( typeof(undefined)) // undefined
// console.log( typeof(null)) // object

/*
primitive --> 7 types
string
number 
boolean
null
undefined
symbol
BigInt
non-primitive/ reference--->
array
objects
functions


*/

//type of symbol are different
const id = Symbol('123')
const id1 = Symbol('123')
console.log(id===id1);  //false
console.log(id==id1);  //false


// suffix n for BigInt
const bigNumber = 11111111111111111111111111111;

const bigNumber1 = 11111111111111111111111111111n;

//array in js
const heros = ['iron-man', 'cap america','spiderman', 'black panther','thor','hulk'];

//object in js
let myObj = {
    name :'ahana',
    age: 20,
}

//function in js
const myFunc = function(){
    console.log("hello world");
}

