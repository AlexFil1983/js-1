function reverseSentence(sentence) {
    var wholeSentence = sentence.split(' ');
    var reverseSentence = [];

    for (word of wholeSentence) {
reverseSentence.push(word.split('').reverse().join(''));
    }

    return reverseSentence.join(' ')
}

