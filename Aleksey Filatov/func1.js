//1. splitAndMerge function

function splitAndMerge(str, sp) {
    var words = str.split(' ');
    var devided_words = [];
   
    for (var i = 0; i < words.length; i++) {
       devided_words.push(words[i].split('').join(sp));
          }
    return devided_words.join(' ');
}

splitAndMerge("My name is John"," ")

