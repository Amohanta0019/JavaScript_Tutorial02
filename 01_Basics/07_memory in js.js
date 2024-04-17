 // stack (primitive) & heap memory(non-primitive)

let myName = "ahana"
let anothername = myName
anothername = "mohanta"
console.log(myName); //ahana
console.log(anothername);//mohanta

let user1={
    mail : "user@google.com",
    upi : "user@ybl"
}
console.log(user1.mail);  //user@google.com
console.log(user1.upi); //user@ybl

let user2=user1
user2.mail = "ahana@google.com"
user2.upi = "ahana@ybl"

console.log(user1.mail); //ahana@google.com
console.log(user1.upi); //ahana@ybl

 

















