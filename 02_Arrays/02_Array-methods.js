const marvel = ['iron-man', 'captain america', 'thor']

const dc = ['superman','batman','flash']

// marvel.push(dc)
// console.log(marvel);//['iron-man','captain america','thor',[ 'superman', 'batman', 'flash' ]] .... 2-D array not concatenation of arrays

// console.log(marvel[3]); //[ 'superman', 'batman', 'flash' ]
// console.log(marvel[3][0]); // superman

// const mixed = marvel.concat(dc)
// console.log(mixed);//['iron-man', 'captain america', 'thor','superman','batman','flash']

const mixed = [...marvel , ...dc]
// console.log(mixed);//['iron-man', 'captain america', 'thor','superman','batman','flash']


const arr2 = [1,2,3,[4,5,[8,9,10],[11,12]],[13,14]]
const realArr = arr2.flat(Infinity)
// console.log(realArr);//[ 1,  2,  3,  4,  5, 8,  9, 10, 11, 12, 13, 14]


// console.log(Array.isArray("ahana"));// false
// console.log(Array.from("ahana"));//[ 'a', 'h', 'a', 'n', 'a' ]

// console.log(Array.from({name:"ahana"}));//[] ... can't understand what to give so empty array as op



let score1 = 100,score2 = 200, score3 = 300
console.log(Array.of(score1,score2,score3));//[100,200,300]







