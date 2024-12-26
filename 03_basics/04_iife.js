//*************************Immediately Invoked Function Expression [IIFE] by Function************************/

(function iifeOne() {
    //   console.log("DB Connected");
  })();
  
  (function iifetwo(name) {
    //   console.log(`DB Connected Two ${name}`);
  })("love");
  
  //*********************Immediately Invoked Function Expression [IIFE] by Arrow Function***********************/
  
  (() => {
    console.log("DB Connected");
  })();
  
  ((name) => {
    console.log(`DB Connected Two ${name}`);
  })("raju");
  