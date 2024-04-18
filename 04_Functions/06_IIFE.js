//immediately invoked function expression
//global scope er pollution or problem ke eliminate korar jonno iffe use kora hoy

function fun1(params) {
    console.log("DB connected 1");
}

fun1();
//fun1 likhle tobei call hbe ,, immediately hbe na

//named iife ,,, name = funIIFE
(function funIIFE(params) {
    console.log("DB connected 2");
})();

//unnamed iife
(   () => {
    console.log("DB Connected 3");
})  ();

//unnamed iife with parameter
(   (name) => {
    console.log(`DB Connected 4 ${name}`);
})  ("ahana");
// in case of IFFE js doesn't know where to end the contest of iife , so ; after each function execution is important









