// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/////////////////////////////////////////////////////////////////////////
//Atempt one.
// function matrix(n) {
//     let arr2 = [];
//     let count = 0;
//     for(let row = 0; row < n; row++){
//         let arr1 = [];
//         for(let column = 0; column < n; column++){
//             count += 1;
//             arr1.push(count);
//         }
//         arr2.push(arr1);
//     }
//     const element1 = arr2[0];
//     const element2 = arr2[1];
//     const arrLeftovers = arr2.slice(2,n);
    
//     const element2Reversed = element2.reverse();

//     return element2;
// }
/////////////////////////////////////////////////////////////////////////

//|==> Solution 1.
function matrix(n){
    const results = [];
    let counter = 1;
    let start_column = 0;
    let start_row = 0;
    let end_column = n - 1;
    let end_row = n - 1;
    for( let i = 1; i <= n; i++){ 
        results.push([])
    };
    // while(n*n){
    while(start_column <= end_column && start_column <= end_column){    
        //1 top row
        for(let i = start_column; i <= end_column; i++ ){
            results[start_row][i] = counter;
            counter++;            
        }
        start_row++;
        //2 right column
        for(let i = start_row; i <= end_row; i++){
            results[i][end_column] = counter;
            counter++;
        }
        end_column--;
        //3 bottom row
        for(let i = end_column; i >= start_column;i--){
            results[end_row][i] = counter;
            counter++;
        }
        end_row--;
        //4 left column
        for(let i = end_row; i >= start_row;i--){
            results[i][start_column] = counter;
            counter++;
        }
        start_column++;
    }
    return results;
}

//console.dir(matrix(6));

module.exports = matrix;
