function Employee(mobile){
    this.dept="Engineer"
    this.mobile=mobile
}
function Manager(name){
    Employee.call(this)                                //connects Employee and Manager 
    this.name=name
}
let a= new Manager("Lucky")
console.log(a)
console.log(a.__proto__)
Manager.prototype= Object.create(Employee.prototype)          //Employee is the parent of Manager
Manager.prototype.constructor=Manager

let b= new Manager("Princy")
console.log(b)
console.log(b.__proto__)
console.log(b.__proto__.__proto__)
b.email="Princy@gmail.com"
console.log(b)