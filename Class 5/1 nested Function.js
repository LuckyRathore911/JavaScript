function f1(a){
    function f2(b){
        console.log(b*b*b);
    }
    f2(a)
}
f1(4);

console.log("========");

function sq(num){
    function pr(){
        return num*num;
    }
    let x= pr();
    return x;
}
let y=sq(6);
console.log(y);