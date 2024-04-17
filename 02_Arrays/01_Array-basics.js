//array

// const myArr = [0,1,2,3.3, true, 'ahana', ]
// console.log(myArr);//[ 0, 1, 2, 3.3, true, 'ahana' ]
// in js arrays are resizeable

// console.log(myArr[0]);//0

const arr = new Array(1,3,4,67,79);
// console.log(arr);

//array methods

arr.push(54)//[ 1, 3, 4, 67, 79, 54 ]
arr.pop()//[ 1, 3, 4, 67, 79 ]
arr.unshift(7)//[ 7, 1, 3, 4, 67, 79 ]
arr.shift()//[ 1, 3, 4, 67, 79 ]
// console.log(arr);

// console.log(arr.includes(10));//false
// console.log(arr.indexOf(10));//-1 means there is no element

const newArr = arr.join()
// console.log(arr);//[ 1, 3, 4, 67, 79 ]
// console.log(newArr);//1,3,4,67,79
// console.log(typeof newArr);//string

//slice & splice

console.log("a", arr);
//last index not included & original array remains same after slicing
const myn1 = arr.slice(1,3)
console.log(myn1);//[ 3, 4 ]
console.log("b", arr);//b [ 1, 3, 4, 67, 79 ]
console.log();
//last range included & original array changed , only remaining portion included
const myn2 = arr.splice(1,3)
console.log(myn2); //[ 3, 4, 67 ]
console.log("c", arr);//c [ 1, 79 ]













