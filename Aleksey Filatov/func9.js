function countDown (num) {
var counter = num;

setInterval(function() {
if (counter < 0) return;
else {
    console.log(counter);
    counter -= 1;

    } 
 }, 1000);
}

countDown(10);