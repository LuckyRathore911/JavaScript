let obj={
    age:25,
    get a(){
        return this.age
    },
    set b(newAge){
        this.age=newAge
    }
}
console.log(obj)
console.log(obj.a)
obj.b=40
console.log(obj.a)

let ob={a:12,b:45}
console.log(ob)
delete ob.a
console.log(ob)