const sumAll = function(a,b) {
    if(typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) return "ERROR";


    let start;
    let end;
    if(a > b) {start = b; end = a;}
    else{ start = a; end = b;}
    
    let sum = 0;
    console.log("Start> ", sum);
    for(let i = start; i < end; i++){
        sum += i;
    }
    sum += end;
    console.log("End", sum)
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
