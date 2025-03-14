// объекты
// let person = { name: "Tom", age: 23 };
// console.log(person.name);
// //альтернативный вариант получения свойства
// console.log(person["name"]);
// ошибка
//person = {name: "bob"};
// let person1: { name: string, age: number } = { name: "Tom", age: 30 };
// console.log(person1.name);
// необязательные свойства
// let person: { name: string, age?: number };
// person = { name: "Bakha", age: 23 };
// console.log(person.name);
// person = { name: "bob" };
// if(person.age == undefined){
//     console.log("age is undefined");
// }
// else{
//     console.log(person.age);
// }
// Объекты в фукнциях
// function PrintUser(user:{name:string,age:number}){
//     console.log(`name: ${user.name} age: ${user.age}`);
// }
// let bob = {name: "bob", age:  44, isMarrided: true};
// PrintUser(bob);
// function DefaultUser(): {name:string, age:number}{
//     return {name:"tom", age:30};
// }
// let user = DefaultUser();
// console.log(`name: ${user.name} age: ${user.age}`);
// Оператор in
// let tom: {name: string, age?:number} = {name: "tom", age:34};
// let bob: {name: string, age?:number} = {name: "bob"};
// function PrintUsers(user:{name: string; age?:number}){
//     if("age" in user){
//         console.log(`name: ${user.name} age: ${user.age}`);
//     }
//     else{
//         console.log(`name: ${user.name}`);
//     }
// }
// PrintUsers(tom);
// PrintUsers(bob);
// Декомпозиция объектов-параметров
function PrintUser(_a) {
    var name = _a.name, age = _a.age;
    console.log("name: ".concat(name, " age: ").concat(age));
}
var tom = { name: "tom", age: 36 };
PrintUser(tom);
