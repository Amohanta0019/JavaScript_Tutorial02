const user = {
    uname : "ahana",
    price : 9999,

    welcomeMsg : function (params) {
        console.log(`${this.uname} , welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMsg()//ahana , welcome to our website

user.uname = "mamata"
// user.welcomeMsg()//mamata, welcome to our website

/*
this gives reference to current object
{ uname: 'ahana', price: 9999, welcomeMsg: [Function: welcomeMsg] }
{ uname: 'mamata', price: 9999, welcomeMsg: [Function: welcomeMsg] }
*/
console.log(this); //{} empty object
console.log("ahana");





















