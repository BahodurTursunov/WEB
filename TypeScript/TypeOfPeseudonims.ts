/*
type id = number| string;
let usersId: id = 2;
console.log(`Id: ${usersId}`);
usersId ="qwerty";
console.log(`Id: ${ usersId }`);
*/

/*
// определяем псевдоним
type id = number | string;

// параметр функции представляет псевдоним
function printIds(inputId: id) {
    console.log(`Id:${inputId}`);
}

//тип результата - псевдоним
function getId(isNumber: boolean): id {
    if (isNumber) {
        return 1;
    } else {
        return "1";
    }
}
printIds(12345);
printIds("12345");
console.log(getId(true));
*/
/*

type Person = { name: string; age: number };

let John: Person = {name: "John", age: 12};
let Baby: Person = {name: "Baby", age: 15};

function PrintPerson(user:Person){
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

PrintPerson(John);
PrintPerson(Baby);
*/

// Расширение псевдонимов
/*
type Person = {name:string};
// расширяем псевдоним Person
type Employee = Person & {companyName: string};

let q: Person = {name: "Tom"};
let e: Employee = {name: "asdf", companyName: "asdf"};

function PrintP(user: Person){
    console.log(`Name: ${user.name}`);
}

PrintP(q);
PrintP(e);*/
