/*
Coding challenge 2
1. Create an array with some years where persons were born.
2. Create an empty array.
3. Use a lopp to fill the array with the ages of the persons.
4. Use another another loop to log into the console wheter
each person is of full age, as well as their age.
5. Finally, create a function called printFullAge with recives
the array of years as an argument, executes the steps 2, 3 and 4
and return de array of true/false boolean values: true if the
person is full age and false if not.
6. Call the function with 2 different arrays and store the results
in 2 variables full_1 and full_2
Example:
input => [1965, 2008, 1992]
output => [true, false, true]
*/

var full_1 = [1965, 2009, 1992];
var full_2 = [1992, 2009, 1965];

function printFullAge(yearsOfBirth) {
    ages = [];
    for (var i = 0; i < yearsOfBirth.length; i++) {
        ages[i] = 2018 - yearsOfBirth[i];
    }

    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Is full age and his birth year is ' + ages[i]);
            ages[i] = true;
        } else {
            console.log('Is not full age and his birth year is ' + ages[i]);
            ages[i] = false;
        }
    }

    return ages;
}

console.log(printFullAge(full_1));
console.log(printFullAge(full_2));
