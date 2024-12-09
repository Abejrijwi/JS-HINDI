const accountId = 123456789
let accountEmail = "abejrijwivmu@gmail.com"
var accountPassword = "123456"
accountCity = "Hajipur"
let accountState;

//accountId = 123456789 // without const Not Allowed 

accountEmail = "abejrijwi@gmail.com"
accountPassword = "12345"
accountCity = "Patna"

/*

prefer not to use var
because of issue in block scope and functional scope

*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
