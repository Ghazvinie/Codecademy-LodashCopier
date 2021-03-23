const _ = {
    clamp (number, lower, upper){
        let lowerClamped = Math.max(number, lower);
        return  Math.min(lowerClamped, upper);
    },

    inRange (number, start, end){
        if (end === undefined){
            end = start;
            start = 0;
        }
        if (start > end) {
            let tempEnd = end;
            end = start;
            start = tempEnd;
        }
        if (number >= start && number < end) return true;
        return false;
    },

    words (string) {
        return string.split(' ');
    }
};




// Do not write or modify code below this line.
module.exports = _;