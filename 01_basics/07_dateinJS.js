//********************************************Dates***************************************************

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateDateOne = new Date(2024, 11, 17);
// console.log(myCreateDateOne.toDateString());

let myCreateDateTwo = new Date(2024, 11, 17, 14, 16);
// console.log(myCreateDateTwo.toLocaleString());

let myCreateDateThree = new Date("2024-12-17");
// console.log(myCreateDateThree.toLocaleDateString());

let myCreateDateFour = new Date("12-17-2024");
// console.log(myCreateDateFour.toLocaleString());

//********************************************Times***************************************************

let myTimeOne = Date.now();
// console.log(myTimeOne);
// console.log(Math.floor(Date.now() / 1000));

let myTimeTwo = new Date("12-17-2024");
// console.log(myTimeTwo.getTime());

let myTimeThree = new Date();
// console.log(myTimeThree.getMonth());

let myTimeFour = new Date().toLocaleString("default", {
  weekday: "long",
});
// console.log(myTimeFour);
