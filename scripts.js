// Lecture: let and const

// ES5
var name5 = 'James Smith';
var age5 = 23;
name5 = 'James Miller';
console.log(name5);

// ES6
const name6 = 'James Smith';
let age6 = 23;
// Error
// name6 = 'James Miller';
// console.log(name6);

// ES5
function driverLicense(passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + 'born in ' + yearOfBirth + ' is now officially allow to drive a car');
};

driverLicense(true);

// ES6
// let and const are block scope not function scope like var
function driverLicense6(passedTest) {
    // Error
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + 'born in ' + yearOfBirth + ' is now officially allow to drive a car');
};

driverLicense6(true);

let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
