// singelton

// obj literals

const mySymbol = Symbol("key")
const juser = {
    name1 : "ahana",
    "full name" : "ahana mohanta",
    // mySymbol : "mykey",
    [mySymbol] : "mykey",
    age : 20,
    location : "kol",
    mail : "ahana@google.com",
    isLoggedIn : true,
    lastLoggInDays : ['mon','tue']
}

//name1 --> "name1" processed as sting literal
// console.log( juser.mail);//ahana@google.com
// console.log( juser["mail"]);//ahana@google.com

// console.log(juser.full name); //error
// console.log(juser["full name"]);//ahan mohanta

// console.log(juser.mySymbol); // mykey
// console.log(typeof juser.mySymbol); // string

// console.log(juser[mySymbol]);//mykey
// console.log(typeof juser[mySymbol]); //string

juser.mail = "mohanta@google.com"
// console.log(juser.mail);//mohanta@google.com

// Object.freeze(juser)
juser.mail = "mohanta@microsoft.com"
// console.log(juser.mail);//mohanta@google.com

// console.log(juser);


juser.greeting = function(params) {
    console.log("good night!!!");
}
// console.log(juser.greeting);//[Function (anonymous)]
console.log(juser.greeting());//good night!!! undefined


juser.greeting1 = function(params) {
    console.log(`good night!!! , ${this.name1}`);
}
console.log(juser.greeting1());//good night!!! , ahana undefined







