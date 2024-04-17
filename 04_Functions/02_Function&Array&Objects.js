function calculateCartPrice1(num1) {
    return num1
}
// console.log(calculateCartPrice1(2));//2
// console.log(calculateCartPrice1(200,300,400));//200 ,,, only 1st item came , but we want all of them

function calculateCartPriceMany(...num1) {
    return num1
}
// ... is rest opertor (.. is also spread operator,symbol same use case diff) , it jot down all price and returns a  array
// console.log(calculateCartPriceMany(200,300,400,500));//[ 200, 300, 400, 500 ]

function calculateCartPrice2(val1,val2,...num1) {
    console.log("val1 :- ",val1);
    console.log("val2 :- ",val2);
    console.log("num1 :- ",num1);
    return 
}

// calculateCartPrice2(200,300,400,500,4000);
/*
val1 :-  200
val2 :-  300
num1 :-  [ 400, 500, 4000 ]
*/

//creat a user object
const user = {
    umane : "ahana",
    price : 999
}
// anyobject use as a generic name , jekono object ke point korte pare 
function handelObject(anyobject) {
    console.log(`username is ${anyobject.umane} and price is ${anyobject.price}`);
}
// a obj creation er time e price lekha hoi66e tai func declaration er time eo price i likhte hbe , prices likhle hbe na error asbe

handelObject(user)//username is ahana and price is 999
//in this case anyobject = user object

/*
handelObject({
    umane : "ami",
    price : 599,
})
//username is ami and price is 599
*/

// find 2nd element of an array by function
const myArr = [1000,2000, 3000, 4000, 5000]
function handelArray(getArray) {
    return  getArray[1]
}

console.log(handelArray(myArr)); //2000









