//***************************************Iteration and Array Loops********************************/

//***************************************Iteration and ForEach Loops*****************************/

const coding = ["js", "c++", "java", "phython"];

coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach(function (item, index, arr) {
  //   console.log(item, index, arr);
  //   console.log(item);
  //   console.log(index);
  //   console.log(arr);
});

//***************************************************************************************************/

const num = [100, 200, 300, 400, 500];

num.forEach((number) => {
  //   console.log(number);
});

num.forEach((item, index, array) => {
  //   console.log(item, index, array);
  //   console.log(item);
  //   console.log(index);
  //   console.log(array);
});

//***************************************************************************************************/

const gaming = ["game1", "game2", "game3"];

function game(allgame) {
  //   console.log(allgame);
}

gaming.forEach(game);

function one(item, index, array) {
  //   console.log(item, index, array);
  //   console.log(item);
  //   console.log(index);
  //   console.log(array);
}
gaming.forEach(one);

//***************************************************************************************************/

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "phython",
    languageFile: "py",
  },
];

myCoding.forEach(function (arrayObjectoneitem) {
  //   console.log(arrayObjectoneitem.languageName);
  //   console.log(arrayObjectoneitem.languageFile);
});

//***************************************************************************************************/

const myCourse = [
  {
    courseName: "Math",
    courseTeacher: "Raju",
  },
  {
    courseName: "Physics",
    courseTeacher: "Raman",
  },
  {
    courseName: "Science",
    courseTeacher: "Gaman",
  },
];

myCourse.forEach((arrayobjecttwo) => {
  //   console.log(arrayobjecttwo.courseName);
  //   console.log(arrayobjecttwo.courseTeacher);
});

//***************************************************************************************************/
const myBuilder = [
  {
    builderName: "Mohan",
    builderLocation: "Hajipur",
  },
  {
    builderName: "Ramesh",
    builderLocation: "Patna",
  },
  {
    builderName: "Sohan",
    builderLocation: "Hazaribag",
  },
];

//***************************************************************************************************/

function builderDetails(arrayobjectthree) {
  //   console.log(arrayobjectthree.builderName);
  //   console.log(arrayobjectthree.builderLocation);
}

myBuilder.forEach(builderDetails);

//***************************************************************************************************/

const arrayfunction = function (arrayobjectfour) {
  //   console.log(arrayobjectfour.builderName);
  //   console.log(arrayobjectfour.builderLocation);
};

myBuilder.forEach(arrayfunction);

//***************************************************************************************************/

const myarrowfunction = (arrayobjectfive) => {
  //   console.log(arrayobjectfive.builderName);
  //   console.log(arrayobjectfive.builderLocation);
};
myBuilder.forEach(myarrowfunction);

//***************************************************************************************************/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

//***************************************************************************************************/

const myNums1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newNums1 = [];

myNums1.forEach(function (num1) {
  newNums1.push(num1);
});
console.log(newNums1);

//***************************************************************************************************/

const myNums2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const newNums2 = [];
myNums2.forEach((num3) => newNums2.push(num3));
console.log(newNums2);
