//dates

let myDate = new Date()
// console.log(myDate);//2024-04-09T04:03:39.829Z

// console.log(myDate.toString());//Tue Apr 09 2024 04:04:02 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());//Tue Apr 09 2024

// console.log(myDate.toLocaleString());//4/9/2024, 4:06:31 AM

// console.log(typeof(myDate));//object

let myDate1 = new Date(2023, 0,23)
// console.log(myDate1);//2024-01-23T00:00:00.000Z

// console.log(myDate1.toDateString());//Tue Jan 23 2024
/*
If any parameter overflows its defined bounds, it "carries over". For example, if a monthIndex greater than 11 is passed in, those months will cause the year to increment; if a minutes greater than 59 is passed in, hours will increment accordingly, etc. Therefore, new Date(1990, 12, 1) will return January 1st, 1991; new Date(2020, 5, 19, 25, 65) will return 2:05 A.M. June 20th, 2020.

in case of underflows, it "borrows" from the higher positions. For example, new Date(2020, 5, 0) will return May 31st 2020
*/

// let myCreatedDate = new Date("01") //1/1/2001, 12:00:00 AM
let myCreatedDate = new Date("01-14-2024") //1/14/2024, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1712671459167 (in millisec)
// console.log(myCreatedDate.getTime()); //1705190400000(in millisec)
//###
// console.log(Math.floor(Date.now()/1000)) //1712671714 (in sec)

let newDate = new Date()
// console.log(newDate.getTimezoneOffset()); //0
// console.log(newDate.getVarDate); //undefined








