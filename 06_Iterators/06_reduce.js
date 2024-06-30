const arr = [1, 2, 3]

const initialVal = 0;

//if there is a array of elements which we want to access sequentially then use reduce. In reduce there is a accumulator(initial value must be provided) and current value which will be accessed from array

//using function:-
//=================
/*
const total = arr.reduce(
    function (accumulator, currentVal) {
        console.log(`accumulator = ${accumulator}  currentVal = ${currentVal}`)
        return accumulator+currentVal;
    },initialVal // initialVal  is 1st accumulator
)
console.log(total);
*/



//using arrow function:-
//=======================
const total1 = arr.reduce(
    (accumulator, currentVal) =>
        accumulator + currentVal
    , initialVal
)
console.log(total1);


//add all values inside shopping_cart:-
//=====================================
const shopping_cart = [
    {
        item : "full stack web developer course",
        price : 299
    },
    {
        item : "full stack java developer course",
        price : 999
    },
    {
        item : "data-science course",
        price : 1999
    },
    {
        item : "android development course",
        price : 2999
    },
    {
        item : "cyber security course",
        price : 3999
    }
]

const priceToPay = shopping_cart.reduce(
    (accumulator,currentVal) => {return accumulator + currentVal.price},0
)
console.log(priceToPay);













