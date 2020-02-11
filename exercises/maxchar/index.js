// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    if (str.length < 2){
        return str;
    }

    let max = ["",0];
    let chars = {};
    
    for (let char of str){
        chars[char] = chars[char] + 1 || 1;
        if (chars[char] > max[1]) {
            max = [char,chars[char]];
        }
    }
    return max[0];
}

module.exports = maxChar;
