//************************************************this use for corrent context by console***************************/

const user = {
    userName: "Abej Rijwi",
    price: 999,
    welcomeMessage: function () {
      console.log(`${this.userName} , Welcome to my website`);
    },
  };
  // user.welcomeMessage();
  
  //************************************************this use for corrent context by return***************************/
  
  const user1 = {
    userName: "Raju",
    price: 9999,
    message: function () {
      return `${this.userName}, welcome to my message`;
    },
  };
  
  // console.log(user1.message());
  
  //************************************************this use for corrent context**********************************/
  
  // console.log(this);
  
  //**************************************************************************************************************/
  
  const coreentContext = {
    userName: "Gaming",
    price: 499,
    description: function () {
      console.log(this);
    },
  };
  
  // coreentContext.description();
  
  //**************************************************************************************************************/
  
  const user2 = {
    userName: "Sohan",
    price: 555,
    message: function () {
      return `${this.userName}, username is dynamic`;
    },
  };
  // console.log(user2.message());
  user2.userName = "Mohan";
  // console.log(user2.message());
  
  //************************************************this use for corrent context**********************************/
  
  function thisOne() {
    console.log(this);
  }
  // thisOne();
  
  //**********************************************************************************************************/
  
  function thisTwo() {
    const userOne = "Ramu";
    console.log(this.userOne);
  }
  // thisTwo();
  
  //***************************************************Arrow Function do not use this******************************/
  
  const arrowFunction = () => {
    const one = "Game";
    console.log(this.one);
  };
  // arrowFunction();
  
  //***************************************************Arrow Function emplisive******************************/
  
  const arrowFunctionSingle = (num1, num2) => num1 + num2;
  // console.log(arrowFunctionSingle(3, 4));
  
  const arrowFunctionSingleOne = () => ({ userName: "Lovely" });
  // console.log(arrowFunctionSingleOne());
  
  const arrowFunctionSingleTwo = () => [1, 2, 3];
  // console.log(arrowFunctionSingleTwo());
  
  const arrowFunctionSingleThree = () => (nicename = "rijwi");
  // console.log(arrowFunctionSingleThree());
  
  const arrowFunctionSingleFour = (username) => username;
  // console.log(arrowFunctionSingleFour("raju"));
  
  //***************************************************Arrow Function by console*************************************/
  
  const arrowFunctionOne = (num1, num2) => {
    console.log(num1 + num2);
  };
  // arrowFunctionOne(3, 4);
  
  //***************************************************Arrow Function by return*************************************/
  
  const arrowFunctionTwo = (num1, num2, num3) => {
    return num1 + num2 + num3;
  };
  // console.log(arrowFunctionTwo(1, 2, 3));
  