// objects methods
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jame', 'Mark', 'Bod'],
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;
console.log(john);

john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jame', 'Mark', 'Bod'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
