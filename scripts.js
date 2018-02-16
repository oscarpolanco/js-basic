// Classes

// ES5
function Person5(name, yearOfbirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfbirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

// ES6
class Person6 {
    constructor (name, yearOfbirth, job) {
        this.name = name;
        this.yearOfbirth = yearOfbirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfbirth;
        console.log(age);
    }

    // Only can be use by the class not by the intances
    static greeting() {
        console.log('Hey there!');
    }
}

var john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge();
Person6.greeting();
