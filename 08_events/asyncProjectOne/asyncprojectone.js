//*****************************setTimeOut()********************************************

// setTimeout(function () {
//   console.log("abej rijwi");
// }, 2000);

//************************************************************************************

// const sayRijwi = function () {
//   console.log("Hello Rijwi");
// };
// setTimeout(sayRijwi, 3000);

//************************************************************************************

// const textFind = () => {
//   document.querySelector("h1").innerHTML = "Best Javascript Course";
// };
// setTimeout(textFind, 2000);

//***********setTimeout() Function stop by clearTimeout() Function**********************

const textFindone = function () {
    document.querySelector("h1").innerHTML = "Best Javascript Course";
  };
  const changeText = setTimeout(textFindone, 2000);
  document.querySelector("#stop").addEventListener("click", function () {
    clearTimeout(changeText);
    console.log("stoped");
  });
  