
function countDown(number) {
    var counter = number;
    var countdown = setInterval(function(){
      console.log(counter);
      counter--
      if (counter < 0) {
        clearInterval(countdown);
      }
    }, 1000);
    }
    
    countDown(10)
    
    
    