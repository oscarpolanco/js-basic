'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Suppose that you're working in a small town administration, and you're in charge
of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All
parks and streets have a name and a build year.

At an end-of-year meeting; your boss wants a final report with the following:
1. Tree destiny of each park in the town (formula: number of trees/parks area)
2. Average age of each town's park(formula: sum all ages/number of park)
3. The name of the park that has more than 1000 trees
4. Total and average length of town's Streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size
is unknown, the default is normal

all the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template string, defaut
parameters, maps, arrow functions, destructuring, etc.
*/

var Elements = function Elements(name, buildYear) {
    _classCallCheck(this, Elements);

    this.name = name;
    this.buildYear = buildYear;
};

var Park = function (_Elements) {
    _inherits(Park, _Elements);

    function Park(name, buildYear, area, trees) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

        _this.trees = trees;
        _this.area = area;
        _this.age = _this.calculateAge(_this.buildYear);
        return _this;
    }

    _createClass(Park, [{
        key: 'calculateAge',
        value: function calculateAge(year) {
            return new Date().getFullYear() - year;
        }
    }, {
        key: 'treeDestiny',
        value: function treeDestiny() {
            var destiny = this.trees / this.area;
            console.log(this.name + ' has a tree destiny of ' + destiny + ' trees per square km.');
        }
    }]);

    return Park;
}(Elements);

var Street = function (_Elements2) {
    _inherits(Street, _Elements2);

    function Street(name, buildYear, length) {
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

        _this2.length = length;
        _this2.size = size;
        return _this2;
    }

    _createClass(Street, [{
        key: 'classificationStreet',
        value: function classificationStreet() {
            var classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            console.log(this.name + ', build in ' + this.buildYear + ', is a ' + classification.get(this.size));
        }
    }]);

    return Street;
}(Elements);

var parks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

var streets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {

    var sum = arr.reduce(function (prev, curr, index) {
        return prev + curr;
    }, 0);

    return [sum, sum / arr.length];
}

function reportParks(parks) {

    console.log('----PARKS REPORT----');

    // destiny
    parks.forEach(function (el) {
        return el.treeDestiny();
    });

    // average age
    var ages = parks.map(function (el) {
        return new Date().getFullYear() - el.buildYear;
    });

    var _calc = calc(ages),
        _calc2 = _slicedToArray(_calc, 2),
        totalAge = _calc2[0],
        avAge = _calc2[1];

    console.log('Our ' + parks.length + ' parks have an average of ' + avAge + ' years.');

    // which park have more than 1000 trees
    var i = parks.map(function (el) {
        return el.trees;
    }).findIndex(function (el) {
        return el >= 1000;
    });
    console.log(parks[i].name + ' has more than 1000 trees.');
};

function reportStreets(streets) {

    console.log('----STREETS REPORT----');

    // Total average length of town's STREETS

    var _calc3 = calc(streets.map(function (el) {
        return el.length;
    })),
        _calc4 = _slicedToArray(_calc3, 2),
        totalLenght = _calc4[0],
        avLenght = _calc4[1];

    console.log('Our ' + streets.length + ' have a total length of ' + totalLenght + ' km, with an average of ' + avLenght + ' km.');

    // Classify sizes
    streets.forEach(function (el) {
        return el.classificationStreet();
    });
};

reportParks(parks);
reportStreets(streets);
