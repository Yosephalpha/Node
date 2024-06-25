//var  => we can redeclare and reassign ✅
//let => we cannot redeclare but can reasign ✅
//const => neither redeclare nor reassign ✅

var a = 10;
//var a => declaration
//a = 10 => assignment

//var  => redeclaration
var a = 10;
var a = 20;
console.log(a); //20

//var  => reassignment

var b = 10;
b = 20;
console.log(b);

//let  => redeclaration
// let z = 10
// let z = 20
// console.log(z)//SyntaxError: Identifier 'z' has already been declared

//let  => reassignment

let z = 10;
z = 20;
console.log(z);

//const  - redeclaration

// const x = 10
// const x = 50
// console.log(x)//SyntaxError: Identifier 'x' has already been declared

//const  - reassignment

// const result = 100
// result = 200
// console.log(result)//TypeError: Assignment to constant variable.

//var => global , function scope
//let, const  => block scope

function func() {
    var data = "hello";
    return data;
}

console.log(func());

{
    var y1 = 10;
    let y2 = 20;
}

// console.log(y2)
//can a block hold var or will it leak outside? yes

//function => es5

function double() {
    var n = 20;
    return n * 2;
}

console.log("double=>", double());

//es6 => arrow function

const double1 = (n) => n * 2;

console.log("double1=>", double1(20));

//object => { k: v}

var obj1 = {
    name: "Jack",
    age: 20,
};
console.log(obj1.name);
console.log(obj1.age);

//destructuring

const { name, age } = obj1;

console.log(name);
console.log(age);

//assign - es5

var o1 = {
    firstName: "John",
    lastName: "Andrew",
};

var o2 = {
    age: 20,
    city: "London",
};

var o3 = Object.assign(o1, o2);
console.log("es5- object", o3);

//es6 => spread operator

var o3 = { ...o1, ...o2 };
console.log("es6- object", o3);

//es5 => string literals

//An Avengers is an action movie with rating of 5 and its from category Hollywood

var movieName = "Avengers";
var type = "Action";
var rating = 5;
var category = "Hollywood";

var output =
    "An " +
    movieName +
    " is an " +
    type +
    " movie with rating of " +
    rating +
    " and its from category " +
    category +
    "";
console.log("es5 output=>", output);

//es6 => Template literals => `` => backtick +  interpolation ${} => substitute the value

var output = `An ${movieName} is an ${type} movie with rating of ${rating} and its from category ${category}`;
console.log("es6 output=>", output);


export const student = {
    name: "Piyush",
    batch: "nodeJS"
}

// module.exports = student


var x = new Set()
x.add(1)
x.add(2)
x.add(3)
x.add(3)
x.add("hello")
x.add("hello")
var result = { a: 1, b: 2 }
x.add(result)
console.log(x)