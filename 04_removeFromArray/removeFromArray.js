const removeFromArray = function(array) {
    let args = Array.from(arguments).slice(1, arguments.length);
    console.log("args",args);

    let newArray = array.filter( (item) => !args.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
