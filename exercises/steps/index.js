// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  'w
//       '### '
//       '####'

//recursive solution
function steps(n, row = n){
    if (row === 0){
        return;
    } 
    steps(n, row - 1);
    console.log('#'.repeat(row) + ' '.repeat(n-row));
}

/*
function steps(n) {
    for (let i = 1; i <= n; i++){
        console.log('#'.repeat(i) + ' '.repeat(n-i));
    }
}
*/

module.exports = steps;
