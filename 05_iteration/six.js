//***************************************Iteration and Array Loops********************************/

//***************************************Iteration and Filter Loops*****************************/

const myNums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const newNums = myNums.filter((nums) => nums > 15);

// console.log(newNums);

//*****************************************************************************************/

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums1.filter((nums1) => {
  return nums1;
});
// console.log(newNums1);

//***************************************************************************************/

const myNums2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const newNums2 = myNums2.filter((nums2) => {
  return nums2 > 25;
});
// console.log(newNums2);

//*************************************************************************************/

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

// console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.publish >= 2000;
});

// console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.publish >= 1990;
});

// console.log(userBooks);

userBooks = books.filter(function (bk) {
  return bk.publish >= 1990 && bk.genre === "History";
});
// console.log(userBooks);

userBooks = books
  .filter((bk) => bk.publish >= 1990)
  .filter((bk) => bk.genre === "History");
// console.log(userBooks);

userBooks = books
  .filter(function (bk) {
    return bk.publish >= 1990;
  })
  .filter(function (bk) {
    return bk.genre === "Science";
  });
// console.log(userBooks);
