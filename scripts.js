// this keyword
console.log(this); //window

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this); //window
}

calculateAge(1985);

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); //John object
        console.log(2018 - this.yearOfBirth);
        function innerFucntion() {
            console.log(this); //window
        }
        innerFucntion();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();
