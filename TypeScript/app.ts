class User {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }
}
const Tom: User = new User("Tom");
const header = document.getElementById("header");
if (header) {
  header.innerHTML = `Hello, ${Tom.name}`;
}


