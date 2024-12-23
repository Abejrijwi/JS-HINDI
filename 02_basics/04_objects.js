//******************************************Objects SingleTon All DataTypes*****************************************

const objectSingleton = new Object();

// console.log(objectSingleton);
// console.log(typeof objectSingleton);

//******************************************Objects SingleTon Number*****************************************

objectSingleton.id = 123;

// console.log(objectSingleton.id);
// console.log(typeof objectSingleton.id);

// console.log(objectSingleton["id"]);
// console.log(typeof objectSingleton["id"]);

//******************************************Objects SingleTon String*****************************************

objectSingleton.name = "Abej Rijwi";

// console.log(objectSingleton.name);
// console.log(typeof objectSingleton.name);

// console.log(objectSingleton["name"]);
// console.log(typeof objectSingleton["name"]);

//******************************************Objects SingleTon Boolean*****************************************

objectSingleton.isLoggedIn = false;

// console.log(objectSingleton.isLoggedIn);
// console.log(typeof objectSingleton.isLoggedIn);

// console.log(objectSingleton["isLoggedIn"]);
// console.log(typeof objectSingleton["isLoggedIn"]);

//******************************************Objects SingleTon Null*****************************************
objectSingleton.empty = null;

// console.log(objectSingleton.empty);
// console.log(typeof objectSingleton.empty);

// console.log(objectSingleton["empty"]);
// console.log(typeof objectSingleton["empty"]);

//******************************************Objects SingleTon Undefined*****************************************

objectSingleton.emptyValue = undefined;

// console.log(objectSingleton.emptyValue);
// console.log(typeof objectSingleton.emptyValue);

// console.log(objectSingleton["emptyValue"]);
// console.log(typeof objectSingleton["emptyValue"]);

//******************************************Objects SingleTon Big Number*****************************************

objectSingleton.bigNumber = 476574555n;

// console.log(objectSingleton.bigNumber);
// console.log(typeof objectSingleton.bigNumber);

// console.log(objectSingleton["bigNumber"]);
// console.log(typeof objectSingleton["bigNumber"]);

//******************************************Objects SingleTon Symbol*****************************************

objectSingleton.symbolAdd = Symbol("Key");

// console.log(objectSingleton.symbolAdd);
// console.log(typeof objectSingleton.symbolAdd);

// console.log(objectSingleton["symbolAdd"]);
// console.log(typeof objectSingleton["symbolAdd"]);

//******************************************Objects Nested Object*****************************************

const regularUser = {
  email: "abejrijwivmu@gmail.com",
  fullName: {
    userName: {
      firstName: "Abej",
      lastName: "Rijwi",
    },
  },
};

// console.log(regularUser.fullName.userName.firstName);
// console.log(regularUser["fullName"]["userName"]["firstName"]);

//******************************************Objects Merged Object*****************************************

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

const obj3 = { obj1, obj2 };
const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2);
const obj6 = { ...obj1, ...obj2 };

// console.log(obj6);

//******************************************Objects Loop Arrays*****************************************

const user = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

// console.log(user[0].id);
// console.log(typeof user[0].id);

// console.log(user[0]["id"]);
// console.log(typeof user[0]["id"]);

// console.log(user[1].email);
// console.log(typeof user[1].email);

// console.log(user[1]["email"]);
// console.log(typeof user[1]["email"]);

//******************************************Objects Methode*****************************************

const objMethode = {
  1: "ab",
  2: "bc",
  3: "cd",
};
// console.log(objMethode);
// console.log(Object.keys(objMethode));
// console.log(Object.values(objMethode));
// console.log(Object.entries(objMethode));
// console.log(objMethode.hasOwnProperty(5));

//******************************************Objects De-Structure*****************************************

const course = {
  coursename: "Js In Hindi",
  courseprice: "999",
  courseinstructor: "Abej Rijwi",
};

// console.log(course.courseinstructor);

const { courseinstructor } = course;
// console.log(courseinstructor);

const { courseprice: price } = course;
// console.log(price);
