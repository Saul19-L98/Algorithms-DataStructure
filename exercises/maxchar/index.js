// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {}

//|==>Solution 1.
//NOTE: Using arrays
// const maxChar = (str) =>{
//   let max = 0;
//   let maxChar = '';
//   str.split(' ').join('').split('').forEach(char => {
//     if(str.split(char).length > max){
//       console.log(str.split(char).length);
//       max = str.split(char).length - 1;
//       maxChar = char;
//     }
//   });
//   return `${maxChar} with ${max} times repeated.`;
// };

// console.log(maxChar("the tall grass is growing to much high"));


//|==>Solution 2.
// const maxChar = (str) =>{
//   let max = 0;
//   let maxChar = '';
//   str.split(' ').join('').split('').forEach(char => {
//     if(str.split(char).length > max){
//       max = str.split(char).length - 1;
//       maxChar = char;
//     }
//   });
//   return maxChar
// };

//|==>Solution 3
//NOTE: Using objects.
// const maxChar = (str) =>{
//   let max = 0;
//   let maxChar = '';
//   const objectsStr = {}; //Hello => {"H":1,"e":1,"l":2,"o":1}
//   const arrStr = str.split(' ').join('').split(''); 
//   arrStr.forEach(char => {
//     if(!objectsStr[char]){
//       objectsStr[char] = 1;
//     }else{
//       objectsStr[char]++;
//     }
//   });
//   arrStr.forEach(char => {
//     if(objectsStr[char] > max){
//       max = objectsStr[char] - 1;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// };

//|==>Solution 4.
// const maxChar = (str) =>{
//   let max = 0;
//   let maxChar = '';
//   const objectsStr = {}; //Hello => {"H":1,"e":1,"l":2,"o":1}
//   const arrStr = str.split(' ').join('').split(''); 
//   arrStr.forEach(char => {
//     if(!objectsStr[char]){
//       objectsStr[char] = 1;
//     }else{
//       objectsStr[char]++;
//     }
//   });
//   arrStr.forEach(char => {
//     if(objectsStr[char] > max){
//       max = objectsStr[char] - 1;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// };

//|==>Solution 5.
const maxChar = (str) =>{
    let max = 0;
    let maxChar = '';
    const objectsStr = {}; //Hello => {"H":1,"e":1,"l":2,"o":1}
    const arrStr = str.split(' ').join('').split(''); 
    arrStr.forEach(char => {
        // (!objectsStr[char]) ? objectsStr[char] = 1 : objectsStr[char]++;
        objectsStr[char] = objectsStr[char] + 1 || 1;
    });
    arrStr.forEach(char => {
        if(objectsStr[char] > max){
            max = objectsStr[char];
            maxChar = char;
        }
    });
    return maxChar;
};

//|==>The same solution but with only one loop.
// const maxCharacter = (str) =>{
//     const objectsStr = {}; //Hello => {"H":1,"e":1,"l":2,"o":1}
//     const arrStr = str.split(' ').join('').split(''); 
//     return arrStr.reduce((prev,curr) => {
//         objectsStr[curr] = objectsStr[curr] + 1 || 1;
//         return prev ? (objectsStr[curr] > objectsStr[prev] ? curr: prev) : curr;
//     },"");
// };

//console.log(maxChar("the tall grass is growing to much high"));

module.exports = maxChar;
