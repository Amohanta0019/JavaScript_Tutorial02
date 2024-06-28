//array specific loops

//#1) for of loop:-
const arr = [1, 2, 3, 4, 5, 6]
for (const value of arr) {
    // console.log(value); // 1 2 3 4 5 6
}


const greetings = "good evening "
for (const greet of greetings) {
    // console.log(`each char is :- ${greet}`); //print each words in new lines
}


//MAPS:- [use for unique values only, maintain the order of elements]
//maps are not iteratable ,,, so can't apply for-in loop
const newMap = new Map()
newMap.set("IN", "India")
newMap.set("USA", "United States Of America")
newMap.set("UK", "United Kingdom")
// console.log(newMap);
/*
o.p:-
Map(3) {
    'IN' => 'India',
    'USA' => 'United States Of America',
    'UK' => 'United Kingdom'
  }
*/

for (const key of newMap) {
    // console.log(key);
}
/*
o.p:-
[ 'IN', 'India' ]
[ 'USA', 'United States Of America' ]
[ 'UK', 'United Kingdom' ]
*/

for (const [key, value] of newMap) {
    // console.log(key , ":-" , value);
}
/*
IN :- India
USA :- United States Of America
UK :- United Kingdom
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//for-of loop is not applicable for objects as objects in js are not iteratable 
const games = {
    "game1": "GTA5",
    "game2": "BGMI",
    "game3": "FIFA"
}
/*
for (const [key, value] of games) {
    // console.log(key , ":-" , value); --->games is not iterable
}
*/

const lang = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    ts: "typescript"
}
// console.log(typeof lang); //object
for (const key in lang) {
    // console.log(key); // js cpp rb ts
    // console.log(lang[key]); // javascript c++ ruby typescript
    // console.log(`${key} shortcut for ${lang[key]}`);
}

// ================================================

//froEach is a callback function , it is like func. but doesn't have name 
// function name (){} ---> function (iterator) {print}

//forEach loop on array~~~
const coding = ["js", "cpp", "py", "java"];
//general syntax of forEach (value: string, index: number, array: string[])
coding.forEach(function (item, index, array) {
    // console.log(item, index, array);
    /*
    js 0 [ 'js', 'cpp', 'py', 'java' ]
    cpp 1 [ 'js', 'cpp', 'py', 'java' ]
    ...
     */
})
//using normal function
coding.forEach(function (i) {
    // console.log(i);
    /*
    js
    cpp
    py
    java
    */
})
//using arrow function
coding.forEach((iterator) => {
    // console.log(iterator);
})

//using user defined function
function print(item) {
    console.log(item);
}
// coding.forEach(print);


// forEach loop in array of objects [used in databas]
const languages = [
    {
        langName : "javascript",
        langExt : "js",
    },
    {
        langName : "c++",
        langExt : "cpp",
    },
    {
        langName : "python",
        langExt : "py",
    },
]
languages.forEach((iterator) => {
    console.log(`name :- ${iterator.langName} , extention :- ${iterator.langExt}`);
    /*
    name :- javascript , extention :- js
    name :- c++ , extention :- cpp
    name :- python , extention :- py
*/
})