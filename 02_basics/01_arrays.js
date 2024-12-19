//**************************************************Array********************************************/

const myArrayOne = [1, 2, 3, 4, 5, 6];
const myArray = new Array(1, 2, 3, 4);
// console.log(myArrayOne);
// console.log(myArrayOne);
// console.log(typeof myArrayOne[3]);

const myArrayTwo = ["One", "Two", "three", "Four"];
// console.log(myArrayTwo);
// console.log(typeof myArrayTwo[3]);

const myArrayThree = [true, false];
// console.log(myArrayThree);
// console.log(typeof myArrayThree[0]);

const myArrayFour = [null];
// console.log(myArrayFour);
// console.log(typeof myArrayFour[0]);

const myArrayFive = [undefined];
// console.log(myArrayFive);
// console.log(typeof myArrayFive[0]);

const myArraySix = [465345n, 64573n, 465784n];
// console.log(myArraySix);
// console.log(typeof myArraySix[2]);

const myArraySeven = [1, 2, ["one"], [true, false], null, undefined, 477847n];

// console.log(myArraySeven);
// console.log(typeof myArraySeven[[1]]);


const myArrayEight = [{ name: "love", game: "some", fruit: "Apple" }];
// console.log(myArrayEight);
// console.log(typeof myArrayEight);


//**************************************************Array_Mathode***************************************/

const myArrayMethodeOne = [11, 12, 13, 14];
myArrayMethodeOne.push(15); // Add Array Last Elements as 15
// console.log(myArrayMethodeOne);

const myArrayMethodeTwo = ["one", "Two", "Three", "Four"];
myArrayMethodeTwo.pop(); // Remove Array Last Elemeant as Four
// console.log(myArrayMethodeTwo);

const myArrayMethodeThree = [21, 22, 23, 24];
myArrayMethodeThree.unshift(20); // Add Array as First Element
// console.log(myArrayMethodeThree);

const myArrayMethodeFour = ["One", "Two", "Three", "Four", "Five"];
myArrayMethodeFour.shift(); // Remove Array as First Element
// console.log(myArrayMethodeFour);

const myArrayMethodeFive = ["Love", "Name", "Game", "Fame"];
const myArrayMethodeFiveExample = myArrayMethodeFive.includes("Love");
// console.log(myArrayMethodeFiveExample);

const myArrayMethodeSix = [23, 24, 25, 26, 27, 28];
const myArrayMethodeSixExample = myArrayMethodeSix.indexOf(25);
// console.log(myArrayMethodeSixExample);

const myArrayMethodeSeven = [41, 42, 43, 44, 45, 46];
const myArrayMethodeSevenExample = myArrayMethodeSeven.join(); // convert typeof String
// console.log(myArrayMethodeSevenExample);
// console.log(typeof myArrayMethodeSevenExample);

const myArrayMethodeEight = [51, 52, 53, 54, 55, 56];
// console.log(myArrayMethodeEight);
const myArrayMethodeEightExample = myArrayMethodeEight.slice(2, 4);
// console.log(myArrayMethodeEightExample);

const myArrayNine = ["Romi", "Somi", "Goni", "Toni", "Jonny", "Timmy", "Ram"];
// console.log(myArrayNine);
const myArrayNineExample = myArrayNine.splice(2, 4);
// console.log(myArrayNineExample);
