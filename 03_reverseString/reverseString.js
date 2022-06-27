const reverseString = function(word) {
    let ret = "";
    for(let i = 0; i < word.length; i++){
        let letter = word[word.length - i -1];
        ret+=letter;
        console.log("i",i, letter);
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
