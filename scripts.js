// Primative vs Objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj = {
    name: 'John',
    age: 26
}

var obj2 = obj;
obj.age = 30;

console.log(obj.age);
console.log(obj2.age);

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
