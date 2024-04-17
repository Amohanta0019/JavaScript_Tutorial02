/*
function one() {
    const uname = "ahana"
    console.log("function 1 execute ");
    function two(params) {
        const website  = "youtube"
        console.log("function 2 execute");
        console.log(uname);
    }
    // console.log(website);// func1 = parent func2= child ,,, parent child er property inherite korte pare na , tai website jeta func2 te declare kora hoi66e seta kokhonoi func1 e asbe na
    two() //  parent (func1) can access child (func2) outside child's scope
}
one()
/* function 1 execute 
function 2 execute
ahana*/


if (true) {
    const uname = "ahana"
    if (uname == "ahana ") {
        const website = "whatsapp"
        console.log(uname+website);
    }
    // console.log(website);
}
// console.log(uname);


//+-+-+-+-+-+-+-+-+-+- INTERESTING +-+-+-+-+-+-+-+-+-+-

console.log(add1(2));  //3 in case of func declaration er agei result chaitei pari
function add1(num) {
    return num + 1
}
console.log(add1(5));  //6



// console.log(add2(2)); // error as in case of add2 ami add2 func er return value ke ekta variable e store kor66i , var declare/initialize korar age result access korte parbo na.
const add2 = function (num) {
    return num + 2
}
console.log(add2(5)); 















