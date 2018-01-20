// arrays
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names[1]);

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher.');
}
