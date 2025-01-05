//********************************************************************************/

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
      resolve();
      console.log("Async task is completed");
    }, 1000);
  });
  promiseOne.then(function () {
    console.log("Promise consumed");
  });
  
  //********************************************************************************/
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task is completed one");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("Promise consumed one");
  });
  
  //********************************************************************************/
  
  const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: "abej", email: "abej@example.com" });
    }, 1000);
  });
  promisethree.then(function (objectcalled) {
    console.log(objectcalled);
  });
  
  //********************************************************************************/
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([1, 2, 3]);
    }, 1000);
  }).then(function (arraycalled) {
    console.log(arraycalled);
  });
  
  //********************************************************************************/
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(function (num1, num2) {
        return num1 + num2;
      });
    }, 1000);
  }).then(function (functioncalled) {
    console.log(functioncalled(3, 2));
  });
  
  //********************************************************************************/
  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((username) => {
        return username;
      });
    }, 1000);
  }).then((functioncalled) => {
    console.log(functioncalled("abej"));
  });
  
  //********************************************************************************/
  
  const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ companyName: "SoftwareERP", companySize: 500 });
      } else {
        reject("Error: something went wrong");
      }
    }, 1000);
  });
  promisefour
    .then((objectcalled) => {
      console.log(objectcalled);
    })
    .catch((error) => {
      console.log(error);
    });
  
  //********************************************************************************/
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve([10, 20, 30]);
      } else {
        reject("Error: Something went wrong");
      }
    }, 1000);
  })
    .then(function (arraycalled) {
      console.log(arraycalled);
      return arraycalled[2];
    })
    .then(function (arraysecondindex) {
      console.log(arraysecondindex);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  //********************************************************************************/
  
  const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ myWifeName: "Sidra", myName: "Abej" });
      } else {
        reject("Error: Something Went WRong");
      }
    }, 1000);
  });
  
  promisefive
    .then((objectcalled) => {
      console.log(objectcalled);
      return objectcalled.myWifeName;
    })
    .then((objectcalledmyWifeName) => {
      console.log(objectcalledmyWifeName);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("The promise is either resolve or rejected");
    });
  
  //********************************************************************************/
  
  const promisesix = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve([30, 40, 50]);
      } else {
        reject("Errors: something went wrong");
      }
    }, 1000);
  });
  
  async function consumedpromisesix() {
    try {
      const response = await promisesix;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  consumedpromisesix();
  
  //********************************************************************************/
  
//   async function getAllUser() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log("E: Error", error);
//     }
//   }
//   getAllUser();
  
  //********************************************************************************/

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response){
    return response.json()
  }).then(function(data){
    console.log(data);
    
  }).catch(function(error){
    console.log(error);
    
  })