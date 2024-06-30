const coding = ["javascript", "java", "cpp", "python"];

//what does forEach loop return ??
// NOTHING
const values = coding.forEach(
    (item) => {
        // console.log(item);
    }
)
// console.log(values); //undefined

//writing return statement manually
const values1 = coding.forEach(
    (item) => {
        // console.log(item);
        return item;
    }
)
// console.log(values1); //undefined







// when we want to get something back from loop with some conditions then use filter
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = mynums.filter(
    (num) => num > 4
)
// console.log(newnums);

const newnums1 = mynums.filter(
    (num) => { return num > 4 }
)
//here return keyword is important as it is inside a {}, so it has a scope, from scope if we want back something we have to write return
// console.log(newnums1);


//using forEach:-
const newnums2 = []
mynums.forEach(
    (num) => {
        if (num > 4) {
        newnums2.push(num);
        }
    }
)
// console.log(newnums2);


//*****************************************************************************

//filter more examples:-
//=======================
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter(
    (bks) => bks.genre === "History"
)
userBooks = books.filter(
    (bks) =>  bks.publish >= 1995 && bks.genre === "History"
)
console.log(userBooks);








