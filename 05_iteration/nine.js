//***************************************Iteration and Array Loops********************************/

//***************************************Iteration and Reduce Loops*****************************/

const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currval) {
  //   console.log(`acc: ${acc} and currval is ${currval}`);
  return acc + currval;
}, 0);
// console.log(myTotal);

//************************************************************************************************/

const myNums1 = [1, 2, 3];
const myTotal1 = myNums1.reduce((acc, currval) => {
  //   console.log(`acc: ${acc} and currval is ${currval}`);
  return acc + currval;
}, 0);
// console.log(myTotal1);

//************************************************************************************************/
const myNums2 = [2, 4, 6];
const initialise = 0;
const myTotal2 = myNums2.reduce((acc, currval) => {
  //   console.log(`acc: ${acc} and currval is ${currval}`);
  return acc + currval;
}, initialise);

// console.log(myTotal2);

//************************************************************************************************/

const myNums3 = [3, 6, 9];
const initialise3 = 0;
const myTotal3 = myNums3.reduce(function (acc, currval) {
  //   console.log(`acc: ${acc} and currval is ${currval}`);
  return acc + currval;
}, initialise3);
// console.log(myTotal3);

//************************************************************************************************/

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
