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
    constructor(name, buildYear, area, trees) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
        this.age = this.calculateAge(this.buildYear);
    }

    calculateAge(year) {
        return new Date().getFullYear() - year;
    }

    treeDestiny() {
        const destiny = this.trees / this.area;
        console.log(`${this.name} has a tree destiny of ${destiny} trees per square km.`);
    }
}

class Street extends Elements {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classificationStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)}`);
    }
}

const parks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const streets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {

    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);

    return [sum, sum / arr.length];

}

function reportParks(parks) {

    console.log('----PARKS REPORT----');

    // destiny
    parks.forEach(el => el.treeDestiny());

    // average age
    const ages = parks.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avAge] = calc(ages);
    console.log(`Our ${parks.length} parks have an average of ${avAge} years.`);

    // which park have more than 1000 trees
    const i = parks.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${parks[i].name} has more than 1000 trees.`);

};

function reportStreets(streets) {

    console.log('----STREETS REPORT----');

    // Total average length of town's STREETS
    const [totalLenght, avLenght] = calc(streets.map(el =>  el.length));
    console.log(`Our ${streets.length} have a total length of ${totalLenght} km, with an average of ${avLenght} km.`);

    // Classify sizes
    streets.forEach(el => el.classificationStreet());
};

reportParks(parks);
reportStreets(streets);
