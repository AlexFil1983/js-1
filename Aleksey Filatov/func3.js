function toCamelCase(str) {
    var words;
    var upperCaseWords =[];
  
  str.includes('-') ? words = str.split('-') : null;
  str.includes('_') ? words = str.split('_') : null;
  
  upperCaseWords.push(words[0]);
  
  for (var i = 1; i < words.length; i++) {
  upperCaseWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return upperCaseWords.join('');
  
  }