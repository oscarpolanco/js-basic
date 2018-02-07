// closures

function retirement(retirementAge) {
    var a = ' year left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(55);
var retirementIceland = retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var john = interviewQuestion('designer');
var jane = interviewQuestion('teacher');

console.log(john('John'));
console.log(jane('Jane'));
