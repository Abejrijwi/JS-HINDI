const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

const newBalanceOne = balance.toString();
// console.log(typeof newBalanceOne);

const newBalanceTwo = balance.toString().length;
// console.log(newBalanceTwo);

const newBalanceThree = balance.toFixed(2);
// console.log(newBalanceThree);

const oldBalanceFour = 123.867;
const newBalanceFour = oldBalanceFour.toPrecision(3);
// console.log(newBalanceFour);

const oldBalanceFive = 10000000;
const newBalanceFive = oldBalanceFive.toLocaleString("en-IN");
// console.log(newBalanceFive);

//**********************************************Maths**********************************************

const oldMath = -4;
const newMath = Math.abs(oldMath);
// console.log(newMath);

const oldMathOne = 4.6;
const newMathOne = Math.round(oldMathOne);
// console.log(newMathOne);

const oldMathTwo = 4.2;
const newMathTwo = Math.ceil(oldMathTwo);
// console.log(newMathTwo);

const oldMathThree = 4.9;
const newMathThree = Math.floor(oldMathThree);
// console.log(newMathThree);

const oldMathFour = [2, 5, 6, 3, 8];
const newMathFour = Math.min(...oldMathFour);
// console.log(newMathFour);

const oldMathFive = [2, 5, 7, 10, 22];
const newMathFive = Math.max(...oldMathFive);
// console.log(newMathFive);

const oldMathSix = Math.random();
// console.log(oldMathSix);

const oldMathSeven = Math.floor(Math.random() * 10) + 1;
// console.log(oldMathSeven);

const min = 10;
const max = 20;
const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomValue);
