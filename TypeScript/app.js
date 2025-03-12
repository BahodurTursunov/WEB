var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var Tom = new User("Tom");
var header = document.getElementById("header");
if (header) {
    header.innerHTML = "Hello, ".concat(Tom.name);
}
