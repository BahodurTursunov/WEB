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


function DefaultLastName(): string{
    return "Ganiev";
}

function GetName(firstName: string, lastName: string = DefaultLastName()) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}

let name1 = GetName("Bakha", "Tursunov");
let name2 = GetName("Bakha");

console.log(name1);
console.log(name2);

