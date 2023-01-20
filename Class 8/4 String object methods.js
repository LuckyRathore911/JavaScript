const str="Hello World, I'm here."
console.log(str.charAt(0))
console.log(str[0])
console.log(str.indexOf('l'))
console.log(str.lastIndexOf('l'))
console.log(str.indexOf('H'))
console.log(str.indexOf('h'))   // case sensitive

if(str.startsWith('H'))
    console.log("Yes H")
else
    console.log("No H")

if(str.endsWith('.'))
    console.log("Yes .")
else
    console.log("No .")

if(str.includes('here'))
    console.log("Yes here")
else
    console.log("No here")


let str2=" I'm going."
console.log(str.concat(str2))
console.log(str+str2)
