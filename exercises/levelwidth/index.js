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

//|==> Solution 1
// function levelWidth (root){
//     let parents = [root];
//     let children = [];
//     const result = [1];
//     while (parents.length > 0) {
//         parents.forEach(node => children.push(...node.children));
//         if (children.length > 0) {
//             result.push(children.length);
//         }
//         parents = [...children];
//         children = [];
//     }
//     return result;
// }

//|==> Solution 2
function levelWidth(root) {
    let arr = [root,'s'];
    let counter = [0];
    while(arr.length > 1){
        const node = arr.shift();
        if(node === 's'){
            counter.push(0);
            arr.push('s');
        }else{
            arr.push(...node.children);
            counter[counter.length - 1]++;
        }
    }
    return counter;
}

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.children = [];
//     }
  
//     add(data) {
//       this.children.push(new Node(data));
//     }
//   };
  

//   const root = new Node(0);
//   root.add(1);
//   root.add(2);
//   root.add(3);
//   root.children[0].add(4);
//   root.children[2].add(5);
//   console.dir(levelWidth(root));

module.exports = levelWidth;
