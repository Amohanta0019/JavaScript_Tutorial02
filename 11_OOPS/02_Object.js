/*
function tableOF5(num) {
    return num*5;
}
tableOF5.power = 2;
console.log(tableOF5(5));  //25
console.log(tableOF5.power); //2
console.log(tableOF5.prototype); //{} empty object
//moral of the story is that function is a object in js,,, as it has a prototypr of empty object


function createUser(uname, score){
    this.uname = uname;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.print = function(){
    console.log(`price is : ${this.score}`);
}
const tea = new createUser("a",25);
const tea1 = createUser("b",45);
tea.print();
*/
// w/o using new
/*
function createUser(uname, score) {  
    const user = {  
        uname: uname,  
        score: score,  
        increment: function() {  
            this.score++;  
        },  
        print: function() {  
            console.log(`price is : ${this.score}`);  
        }  
    };  
    return user;  
}  

const tea = createUser("a", 25);  
const tea1 = createUser("b", 45);  
tea.print();  
*/


//prototype:-
//============

let name = "Ahana   "
console.log(name.length); //8

console.log(name.truelength);








