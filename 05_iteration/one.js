//***************************************Iteration and For Loop********************************/

for (let index = 0; index < 10; index++) {
    const element = index;
    //   console.log(element);
  }
  
  //**********************************************************************************************/
  
  for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
      // console.log("5 is best number");
    }
    //   console.log(element);
  }
  
  //*********************************************************************************************/
  
  for (let i = 0; i <= 10; i++) {
    //   console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
      // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    }
  }
  
  //*********************************************************************************************/
  
  for (let i = 1; i <= 10; i++) {
    //   console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      // console.log(i + "*" + j + "=" + i * j);
    }
  }
  
  //**************************************For Loo[ Array***************************************/
  
  const myArray = ["Batman", "Superman", "Spiderman"];
  
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //   console.log(element);
  }
  
  //****************************For Loop Break**********************************************************/
  
  for (let i = 1; i <= 20; i++) {
    if (i == 5) {
      // console.log(`Dedected Value 5`);
      break;
    }
    //   console.log(`Value of i ${i}`);
  }
  
  //****************************For Loop Continue**********************************************************/
  
  for (let j = 1; j <= 15; j++) {
    if (j == 5) {
      // console.log(`Dedected Value 5`);
      continue;
    }
    //   console.log(`Value of j  = ${j}`);
  }
  