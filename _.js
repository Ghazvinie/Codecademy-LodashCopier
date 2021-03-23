const _ = {
    clamp (number, lower, upper){
        let lowerClamped = Math.max(number, lower);
        return  Math.min(lowerClamped, upper);
    }
};




// Do not write or modify code below this line.
module.exports = _;