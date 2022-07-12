// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function helper(objectStr,vowels){
//     let i = 0;
//     const keys = Object.keys(objectStr);
//     keys.forEach(key => {
//         if(vowels.includes(key)){
//             i += objectStr[key];
//         }
//     });
//     return i;
// }

// function vowels(str) {
//     const vowelsArr = ['a','e','i','o','u'];
//     let objectStr = {};
//     const filterStr = str.replace(/[^\w]/g,'').toLowerCase().split('');
//     filterStr.forEach(char => {
//         objectStr[char] = objectStr[char] + 1 || 1; 
//     });
    
//     return helper(objectStr,vowelsArr);
// }

//|==>Solution 2.
// function vowels(str) {
//     const vowelsArr = ['a','e','i','o','u'];
//     let i = 0;
//     const filterStr = str.replace(/[^\w]/g,'').toLowerCase().split('');
//     filterStr.forEach(char => {
//         vowelsArr.includes(char) ? i++ : i;
//     });
//     return i;
// }

//|==>Solution 3.
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    //console.dir(matches);
    return matches ? matches.length : 0;
}

//console.log(vowels('Why do you ask?'));

module.exports = vowels;
