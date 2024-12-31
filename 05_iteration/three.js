//***************************************Iteration and Array Loops********************************/

//***************************************Iteration and For of Loops********************************/

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

//************************************************************************************************/

const greeting = "Helloworld";

for (const greet of greeting) {
  //   console.log(greet);
}

//***********************************************************************************************/

const map = new Map();

map.set("IN", "india");
map.set("FR", "france");
map.set("USA", "united state of amrica");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}
