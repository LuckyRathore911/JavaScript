const str= String("Dehradun,Lucknow,Bhopal,Imphal")
let strArray= str.split(',')
//let strArray2= str.split()
console.log(strArray)
strArray.forEach(s=>{
    console.log("It is ",s);
})