function validateuser(name,password)
{
    console.log(name,password);
    if(name==""){
        console.log("Invalid Username");
        //return;
    }
    else if(password==""||password.length<8){
        console.log("Invalid Password");
        //return;
    }
    console.log("Conditions ended:)");
}
let n="Lucky Rathore";
let p="Lucky911";
validateuser(n,p);