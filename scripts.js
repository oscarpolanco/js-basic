// Hoisting
// functions
calculateAge(1995);
function calculateAge(year) {
    console.log(2018 - year);
}

// retirement(1965);

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1990);

// variables
console.log(age);
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
