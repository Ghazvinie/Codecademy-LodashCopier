const _ = {
    clamp (number, lower, upper){
        const lowerClamped = Math.max(number, lower);
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
    },

    has (object, key) {
        return object.hasOwnProperty(key);
    },

    invert (object) {
        for (let key in object){
            const invProperty = object[key];
            const invKey = key;
            object[invKey] = invProperty;  
        }
        return object;
    },

    findKey (object, predicate) {
        for (let key in object){
            if (predicate(object[key])) return key;
        }
            return undefined;
    },

    drop (array, n = 1) {
        return array.slice(n, array.length);
    },

    dropWhile (array, predicate) {
        if (array.findIndex(predicate) === 0) {
            array.shift();
            this.dropWhile(array,predicate);
            }        
    return array;
    }
};




// Do not write or modify code below this line.
module.exports = _;