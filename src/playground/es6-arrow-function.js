function square(x) {
    return x*x;
}

const squareArrow = (x) => x*x;

console.log(squareArrow(4));
console.log(square(8));

const getFirstName = (name) => {

    return name.split(' ')[0];
}

console.log(getFirstName('Tom Brad'));

const getName = name => name.split(' ')[0];

console.log(getName('Tommy Thumb'));