// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {}

//|==>Solution 1.
// const anagrams = (firstStr,secondStr) => {
//   const strOne = firstStr.replace(/[^\w]/g,"").toLowerCase().split('');
//   const strTwo = secondStr.replace(/[^\w]/g,"").toLowerCase().split('');
//   const objectStrOne = {};
//   const objectStrTwo = {};

//   strOne.forEach(char => {
//     objectStrOne[char] = objectStrOne[char] + 1 || 1;
//   });
//   strTwo.forEach(char => {
//     objectStrTwo[char] = objectStrTwo[char] + 1 || 1;
//   });
//   //IMPORTANT:Verification if objects are the same, using their keys to compare each other.
//   const keys1 = Object.keys(objectStrOne);
//   const keys2 = Object.keys(objectStrTwo);
//   if(keys1.length !== keys2.length){
//     return false;
//   }
//   for(let key of keys1){
//     if(objectStrOne[key] !== objectStrTwo[key]){
//       return false;
//     }
//   }
//   return true;
// };

//|==>Solution 2: Using helper functions.

// const shallowEqual =(object1, object2)=> {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const strTransformation = str => str.replace(/[^\w]/g,"").toLowerCase().split('');

// const setObjectOfStrings = (str,objectStr) => str.forEach(char => objectStr[char] = objectStr[char] + 1 || 1);

// const anagrams = (firstStr,secondStr) => {
//   const strOne = strTransformation(firstStr);
//   const strTwo = strTransformation(secondStr);
//   const objectStrOne = {};
//   const objectStrTwo = {};
//   setObjectOfStrings(strOne,objectStrOne);
//   setObjectOfStrings(strTwo,objectStrTwo);
//   return shallowEqual(objectStrOne,objectStrTwo);
// };

//|==>Solution 3.

// const shallowEqual =(object1, object2)=> {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const strTransformation = (str) => {
//   let objectOfStr = {}; 
//   str.replace(/[^\w]/g,"").split('').forEach(char => {
//     objectOfStr[char] = objectOfStr[char] + 1 || 1;
//   });
//   console.log(objectOfStr);
//   return objectOfStr;
// }

// const anagrams = (firstStr,secondStr) => {
//   const objectStrOne = strTransformation(firstStr);
//   const objectStrTwo = strTransformation(secondStr);4
//   return shallowEqual(objectStrOne,objectStrTwo);
// };

//|==>Solution 4: Using sort method.
const cleanString = str => str.replace(/[^\w]/g,"").split('').sort().join(''); 

const anagrams = (firtsStr,secondStr) => {
    return cleanString(firtsStr) === cleanString(secondStr);
};

// console.log(anagrams("One Two three!!","Two One three?"));//true

//console.log(anagrams("One Two!!","Two One ? dfdasdf"));//false

module.exports = anagrams;
