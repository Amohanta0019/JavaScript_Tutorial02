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

