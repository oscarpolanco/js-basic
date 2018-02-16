// Rest parameters

// ES5
/*
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18);
    });
}

isFullAge5(1990, 2005, 1965);
isFullAge5(1990, 2005, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2018 - cur) >= 18));
}
isFullAge6(1990, 2005, 1965);
*/

function isFullAge5(limit) {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    });
}

isFullAge5(21, 1990, 2005, 1965);
isFullAge5(1990, 2005, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2018 - cur) >= limit));
}
isFullAge6(16, 1990, 2005, 1965);
