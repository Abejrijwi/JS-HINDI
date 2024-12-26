//******************************************Function Defined Without Name By Console********************************
const nameis = function () {
    console.log("Without Name");
  };
  // nameis();
  
  //******************************************Function Defined With Name By Console*************************************
  
  function myName() {
    console.log("With Name");
  }
  // myName();
  
  //******************************************Function Defined Without Name By Return*********************************
  
  const nameHas = function () {
    return `this is my name`;
  };
  // console.log(nameHas());
  
  //******************************************Function Defined With Name By Return************************************
  
  function myNameHas() {
    return `This is Too Late`;
  }
  // console.log(myNameHas());
  
  //******************************************Function with Parameters By Console****************************************
  
  function myFullName(myName) {
    console.log((myName = "Rijwi"));
  }
  // myFullName();
  
  //******************************************Function with Parameters By Return****************************************
  
  function one(myfullname = "Abej Rijwi") {
    return myfullname;
  }
  // console.log(one());
  
  //**********************************Function with Parameters And Argument By Console**********************************
  
  function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
  }
  // addTwoNumber(5, 1);
  
  //**********************************Function with Parameters And Argument By Return**********************************
  
  function addthreeNumber(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  // console.log(addthreeNumber(1, 2, 3));
  
  //****************************Function with variable Parameters And Argument By Console*******************************
  
  function exampleOne(num1, num2) {
    let result = num1 + num2;
    console.log(result);
  }
  // exampleOne(25, 25);
  
  //****************************Function with varriable Parameters And Argument By Return*******************************
  
  function exampleTwo(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  // console.log(exampleTwo(20, 20));
  
  //***********************************************Function************************************************************
  
  function functionone(username) {
    return `${username} just loggedIn`;
  }
  const result = functionone("Sohan");
  // console.log(result);
  
  function functionTwo(username) {
    if (!username) {
      return "Please Enter UserName";
    }
    return `${username} is logged in`;
  }
  // console.log(functionTwo("Sam"));
  
  function functionThree(...num3) {
    return num3;
  }
  // console.log(functionThree(12, 13, 14, 15, 16, 17));
  
  //***********************************************Function with objects Return*****************************************
  
  const objectWithFunction = {
    username: "Abej Rijwi",
    price: 199,
  };
  
  function functionFour(anyobject) {
    return `username is ${anyobject.username} and price is ${anyobject.price}`;
  }
  
  // console.log(functionFour(objectWithFunction));
  // console.log(functionFour({ username: "Raju", price: 200 }));
  
  //***********************************************Function with objects console*****************************************
  
  const objectWithFunctionOne = {
    userId: 101,
    userName: "Faizan Rijwi",
    userEmail: "abejrijwi@gmail.com",
  };
  
  function functionFive(anything) {
    console.log(
      `My user id is ${anything.userId} and my user name is ${anything.userName} and my user email is ${anything.userEmail}`
    );
  }
  // functionFive(objectWithFunctionOne);
  
  // functionFive({ userId: 105, userName: "raju rijwi", userEmail: "r@gmail.com" });
  
  //***********************************************Function with Array Return*****************************************
  
  const arraywithFunction = [1, 2, 3, 4, 5];
  
  function functionsix(anyarray) {
    return `my first number is ${anyarray[0]} and my second number is ${anyarray[1]}`;
  }
  // console.log(functionsix(arraywithFunction));
  // console.log(functionsix([25, 26, 27]));
  
  //***********************************************Function with Array console*****************************************
  
  const arraywithfunctionone = ["one", "two", "three"];
  
  function functionseven(anythingarray) {
    console.log(
      `my first number is ${anythingarray[0]} and my second number is ${anythingarray[1]}`
    );
  }
  // functionseven(arraywithfunctionone);
  functionseven(["right", "complete"]);
  