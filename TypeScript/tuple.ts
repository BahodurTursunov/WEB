// кортежи

/*let user: [string, number] = ["Tom", 25];

console.log(user[1]);

user[1] = 30;
console.log(user[1]);

for (const prop of user) {
    console.log(prop);
}*/

// Кортежи в функциях
/*кортежи как параметры функции*/

/*
function PrintUser(user: [string, number]) {
    console.log(user[0]);
    console.log(user[1]);
}

let gom: [string, number] = ["Tom", 25];
PrintUser(gom);
*/

/*кортеж как результат фукнции*/
/*function CreateUser(name: string, age: number): [string, number] {
    return [name, age];
}

let user = CreateUser("Bob", 45);
console.log(user[0]);
console.log(user[1]);*/


// необязательные элементы кортежей

function PrintUser(user: [string, number, boolean?]) {
    if (user[2] !== undefined)
        console.log(`name: ${user[0]} age: ${user[1]} isMarried: ${user[2]}`);
    else
        console.log(`name: ${user[0]} age: ${user[1]}`);
}
let a:[string, number, boolean] =["Bob", 41, true];
let b:[string, number] =["Bobbbb", 41];
PrintUser(a);
PrintUser(b);