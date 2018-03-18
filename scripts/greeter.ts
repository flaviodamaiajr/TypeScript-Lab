class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string, public age: any) {
        if (age) {
            this.fullName = firstName + " " + middleInitial + " " + lastName + ". You have " + age + " years old.";
        } else {
            this.fullName = firstName + " " + middleInitial + " " + lastName + ".";
        }
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hey! Mr. " + person.middleInitial;
}

function greeterFullName() {
    return "Hey! Mr. " + new Student("Flávio", "Da Maia", "Júnior", null).fullName;
}

let user = new Student("Flávio", "Da Maia", "Júnior", "");

//document.getElementById('greeter').innerHTML = greeterFullName();
document.getElementById('greeter').innerHTML = greeter(user);
