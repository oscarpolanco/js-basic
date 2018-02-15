// Lecture: strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + ' years old.');

// ES6
// Template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));
console.log(n.endsWith('h'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(n.includes('Sm'));
console.log(`${firstName} `.repeat(5));
