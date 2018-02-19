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

class Elements {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Elements {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
        this.destiny = this.trees / this.area;
        this.age = this.calculateAge(this.buildYear);
    }

    calculateAge(year) {
        return new Date().getFullYear() - year;
    }
}

class Street extends Elements {
    constructor(name, buildYear, length) {
        super(name, buildYear);
        this.length = length;
        this.classification = this.getClassification();
    }

    getClassification() {
        switch (true) {
            case this.length <= 1:
                return 'tiny';
                break;
            case this.length <= 2:
                return 'small';
                break;
            case this.length <= 3:
                return 'big';
                break;
            case this.length > 3:
                return 'huge';
                break;
            default:
                return 'normal';
        }
    }
}

function calculateAverage(property, items) {
    let sum = 0;
    for (let current of items) {
        sum += current[property];
    }
    return sum / items.length;
};

function mostTrees(items) {
    let name;
    for (let current of items) {
        if(current.trees > 1000) {
            name = current.name;
        }
    }
    return name;
};

function calculatelength(streets) {
    var sum = 0;
    for (let current of streets) {
        sum += current.length;
    }
    return sum;
};

function logParkReport (elements) {
    const parks = elements.get('parks');
    console.log('----PARKS REPORT----');
    console.log(`Our ${parks.length} have an average of ${elements.get('Average park')}`);
    for (let current of parks) {
        console.log(`${current.name} has a tree destiny of ${current.destiny} trees per square km`);
    }
    console.log(`${elements.get('Most trees')} has more than 1000 trees.`);
};

function logStreetsReport(elements) {
    const streets = elements.get('streets');
    console.log('----STREETS REPORT----');
    console.log(`Our ${streets.length} have a total length of ${elements.get('Total length')} km, with an average of ${elements.get('Average street')} km.`);
    for (let current of streets) {
        console.log(`${current.name}, build in ${current.buildYear}, is a ${current.classification} street.`);
    }
};

const parks = [];
parks[0] = new Park('Green Park', 1960, 1000, 5000);
parks[1] = new Park('National Park', 1980, 1500, 5000);
parks[2] = new Park('Oak Park', 1990, 900, 5000);

const streets = [];
streets[0] = new Street('Ocean Avenue', 1999, 7.1);
streets[1] = new Street('Evergreen Street', 2008, 7.1);
streets[2] = new Street('4th Street', 2015, 7.1);
streets[3] = new Street('Sunset Boulevard', 1982, 7.1);

const elements = new Map([
    ['parks', parks],
    ['streets', streets],
    ['Average park', calculateAverage('age', parks)],
    ['Most trees', mostTrees(parks)],
    ['Average street', calculateAverage('length', streets)],
    ['Total length', calculatelength(streets)]
]);

logParkReport(elements);
logStreetsReport(elements);
