// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {}
//|==> Solution 1.
// const myReverse = (str) => {
//   const newStr = str.split("").reverse().join("");
//   return newStr;
// }

//|==> Solution 2.
// const myReverse = (str) => {
//   return str.split("").reverse().join("");
// };

//|==> Solution 3.
// const myReverse = (str) => {
//   let reversed = "";
//   for(character of str){
//     reversed = character + reversed;
//     // debugger;
//   }
//   return reversed;
// };
// // myReverse("hello");

//|==> Solution 4.
const myReverse =(str) => {
    return str.split("").reduce((reversed,character)=>reversed=character+reversed,"");
};

module.exports = reverse;
