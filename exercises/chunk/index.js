// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {}
//|==>Solution 1 whit for.
// const chunk = (arr,nChunk) => {
//   let storedArrays = [];
//   for(let i = 0; i < arr.length; i+=nChunk){
//     let newArr = arr.slice(i,i+nChunk);
//     storedArrays.push(newArr);
//   }
//   return storedArrys;
// };

//|==>Solution 2 with for of.
// const chunk = (array,size) => {
//   let chunked = [];
//   for(let element of array){
//     let last = chunked[chunked.length - 1];
//     console.dir(last);
//     if( !last || last.length === size){
//       chunked.push([element]);
//     }else{
//       last.push(element);
//     }
//   }
//   return chunked;
// };

//|==>Solution 3 with while.
const chunk = (array,size) => {
    let chunked = [];
    let index = 0;
    while(index < array.length){
        chunked.push(array.slice(index,index + size));
        index += size;
    }
    return chunked;
};

//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3));

module.exports = chunk;
