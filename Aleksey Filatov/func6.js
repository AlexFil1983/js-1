//Largest function ES5 sorting

function largest() {
   var array = Array.from(arguments);

    var largest = array.sort(function (a, b) {
      return b - a;
    });
    console.log(largest[0]);
  }
  
//Smallest function ES5 sorting

  function smallest() {
    var array = Array.from(arguments);

   var smallest = array.sort(function (a, b) {
      return a - b;
    });
    console.log(smallest[0]);
  }

  //Largest function ES6 short way

  function largest(...numbers) {
    let nums = numbers;
    console.log(Math.max(...nums));
  }

   //Smallest function ES6 short way

   function smallest(...numbers) {
    let nums = numbers;
    console.log(Math.min(...nums));
  }

  
