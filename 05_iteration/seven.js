//***************************************Iteration and Array Loops********************************/

//***************************************Iteration and Map Loops*****************************/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = myNumbers.map((num) => num + 10);
// console.log(newNumbers);

//********************************************************************************************/

const myNumbers1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newNumbers1 = myNumbers1.map(function (num1) {
  return num1 - 10;
});
// console.log(newNumbers1);

//********************************************************************************************/

let myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers2 = myNumbers2.map((num2) => {
  return num2 * 2;
});
// console.log(newNumbers2);

newNumbers2 = myNumbers2.map(function (num2) {
  return num2 * 3;
});
// console.log(newNumbers2);

//********************************************************************************************/

let myNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers3 = myNumbers3
  .map((num) => num * 10)
  .map((num) => num + 1)
  .map((num) => num - 1);

// console.log(newNumbers3);

newNumbers3 = myNumbers3
  .map(function (num) {
    return num * 10;
  })
  .map(function (num) {
    return num + 1;
  })
  .map(function (num) {
    return num - 10;
  });
// console.log(newNumbers3);
