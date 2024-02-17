const accountId = 144553;
let accountEmail = "aa@gmail.com";
var accountPawwword = "12345";
accountCity = "Jaipur"
let accountState;

//accountId = 2; //not allowed
accountEmail = "asd@gmail.com"
accountPawwword = "2132323"
accountCity = "Bengluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPawwword, accountCity, accountState]);

/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/