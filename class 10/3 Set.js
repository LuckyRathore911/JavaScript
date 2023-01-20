//Set allows only unique values in it
let s=new Set()
console.log(s)
s.add(12);
s.add(32);
s.add(22);
s.add(12);
console.log(s)  //maintains size

if(s.has(12))                        //has
    console.log("Set has 12")
console.log(s.size)                  //size
s.delete(22)                         //delete
console.log(s.size)

for (let e of s)                     //for of
    console.log("e=",e)    