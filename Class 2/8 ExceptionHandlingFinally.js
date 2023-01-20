function validateUser(name, password){


try
{
/*
.
.
*/
if(name.length<5)
    throw new Error("User name is too short");
if(password.length<5)
    throw new Error("Password is too short");

console.log("Working");
/*
.
.
*/
return "In try";
}

catch(error)
{
    //console.log(error);
    return "Fail in catch";
}

finally
{
    console.log("Inside finally block");
    return "From finally";// overwrite the previous return
}
}
let name="Lucky";
let password="12312345";
let msg=validateUser(name,password);
console.log("user ",msg);