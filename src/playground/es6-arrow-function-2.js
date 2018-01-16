
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

const user = {
    name: 'Tom',
    cities: ['Bristol', 'London', 'Cheltenham'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 7],
    multiplyBy: 3,
    multiply() {

        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());