// Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number ' + self.position + ' ahd it is ' + self.color;
            alert(str);
        });
    }
}

// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' ahd it is ' + this.color;
            alert(str);
        });
    }
}

// box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' ahd it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is firends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bod', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    const arr = friends.map(el => `${this.name} is firends with ${el}`);
    console.log(arr);
}

var friends = ['Bod', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
