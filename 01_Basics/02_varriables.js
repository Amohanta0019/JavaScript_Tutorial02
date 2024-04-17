const  accountId = 144553
// constant data-type , can't change

// can declare a variable as let or var
let accountEmail = "ahana@aot.com"
var accountPwd = "123"
//can declare a var w/o data-type, although not recommended
accountCity = "kolkata"

let accountState
//not assign a value , so undefined 
// accountId = 9 //TypeError: Assignment to constant variable.
accountEmail = "mohanta@aot.com"
accountCity = "london"
console.log(accountId);
console.table([accountId, accountEmail , accountPwd, accountCity, accountState])

/*
prefers not to use var due to scope issues
var use korle ekjaigai value change korle sob jaigai reflect hbe
 */







