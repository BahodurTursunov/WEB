/*
class Person{
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    Print():void{
        console.log(`Name: ${this._name}`);
    }
}

class Employee extends Person{
    company: string = "";
    work(){
        console.log(`${this._name} работает в компании ${this.company}`);
    }
}

let bob: Employee = new Employee("Bob");
bob.company = "Microsoft";
bob.Print()
bob.work();*/

// переопределение конструктора
/*

class Person{
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    Print():void{
        console.log(`Name: ${this._name}`);
    }
}

class Employee extends Person{
    company: string = "";
    constructor(name: string, company: string) {
        super(name);
        this.company = company;
    }
    work(){
        console.log(`${this._name} работает в компании ${this.company}`);
    }
}

let bob: Employee = new Employee("Bob", "Microsoft");
bob.Print()
bob.work();*/

// переопределение методов

class Person {

    name: string;
    constructor(name: string) {

        this.name = name;
    }
    print(): void {
        console.log(`Имя: ${this.name}`);
    }
}

class Employee extends Person {

    company: string;
    constructor(name: string, company: string) {

        super(name);
        this.company = company;
    }
    print(): void {
        super.print();
        console.log(`Работает в компании: ${this.company}`);
    }
}

let bob: Employee = new Employee("Bob", "Microsoft");
bob.print();