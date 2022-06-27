const leapYears = function(year) {
    let divisibleByFour = year % 4;
    let divisibleByHundred = year % 100;
    let divisibleByFourHundred = year % 400;
    console.log("by 4",divisibleByFour)
    console.log("by 100",divisibleByHundred)
    console.log("by 400", divisibleByFourHundred)

    if((divisibleByFour == 0 && divisibleByHundred != 0)|| divisibleByFourHundred == 0){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
