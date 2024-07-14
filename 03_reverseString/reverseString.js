const reverseString = function(word) {
    let wordArray =  word.split('');
    let reverseArray = wordArray.reverse().join('');
    return reverseArray;
};

// Do not edit below this line
module.exports = reverseString;
