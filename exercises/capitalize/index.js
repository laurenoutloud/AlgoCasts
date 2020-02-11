// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}

module.exports = capitalize;

function stringCombinations(str) {
	let result = [''];
	let count = 0;

    let options = str.match(/{.*?}/g);  //[“{a,b}”,”{d,e}”] 
    
    if (!options){
	    return [str];
    }
    options = options.map(s  => s.replace(/[{}]/g, '').split('')); //[[a,b], [d,e]]

    strArray = str.replace(/{.*?}/g, '0').split(''); //[‘0’,’c’,’0’,’f’]

    strArray.forEach( char => {
	    let tempStrings = [];
        if (char !== '0'){
            for (let str of result){
            tempStrings.push(str + char);
        }

        } else {
            options[count].forEach(option => {
                for (let str of result){
                tempStrings.push(str + option);
                }
            });
            count++;
        }
        result = tempStrings;
    });
    return result.sort();
}

stringCombinations("{a,b}c{d,e}f");
