//************************************************Statement by falshy Value*****************************/

const userOne = "";

if (userOne) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userTwo = "abc";

if (Number(userTwo)) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userThree = false;

if (userThree) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userFour = 0;

if (userFour) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userFive = -0;

if (userFive) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userSix = 0n;

if (userSix) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userSeven = null;

if (userSeven) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//******************************************************************************************************/

const userEight = undefined;

if (userEight) {
  console.log("This is Truthy Value");
} else {
  //   console.log("This is falshy Value");
}

//************************************************Statement by Truthy Value*****************************/

const userNine = "0";

if (userNine) {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

const userTen = " ";

if (userTen) {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

const userEleven = "false";

if (userEleven) {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

const userTwelth = [];

if (userTwelth.length === 0) {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

const userTherteen = {};

if (Object.keys(userTherteen).length === 0) {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

if (false == 0) {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

if (false == "") {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//******************************************************************************************************/

if (0 == "") {
  //   console.log("This is Truthy Value");
} else {
  console.log("This is falshy Value");
}

//**************************************Terniary  Operator**********************************/

const icsTeaPrice = 100;
// icsTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

//**************************************Nullish Coalescing Operator**********************************/

const baz = 0 ?? 42;
// console.log(baz);

const baz1 = null ?? 42;
// console.log(baz1);

const baz2 = null ?? 42 ?? 50;
// console.log(baz2);

const baz3 = undefined ?? 42;
// console.log(baz3);

const baz4 = undefined ?? 42 ?? 50;
// console.log(baz4);
