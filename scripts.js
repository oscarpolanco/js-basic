// scope
var a = 'Hello';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey';
        console.log(a + b + c);
    }
}

var d = 'Hello';
third();

function third() {
    var e = 'Hi!';
    fourth();

    function fourth() {
        var f = 'Hey';
        fifth();
    }
}

function fifth() {
    var g = 'John';
    // console.log(f);
    console.log(d + g);
}
