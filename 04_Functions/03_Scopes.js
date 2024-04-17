/*
let a = 10
const b = 20
var c = 30
*/
//global scope
let a = 100
var c = 300
d = 400
if (true) {
    //block scope
    let a = 10
    const b = 20
    var c = 30
    d = 40
    console.log("In block scope :-", a);
}

// console.log(a); // error as a is not declared within the scope
// console.log(b);//error as a is not declared within the scope
// console.log(c); //30 not 300 ,, var er if er baire asar kotha chilo na but tao value chole ese66e
// console.log(d);// 40
console.log("In global scope :- ", a); // 100

/*node die prog run korabar time e jake global scope boli seta browser er global scope er theke alada ,,,[see DOM]
*/























