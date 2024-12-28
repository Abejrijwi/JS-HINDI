//*************************************Conditional and Logical*****************************************/

//*****************************************Condition and Logical Oprator******************************/

/*

<  less Than True

>  greter Than True

<= less than or equal than True

>= greter than or equal than True

== equal than True

!= not equal than True

=== equal or datatype than True

*/

//**************************************************If Statement **************************************/

// if (2 == 2) console.log("single line code execute");

if (1 < 2) {
    //   console.log("Execute");
  }
  
  if (2 > 1) {
    //   console.log("Execute");
  }
  
  if (1 <= 1) {
    //   console.log("Execute");
  }
  
  if (1 <= 2) {
    //   console.log("Execute");
  }
  
  if (2 >= 1) {
    //   console.log("Execute");
  }
  
  if (2 >= 2) {
    //   console.log("Execute");
  }
  
  if (2 == 2) {
    //   console.log("Execute");
  }
  
  if (2 != 1) {
    //   console.log("Execute");
  }
  
  if (2 === 2) {
    //   console.log("Execute");
  }
  
  const userLoggedIn = true;
  const debitCard = true;
  
  if (userLoggedIn && debitCard && 2 == 2) {
    // console.log("Allow to buy course");
  }
  
  const userLoggedInGoogle = true;
  const userLoggedInGmail = true;
  
  if (userLoggedInGoogle || userLoggedInGmail) {
    // console.log("user logged In");
  }
  
  //**************************************************If and else Statement **************************************/
  
  const temprature = 40;
  if (temprature > 50) {
    console.log("temprature is less than 50");
  } else {
    //   console.log("temprature is greter than 50");
  }
  
  //**************************************************If and else Statement scope**********************************/
  
  const score = 200;
  
  if (score < 100) {
    const power = "fly";
    console.log(`user power: ${power}`);
  } else {
    power = "Notfly";
    //   console.log(`user power: ${power}`);
  }
  
  if (score > 100) {
    const power = "fly";
    //   console.log(`user power: ${power}`);
  } else {
    power = "Notfly";
    console.log(`user power: ${power}`);
  }
  
  //**************************************************If and else if Statement scope**********************************/
  
  const balance = 1000;
  if (balance < 500) {
    console.log("less than 500");
  } else if (balance < 750) {
    console.log("less than 750");
  } else if (balance < 1000) {
    console.log("less than 1000");
  } else {
    // console.log("less than 1200");
  }
  