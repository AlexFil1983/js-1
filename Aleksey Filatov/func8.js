    function sum() {
      var array = Array.from(arguments);

if (arguments.length == 0) {
  return 0;
} else {
  return array[0] + sum.apply(0, array.slice(1))
    }
  }

sum(1,2,3,4);


