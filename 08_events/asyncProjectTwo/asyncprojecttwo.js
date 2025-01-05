//******************************setInterval()*******************************************

// setInterval(function () {
//   console.log("setInterval");
// }, 1000);

//*************************************************************************************

// const sayDate = function (str) {
//   console.log(str, Date.now());
// };
// setInterval(sayDate, 1000, "Abej");

//*************************************clearInterval()***********************************

const sayDate = function (str) {
    console.log(str, Date.now());
  };
  let intervaleId;
  document.querySelector("#start").addEventListener("click", function () {
    if (!intervaleId) {
      intervaleId = setInterval(sayDate, 1000, "Abej");
    }
  });
  document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(intervaleId);
    intervaleId = null;
  });
  