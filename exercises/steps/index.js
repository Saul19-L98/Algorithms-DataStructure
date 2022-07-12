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
//       '##  '
//       '### '
//       '####'

// function steps(n) {}

//|==>Solution 1.
// const steps = (number) => {
//   let hashStr = '';
//   let newHashStr = [];
//   let i = 0;
//   while( i < number){
//     hashStr += '#';
//     newHashStr.push(hashStr + ' '.repeat(number - (i+1)));
//     i++;
//   }
//   return newHashStr.forEach( hash => console.log(hash));
// };

/* n = 3
            columns ->
    rows    '#  '
      |     '## '
      *     '###' 
*/

//|==>Solution 2.
// const steps = (number) => {
//   let hashArr = [];
//   for( let row = 0; row < number; row++){
//     let stair = '';
//     for(let column = 0; column < number; column++){
//       if(column <= row){
//         stair += '#';
//       }else{
//         stair += ' ';
//       }
//     }
//     hashArr.push(stair);
//   }
//   return hashArr.forEach(hash => console.log(hash));
// };

//|==> Solution 3: Using recursive function
// function steps (n, row = 0,stair = ''){
//   if(n === row){
//     return;
//   }
//   if(n === stair.length){
//     console.dir(stair);
//     return steps(n, row + 1);
//   }
//   if(stair.length <= row){
//     stair += '#';
//   }else{
//     stair += ' ';
//   }
//   steps(n,row,stair);
// };

//Simplified
const steps = (n, row = 0,stair = '') => {
    if(n === row){
        return;
    }
    if(n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }
    const add= (stair.length <= row) ? stair += '#' : stair += ' ';
    steps(n,row,stair = add);
};  
//steps(3);

module.exports = steps;
