// function add(a: number, b: number): number {
//     // let res = a + b;
//     // console.log("Результат: " + res);
//     return a + b;
// }
// let res = add(20, 30);
// console.log("Результат: " + res);

// function add(a: number, b: number): void {
//     console.log(a + b);
// }
// add(20, 30);

// необязательные параметры

// function GetName(firstName: string, lastName: string){
//     return firstName + " " + lastName;
// }

// let name1 = GetName("Bakha", "Tursunov");
// console.log(name1);

// function GetName(firstName: string, lastName?: string){
//     if(lastName){
//         return firstName + " " + lastName;
//     }
//     else{
//         return firstName;
//     }
// }

// let name1 = GetName("Bakha", "Tursunov");
// let name2 = GetName("Bakha");

// console.log(name1);
// console.log(name2);

// значение параметров по умолчанию

// function GetName(firstName: string, lastName: string = "Abduev"){
//     if(lastName){
//         return firstName + " " + lastName;
//     }
//     else{
//         return firstName;
//     }
// }

// let name1 = GetName("Bakha", "Tursunov");
// let name2 = GetName("Bakha");

// console.log(name1);
// console.log(name2);

// function DefaultLastName(): string{
//     return "Ganiev";
// }

// function GetName(firstName: string, lastName: string = DefaultLastName()) {
//     if (lastName) {
//         return firstName + " " + lastName;
//     }
//     else {
//         return firstName;
//     }
// }

// let name1 = GetName("Bakha", "Tursunov");
// let name2 = GetName("Bakha");

// console.log(name1);
// console.log(name2);

// тип функции и стрелочные фунции

// function hello(){
//     console.log("Hello");
// }

// const message: ()=>void = hello;
// message();
////////////////////////////////////////
// function Sum(x: number, y: number): number {
//   return x + y;
// }

// function Substract(a:number, b:number): number {
//   return a - b;
// }

// let op: (x: number, y: number) => number;
// op = Sum;
// console.log(op(10, 20));

// op = Substract;
// console.log(op(10, 20));

////////////////////////////////////////

// function Sum(x: number, y: number): number {
//   return x + y;
// }
// function Myltiply(a: number, b: number): number {
//   return a * b;
// }
// function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {
//   return op(x, y);
// }
// console.log(mathOp(10, 20, Sum));
// console.log(mathOp(10, 20, Myltiply));

////////////////////////////////////////

// объединение union

// let id: number | string;
// id = "1234gg56";
// console.log(id);
// id = 123456;
// console.log(id);

// function PrintId(id: number | string) {
//   console.log(`Id: ${id}`);
// }

// let id1: number | string = "asdkfj1234";
// PrintId(id1);
// PrintId(123456);
// PrintId("asdfx");

// function PrintSentence(words: string[] | string) {
//   // если words - строка
//   if (typeof words === "string") {
//     console.log(words);
//   } else {
//     console.log(words.join(" "));
//   }
// }

// PrintSentence(["Язык", "программирования", "TypeScript"]);
// PrintSentence("Язык программирования JavaScript");

////////////////////////////////////////

// null и undefined

// let a: undefined = undefined;
// let b: null = null;

// let x: number = undefined;
// console.log(x);
// x = null;
// console.log(x);
// x = 5;
// console.log(x);

let userId: number | null = null;
function PrintId(id: number | null) {
  if (id === null) {
    console.log("пользователь отсутствует");
  } else {
    console.log(`Id пользователя: ${id}`);
  }
}
PrintId(userId);
userId = 123456;
PrintId(userId);

// Оператор !

// const header: HTMLElement | null = document.getElementById("header");
// header!.innerText = "Hello TypeScript";

