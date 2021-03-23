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
            const tempEnd = end;
            end = start;
            start = tempEnd;
        }
        if (number >= start && number < end) return true;
        return false;
    },

    words (string) {
        return string.split(' ');
    },

    pad (string, length) {
        if (length <= string.length) return string;
        const startPad = Math.floor((length - string.length) / 2);
        const endPad = length - startPad - string.length;
        return `${' '.repeat(startPad)}${string}${' '.repeat(endPad)}`;
    }
};




// Do not write or modify code below this line.
module.exports = _;