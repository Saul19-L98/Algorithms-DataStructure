// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//|==>Solution 1.
// function fib(n) {
//     let arr = [];
//     for(let i = 0; i <= n; i++){
//         if( i <= 1){
//             arr.push(i);
//         }else{
//             arr.push(arr[i-2] + arr[i-1]);
//         }
//     }
//     return arr[arr.length - 1];
// }

//|==> Solution 2: Using recursive function.

// const fib = (n) => {
//     let arr = []
//     function fibHelper(n,counter = 0){
//         if( counter === (n + 1)){
//             return;
//         }
//         if(counter <= 1){
//             arr.push(counter);
//             return fibHelper(n,counter + 1);
//         }else{
//             arr.push(arr[counter-2] + arr[counter-1]);
//             return fibHelper(n,counter + 1);
//         }
//         fibHelper(n,fib);
//     }
//     fibHelper(n);
//     return arr[arr.length - 1];
// }

//|==>Solution 3.
// function fib(n) {
//     let arr = [0,1];
//     for(let i = 2; i <= n; i++){
//         arr.push(arr[i-2] + arr[i-1]);
//     }
//     return arr[n];
// }

//|==> Solution 4: Using recursive function.

// function fib(n){
//     if(n < 2){
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// function fib(n, arr = [0, 1]) {
//     if (n === 1) return arr[n];
//     if (arr.length === n + 1) return;
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//     fib(n, arr);
//     return arr[n];
// }

//|==> Solution 5: Using recursive function.

function memonize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this,args);
        cache[args] = result;
        // console.log(cache);
        // console.log(args);
        return result;
    };
}

function slowFib(n){
    if(n < 2){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memonize(slowFib);

//console.log(fib(4));

module.exports = fib;
