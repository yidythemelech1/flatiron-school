/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
console.log("hi")
//const = a varieble that will not change value and wont be reasigned 
const firsName = "yidy";
// let = a varieble that can change value or be reasigned
let number = 5;
console.log(number)
number = 6;
console.log(number)
// ~ Types
// -> undefined, null*, boolean, number, string
const isItRaining = false

// ~ Objects
// -> definition, bracket/dot notation, stringify
const dog = {
    firstName: "YidyHasThatDogInHim",
    age: 4
};
console.log(dog.firstName)
console.log(dog["firstName"])

dog.age = 5
console.log(dog.age)
// ~ Arrays
// -> definition, access, modification
const prices = [30, 40, 10, 60,]
console.log(prices[1]);
prices[2] = 20;
console.log(prices[2]);

console.log(prices);
console.log(JSON.stringify(prices));

// ~ Conditionals
// if, if-else, if-else-if-else, ternary

isItRaining = false;
age = 20;
    // if its not raining then console.log something about that 



if(age > 21 && isItRaining) {
    console.log("21r")
} else if (age > 21 && !isItRaining) {
    console.log("21")
} else if (age < 21 && isItRaining) {
    console.log("yr")
} else{
    console.log("r")
}
let message =""
if (age >= 21) message = "21";
else message = "Y"
if (isItRaining) message = message += "R";
console.log(message);
// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions
// greet hello to name
// greet hi to the recipeint
function greet(greeting, recipient) {
    console.log(` $[greeting], $[recipient]!`)
//    string concatenation 
//    console.log(greeting + ", " + recipient + "!")
return greeting + ", " + recipient +"!"
}
const greetingSakib = greet("Hello, Sakib")
console.log(greetingSakib)
greet("Hi", "Elizebeth")

const words = ["jump", "escalate", "people"];
// itirate over the array words

function printWord(word) {
    console.log(word);
}








words.forEach((word) => {console.log(word)})





greet



// ~ Scope
// -> global, local, closures, function hoisting
const a = "A"; //globalfunction
function localfunction() {
    const a = "AA"
    console.log(a);
}
localfunction();
console.log(a);
console.log(b);


// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
const sum = [1, 2, 3, 4];
function impro(sum){
    console.log(sum*2)
}
impro(sum);

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
