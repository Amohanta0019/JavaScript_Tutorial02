/*
function setUname(uname){ 
    this.uname = uname;     
}

function createUser(uname , mail , pwd) {
    
    setUname(uname);
    
    this.mail = mail;
    this.pwd = pwd;
}

const cu = new createUser("A", "A.a@gmail.com", "001");
console.log(cu); // createUser { mail: 'A.a@gmail.com', pwd: '001' }
*/

/*
function setUname(uname){ 
    this.uname = uname;
    console.log("called");
         
}

function createUser(uname , mail , pwd) {
    
    setUname.call(this , uname);
    
    this.mail = mail;
    this.pwd = pwd;
}

const cu = new createUser("A", "A.a@gmail.com", "001");
console.log(cu); // createUser { mail: 'A.a@gmail.com', pwd: '001' }

//createUser { uname: 'A', mail: 'A.a@gmail.com', pwd: '001' }
*/


let name = {
    firstName : "Ahana",
    lastName : "Mohanta",
    print : function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
//name.print();



let name2 = {
    firstName : "Mamata",
    lastName : "Mohanta",
    /*print : function(){
        console.log(this.firstName+" "+this.lastName);
    } not good if there are too many name func*/
}

// call() => function borrowing
let printName = function(){
    console.log(this.firstName+" "+this.lastName);
}
printName.call(name);
//name.print.call(name2);
printName.call(name2) // call the method by passing reference

let printDetails = function(city, state){
    console.log(this.firstName+" "+this.lastName+" from "+city+", "+state);
}
printDetails.apply(name2 , ["salkia", "WB"])


//bind() => a new function will be generated
let printMyDetails = printDetails.bind(name2, "uttarpara" , "WB");
console.log(printMyDetails); //[Function: bound printDetails]
printMyDetails();
