//***********************************************Global Scope*****************************************
const a = 1;
let b = 2;

// console.log(a);
// console.log(b);

//***********************************************Local Scope******************************************

if (true) {
  const a = 1;
  let b = 2;
}
// console.log(a);
// console.log(b);

//***********************************************Nested Scope******************************************

function one() {
  const username = "Hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // Not Run This
  //   two();
}
// one();

// ***************************************************************************************************************

if (true) {
  const username = "Ramesh";
  if (username === "Ramesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website); // This is not Run
}
// console.log(username); // This is not Run

// ************************************************************************************************************

//console.log(oneExample(5)); // run function upside and downside both

function oneExample(num) {
  return num + 1;
}
//console.log(oneExample(5)); // run function upside and downside both

// **********************************************************************************************************

// console.log(twoExamplevar(6)); // nOt run function upside

const twoExamplevar = function twoExample(num2) {
  return num2 + 1;
};

// console.log(twoExamplevar(6));
