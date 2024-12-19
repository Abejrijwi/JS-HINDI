//**************************************************Array_Mathode***************************************/

const myArrayMethodeOne = ["one", "Two", "Three"];
const myArrayMethodeTwo = [31, 32, 33];
myArrayMethodeOne.push(myArrayMethodeTwo);
// console.log(myArrayMethodeOne);
// console.log(myArrayMethodeOne[2]);
// console.log(myArrayMethodeOne[3][1]);

const myArrayMethodeThree = ["name", "Lame", "Game", "Same"];
const myArrayMethodeFour = [3, 44, 33, 22, 25];
const myArrayMethodeExample = myArrayMethodeThree.concat(myArrayMethodeFour);
// console.log(myArrayMethodeExample);

const myArrayMethodeFive = ["Num", "Sum", "Gum"];
const myArrayMethodeSix = ["Nice", "Like", "Many"];
const myArrayMethodeSpreedExample = [
  ...myArrayMethodeFive,
  ...myArrayMethodeSix,
];
// console.log(myArrayMethodeSpreedExample);

const myArrayMethodeSeven = [1, 2, [3, 4, [5, 6, 7], 8, 9]];
// console.log(myArrayMethodeSeven.length);
const myArrayMethodeSevenExample = myArrayMethodeSeven.flat(Infinity);
// console.log(myArrayMethodeSevenExample);

const myArrayMethodeEight = "AbejRijwi";
const myArrayMethodeEightExample = Array.from(myArrayMethodeEight);
// console.log(myArrayMethodeEightExample);

const myArrayMethodeNine = 12345;
const myArrayMethodeNineExample = Array.from(myArrayMethodeNine); // Empaty [] Array
// console.log(myArrayMethodeNineExample);

const myArrayMethodeTen = { name: "Rijwi" };
const myArrayMethodeTenExample = Array.from(myArrayMethodeTen); // Empaty [] Array
// console.log(myArrayMethodeTenExample);

const myArrayMethode11 = 11;
const myArrayMethode12 = 12;
const myArrayMethode13 = 13;
const AllArrays = Array.of(
  myArrayMethode11,
  myArrayMethode12,
  myArrayMethode13
);
// console.log(AllArrays);
