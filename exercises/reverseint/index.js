// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {}

//|==>Solution 1
// const reverseInt = (number) =>{
//   if(number >= 0){
//     return parseInt(number.toString().split("").reverse().join(""));
//   }else{
//     return parseInt(number.toString().split("").reverse().join("")) * -1;
//   }
// };

//|==>Solution 2
const reverseInt = (number) =>{
    return parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
};

module.exports = reverseInt;
