function mult(m,a,b,c){
    if(a!=undefined)
        console.log(m*a)
    if(b!=undefined)
        console.log(m*b)
    if(c!=undefined)
        console.log(m*c)
}
mult(7,2)
console.log("===")
mult(7,5,6)
console.log("===")
mult(7,0,9,7)


console.log("Rest Operator")
function mult2(m,...arg){
    //console.log(arg)
    arg.forEach(element=>{console.log(m*element)});
}
mult2(7,2)
console.log("===")
mult2(7,5,6)
console.log("===")
mult2(7,0,9,7)