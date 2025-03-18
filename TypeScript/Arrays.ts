/*
let list: number[] = [10, 20, 40];
let colors: string[] = ["red", "green", "blue"];
console.log(list[2]);
console.log(colors[1]);

const people = ["Tom", "Bob"];
people[1] = "Jinni";
console.log(people[1]);


const people1: ReadonlyArray<string> = ["Tom", "Bob", "Jinni"]; // способ 1
const people2: readonly string[] = ["Tom", "Bob"]; // способ 2

function Print(users: readonly string[]) {
    for (const user of users) {
        console.log(user);
    }
}

function UsersToString(users: ReadonlyArray<string>): String {
    return users.join(", ");
}
const p: readonly string[] = ["Tom", "Bob"];
Print(p);
console.log(UsersToString(p));

*/

// декомпозиция массивов

const people: string[] = ["Tom", "Bob", "Sam","a", "b"];
const [first, second, third] = people;
console.log(first);
console.log(second);
console.log(third);

const[perviy, ...rest] = people;
console.log(perviy);
console.log(rest[3]);