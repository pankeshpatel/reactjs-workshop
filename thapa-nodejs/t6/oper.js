// function definition... 

const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a * b;
};

const name = "Pankesh";

// export add() function
// So other can use it.

// method 1
module.exports.add = add;
module.exports.sub = sub;

// method 2
 module.exports = {add, sub, mult, name};