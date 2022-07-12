// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {}
//|==> Solution 1.
// const capitalize = (str) => {
//   let capitalized = [];
//   const newStr = str.split(' ');
//   newStr.forEach( word => {
//     const newWord = word.split('');
//     newWord[0] = newWord[0].toUpperCase();
//     capitalized.push(newWord.join(''));
//   });
//   console.log(capitalized);
//   return capitalized.join(' ');
// };

//|==> Solution 2.
// const capitalize = (str) => {
//   let capitalized = [];
//   str.split(' ').forEach( word => {
//     const chars = word.split('');
//     chars[0] = chars[0].toUpperCase();
//     capitalized.push(chars.join(''));
//   });
//   return capitalized.join(' ');
// };

//|==> Solution 3.
// const capitalize = (str) => {
//   let capitalized = [];
//   str.split(' ').forEach( word => {
//     const firstWord = word.split('')[0].toUpperCase();
//     const restOfTheWord = word.slice(1);
//     capitalized.push(firstWord + restOfTheWord);
//   });
//   return capitalized.join(' ');
// };
    
//|==> Solution 4.
const capitalize = (str) => {
        let capitalized = str[0].toUpperCase();
        for(let i = 1; i < str.length; i++){
        if(str[i - 1] === ' '){
            capitalized += str[i].toUpperCase();
        }else{
            capitalized += str[i];
        }
        }
        return capitalized;
};
//console.log(capitalize("hi there, how is it going?"));

module.exports = capitalize;
