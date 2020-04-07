function transform(array) {
    array = array.map(function(curValue) {
        return function() {
            return curValue;
        }
    });
    return array;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]()) //40
console.log(newArray[4]()) //50


