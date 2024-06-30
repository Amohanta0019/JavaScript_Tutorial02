const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = mynums.map(
    (num) => { return num + 10 }
)
// console.log(newnums);

const newnums1 = mynums.map(
    (num) => { return num * 10 } //10, 20, 30, 40,  50, 60, 70, 80, 90, 100
).map(
    (num) => { return num + 1 } //11, 21, 31, 41,  51, 61, 71, 81, 91, 101
).filter(
    (num) => { return num > 40 } //41,  51, 61, 71, 81, 91, 101
)
console.log(newnums1);


























