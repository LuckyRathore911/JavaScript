function fun1(num){
    let x=5
    function fun2(x){
        console.log(x)      // Local value is given preference
        let num=3;
        console.log(num)
    }
    fun2(8);
}
fun1(4);