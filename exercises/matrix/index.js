// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let spiral = [...Array(n)].map(x => Array(n).fill(0));
    let i = 0, j = 0, count = 1;
    let direction = "right";

    while (count <= n**2){
        spiral[i][j] = count;
        switch(direction){
            case "right" : {
                if (j + 1 < n && spiral[i][j+1] === 0){
                    j++;
                } else {
                    direction = "down";
                    i++;
                }
            }
            break;
            case "down" : {
                if (i + 1 < n && spiral[i+1][j] === 0){
                    i++;
                } else {
                    direction = "left";
                    j--;
                }
            }
            break;
            case "left" : {
                if (j - 1 >= 0 && spiral[i][j-1] === 0){
                    j--;
                } else {
                    direction = "up";
                    i--;
                }
            }
            break;
            case "up" : {
                if (i - 1 >= 0 && spiral[i-1][j] === 0){
                    i--;
                } else {
                    direction = "right";
                    j++;
                }
            }
            break;
        }
        count++;
    }
    return spiral;
}

module.exports = matrix;
