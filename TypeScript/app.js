"use strict";
class User {
    constructor(_name) {
        this.name = _name;
    }
}
const Tom = new User("Tom");
const header = document.getElementById("header");
if (header) {
    header.innerHTML = `Hello, ${Tom.name}`;
}
