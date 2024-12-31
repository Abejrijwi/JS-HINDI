//***************************************Iteration and Array Loops********************************/

//***************************************Iteration and For in Loops by object**********************/

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by people",
  };
  
  for (const key in myObj) {
    //   console.log(`${key} shortcut is ${myObj[key]}`);
  }
  
  //***************************************Iteration and For in Loops by Array**********************/
  
  const programing = ["js", "c++", "java", "phython"];
  
  for (const key in programing) {
    console.log(`${key} shortcut is ${programing[key]}`);
  }
  