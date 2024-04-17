//const tinderUser = new object() --> singelton obj


const regularUser ={
    email : "person@gmail.com",
    fullname :{
        uname :{
            firstName : "123",
            lastName : "abc"
        }
    }
}

// console.log(regularUser.fullname.uname.firstName); //123


const obj1 = {1 : "a", 2 : "b", 3 : "c"}
const obj2 = {4 : "x", 5 : "y", 6 : "z"}
// const obj3 = {obj1,obj2}
// {
    //     obj1: { '1': 'a', '2': 'b', '3': 'c' },
    //     obj2: { '1': 'x', '2': 'y', '3': 'z' }
    //   }

const obj3 = Object.assign(obj1,obj2)
// o = assign(target,source) --> o==target
//terget er moddhe new array store hbe
// { '1': 'a', '2': 'b', '3': 'c', '4': 'x', '5': 'y', '6': 'z' }
// console.log(obj3);
// console.log(obj1 == obj3); //true

const obj4 = Object.assign({},obj1,obj2)
//here target is {}
// console.log(obj4);
// console.log(obj4 == obj3); //false

const obj5 = {...obj1, ...obj2}
// console.log(obj5);

const dbUser = [
    {
        id: 1,
        email : "a@gmail.com"
    },
    {
        id: 2,
        email : "b@gmail.com"
    },
    {
        id: 3,
        email : "c@gmail.com"
    },
    {
        id: 4,
        email : "d@gmail.com"
    }
]

// console.log(dbUser[1].id); //2


const tinderUser = {} // non-singelton obj

tinderUser .id = "123abc"
tinderUser.name = "xyz"
tinderUser.isLoggedIn = false
console.log(tinderUser);

console.log(Object.keys(tinderUser));// return type array ... id,name,isloggedin
console.log(Object.values(tinderUser));// return type array ... 123abc , xyz, false
console.log(Object.entries(tinderUser));// return type array ...[ [ 'id', '123abc' ], [ 'name', 'xyz' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true










