// Lecture: Block and IIFEs

{
    const a = 2;
    let b = 3;
    var c = 4;
}
console.log(c);
// error
// console.log(a + b);

// ES5
(function() {
    var c = 3;
})();
// error
// console.log(c);
