//1

function hashToArray(obj) {
return Object.entries(obj);
}


//2

function hashToArray(obj) {
    var newArr = [];

    for (key in obj) {
    newArr.push([key, obj[key]]);
    }

    console.log(newArr);
    
}

hashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'})

