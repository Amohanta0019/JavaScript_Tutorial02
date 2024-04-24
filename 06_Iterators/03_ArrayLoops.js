//array specific loops

//#1) for of loop:-
const arr = [1,2,3,4,5,6]
for (const value of arr) {
    // console.log(value); // 1 2 3 4 5 6
}


const greetings = "good evening "
for (const greet of greetings) {
    // console.log(`each char is :- ${greet}`); //print each words in new lines
}


//MAPS:-
//maps are not iteratable ,,, so can't apply forin loop
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

//forof loop is not applicable for objects as objects in js are not iteratable 
const games = {
    "game1" : "GTA5",
    "game2" : "BGMI",
    "game3" : "FIFA"
}
/*
for (const [key, value] of games) {
    // console.log(key , ":-" , value); --->games is not iterable
}
*/

const lang = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    ts : "typescript"
}
console.log(typeof lang); //object
for (const key in lang) {
    // console.log(key); // js cpp rb ts
    // console.log(lang[key]); // javascript c++ ruby typescript
    // console.log(`${key} shortcut for ${lang[key]}`);
}







