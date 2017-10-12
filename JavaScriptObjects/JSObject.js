function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {return this.firstName + " " + this.lastName;};
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML =
myFather.name() + " is " + myFather.age + ". " + myMother.name() + " is " + myMother.age;