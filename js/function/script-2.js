//Привязка контекста

let User = {
    name: "John",
    lastname: "Doe"
}

function getFullName() {
    return `${this.name} ${this.lastname}`
}

console.log(getFullName.bind(User)());
