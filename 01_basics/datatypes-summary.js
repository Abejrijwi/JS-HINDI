// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInit

const score = 100;
const scoreValue = 102.3;
const isLoggedIn = false;
const outsideTem = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
const bigNumber = 57438658465n;

// console.log(typeof bigNumber)

// Refrence (Non Primitive)
// Arrays, Objects, Functions

const heros = ["Shaktiman", "Nagar", "Doga"];
let myObj = {
  name: "Abej Rijwi",
  age: 22,
};
const myFunction = function () {
  console.log("Hello World");
};
// console.log(typeof myFunction)

// **************************************Memory************************************

// Stack Memory (Primitive)

let myYoutubename = "rijwi@google.com";
let anotherName = myYoutubename;
anotherName = "raju@gmail.com";
console.log(myYoutubename)
console.log(anotherName)

// Heap Memory (Non-Primitive)

let userOne = {
    email: "love@gmail.com",
    upi : "love@ypl.com"
};
let userTwo = userOne
userTwo.email = "rakesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);

