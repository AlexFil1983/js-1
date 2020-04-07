//1

function hashToArray(obj) {
return Object.entries(obj);
}


//2

function hashToArray(obj) {
    let newArr = [];

    for (key in obj) {
    newArr.push([key, obj[key]]);
    }

    console.log(newArr);
    
}

