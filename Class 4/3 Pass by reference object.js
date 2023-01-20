function update(student){
    student.name= "Hi "+ student.name;
    console.log('student= ',student);
}
let obj={name:"Lucky"};
//Pass by reference
update(obj);
console.log("obj= ",obj);