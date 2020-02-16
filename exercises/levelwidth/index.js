// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let q = [root, 's'];
    let count = [0];
    while (q.length > 1){
        const element = q.shift();
        if (element ==='s'){
            count.push(0);
            q.push('s');
            continue;
        }
        q.push(...element.children);
        count[count.length - 1]++;
    }
    return count;
}

module.exports = levelWidth;
