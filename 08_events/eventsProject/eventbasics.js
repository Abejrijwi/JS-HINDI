//******************************Onclick Function****************************************/

// document.getElementById("owl").onclick = function () {
//   alert("owl clicked");
// };

//***************************ddEventListener Function***********************************/

// document.getElementById("owl").addEventListener(
//   "click",
//   function () {
//     alert("owl clicked again");
//   },
//   false
// );

//***********************************************************************************************/

// const flist = document.querySelector("li:nth-child(4)");
// // console.log(flist);
// flist.addEventListener("click", function () {
//   alert("owl clicked");
// });

//**********************************************************************************************/

//type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY,
//altKey, ctrlKey, shiftKey

//*******************Bubling Propagation Inside to outside******************************/

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("Clicked inside the ul");
//   },
//   false
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl cliked");
//   },
//   false
// );

//*******************Capturing Propagation Outside to Inside******************************/

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("Clicked inside the ul");
//   },
//   true
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl cliked");
//   },
//   true
// );

//***************************************stopPropagation()*********************************/

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false
// );

//*************************************preventDefault()*************************************/

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     console.log("google clicked");
//     e.preventDefault();
//   },
//   false
// );

//*************************************Project*****************************************/

//**************************By clicking image remove image***************************/

document.querySelector("#images").addEventListener("click", function (e) {
    //**************************Event Listener ObJect***************************/
    // console.log(e);
    //**************************Event Listener Target***************************/
    // console.log(e.target);
    //**************************Event Listener Target Attribute*****************/
    // console.log(e.target.id);
    //**************************Event Listener Target Tag Name*****************/
    // console.log(e.target.tagName);
    //**************************Event Listener Target Parent Node*****************/
    // console.log(e.target.parentNode);
    //***********************************Start Project*****************************************/
    if (e.target.tagName === "IMG") {
      //***************************************************************************/
      // let removeimg = e.target.parentNode;
      // removeimg.remove();
      //***************************************************************************/
      // let removeimg = e.target.parentNode;
      // removeimg.parentNode.removeChild(removeimg);
      //***************************************************************************/
      e.target.parentNode.remove();
      //***************************************************************************/
      // e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  });
  