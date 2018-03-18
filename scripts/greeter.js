var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        if (age) {
            this.fullName = firstName + " " + middleInitial + " " + lastName + ". You have " + age + " years old.";
        }
        else {
            this.fullName = firstName + " " + middleInitial + " " + lastName + ".";
        }
    }
    return Student;
}());
function greeter(person) {
    return "Hey! Mr. " + person.middleInitial;
}
function greeterFullName() {
    return "Hey! Mr. " + new Student("Flávio", "Da Maia", "Júnior", null).fullName;
}
var user = new Student("Flávio", "Da Maia", "Júnior", "");
//document.getElementById('greeter').innerHTML = greeterFullName();
document.getElementById('greeter').innerHTML = greeter(user);
