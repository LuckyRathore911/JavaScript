console.log(num1);//[Function: num1]
console.log(num1());  //1
function num1(){
    return 1;
}
console.log(num1());   //1


console.log(num2); //undefined
//console.log(num2());  //TypeError: num2 is not a function
var num2= function(){
    return 2;
}
console.log(num2());   //2


//console.log(num3);   //ReferenceError: Cannot access 'num3' before initialization
//console.log(num3());   //ReferenceError: Cannot access 'num3' before initialization
const num3= function(){
    return 3;
}
console.log(num3());   //3