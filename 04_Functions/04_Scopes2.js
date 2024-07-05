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
        // console.log(uname+website);
    }
    // console.log(website);
}
// console.log(uname);


//+-+-+-+-+-+-+-+-+-+- HOISTING +-+-+-+-+-+-+-+-+-+-

//hoisting means using a variable or function or class even before declaring it
//it is only applicable on var and declaration not const/let/expressions


console.log(add1(2));  //3 in case of func ,declaration er agei result chaitei pari
function add1(num) {
    return num + 1
}
// console.log(add1(5));  //6

// console.log(a); //undefined [does not give error coz of hoisting]
var a;
a = 9;
// console.log(a); //9


//hoisting is not applicable on const & let 
//-----------------------------------------
// console.log(b);
// const b; //error :- Missing initializer in const declaration

// console.log(c); //ReferenceError: Cannot access 'c' before initialization
// let c;



//hoisting is not applicable on class & function expression:-
//--------------------------------------------------------------------
// console.log(add2(2)); // error as in case of add2 ami add2 func er return value ke ekta variable e store kor66i , var declare/initialize korar age result access korte parbo na.
//TypeError: add2 is not a function
var add2 = function (num) {
    return num + 2
}
console.log(add2(5)); 















