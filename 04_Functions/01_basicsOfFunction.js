// console.log("basic of function");
/*
function sayMyName(){
    console.log("ahana");
}

sayMyName //--> reference ,, if () after reference then execution
sayMyName() //--> execution of function  O.P:-ahana
*/
function add2num (number1 , number2){
   console.log( number1+number2);
}
// add2num() //NaN
// add2num(3,2) //5
// add2num(3,'2') //32
// add2num(3,2n) //TypeError: Cannot mix BigInt and other types, use explicit conversions
// add2num(3,'a') //3a
// add2num(3,null) //3

/*
    whatever writen inside () in function defination is parameters [number1, number2]

    whatever writen inside () in function execution is arguments[3, 2] or [3,null] etc.
*/


// const result = add2num(3,6) //9
// console.log("Result :- ",result);// undefined
//problem of the add2num func is that it does not return the value of 3+6 , it just prints it within the scope of that func, log statement and return statement both are different

function addTwoNum(number1 , number2) {
    let result = number1+number2
    return result
    //return number1+number2 ,,, another way
    console.log("unreachable code"); //as after return kono kaj ar hoy na
}

const result = addTwoNum(3,4) //no op , as no console inside func
// console.log("Result :- ",result);// 7


function loginUserMsg(uname) {
    return `${uname} just logged in`
}

// loginUserMsg("ahana") // no op as result is not captured in any variable

// console.log(loginUserMsg("ahana"));// ahana just logged in 

// console.log( loginUserMsg());// undefined just logged in 


function loginUmsg(uname) {
    // if(!uname){...} if er bhitorer cond true hole tobei loop e enter kore , in this case uname is false as it is undefined, so !umane die true kora holo
    if (uname === undefined) {
        console.log("please provide a user name");
        return
    }
    return `${uname} just logged in`
}

// console.log(loginUmsg());//please provide a user name (nextline) undefined




function loginUmsgDef(uname = 'ami') {
    return `${uname} just logged in`
}
// uname = 'ami' means uname now has a default value , if no argument is passed then ami will come , otherwise given argument will come. NO CHANCE OF UNDEFINED .
console.log(loginUmsgDef()); //ami just logged in
console.log(loginUmsgDef("ahana")); //ahana just logged in


