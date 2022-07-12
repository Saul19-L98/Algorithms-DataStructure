// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//|==> Inverted pyramid
// function pyramid(n) {
//     //let newPyramid = [];
//     const midpoint = Math.floor(((2*n)-1)/2);   
//     for (let row = (n-1); row >= 0; row--){
//         let stair = '';
//         for(let column = ((2*n)-1); column >= 0; column--){
//             if(midpoint - row <= column && midpoint + row >= column){
//                 stair += '#';
//             }else{
//                 stair += ' ';
//             }
//         }
//         console.dir(stair);
//         //newPyramid.push(stair);
//     }
//     // console.dir(newPyramid);
//     // for(let i = (n - 1); i >= 0; i--){
//     //     console.dir(newPyramid[i]);
//     // };
// }

//|==> Solution 1.
// const pyramid = (n) => {
//     let newPyramid = [];
//     const midpointOfColumn = Math.floor((2*n-1)/2);
//     for(let row = 0; row < n; row++){
//         let stair = '';
//         for(let column = 0; column < ((2*n) - 1); column++){
//             // console.log(column);
//             if(midpointOfColumn - row <= column && midpointOfColumn + row >= column ){
//                 stair += '#';
//             }else{
//                 stair += ' ';
//             }
//         }
//         newPyramid.push(stair);
//     }
//     return newPyramid.forEach( stair => console.log(stair));
// }

//|==> Solution 2: Using a recursive function (well two to be exactly).
const pyramid = (n) => {
    let arr = [];
    const midPoint = Math.floor((2*n-1)/2);
    pyramidHelper(n);
    function pyramidHelper(n,row = 0,stair = ''){
        if(n === row){
            return;
        }
        if((2*n-1) === stair.length){
            //console.dir(stair);
            arr.push(stair);
            return pyramidHelper(n,row + 1);
        }

        if(midPoint - row <= stair.length && midPoint + row >= stair.length){
            stair += '#';
        }else{
            stair += ' ';
        }
        pyramidHelper(n,row,stair);
    }
    return arr.forEach( stair => console.log(stair) );
}
pyramid(10);

module.exports = pyramid;
