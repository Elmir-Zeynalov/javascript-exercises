const repeatString = function(word, n) {
    let ret = "";
    for(let i = 0; i < n; i++){
        ret+= word;
    }
    if(n < 0) ret = "ERROR"
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
