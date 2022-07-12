// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
// let arr2 = [1,234,5,6]

//let arr1 = [100, -40, 500, -124, 0, 21, 7];

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < (arr.length - i); j++){
            if(arr[j] > arr[j+1]){
                const nextElement = arr[j+1]; 
                arr[j+1] = arr[j];
                arr[j] = nextElement;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for(let j = (i + 1); j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
            }
        } 
        if(arr[i] !== arr[indexOfMin]){
            let swapElement = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = swapElement;
        }
    }
    return arr;
}

//console.dir(selectionSort(arr1));

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge(mergeSort(left),mergeSort(right));
}

//const left = [1, 10];
//const right = [2, 8, 12];

function merge(left, right) {
    let results = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    //NOTE: iterating through out every element in the array to push them into results.
    // if(left.length !== 0){
    //     left.forEach(element => {
    //         results.push(element);
    //     });
    // }
    // if(right.length !== 0){
    //     right.forEach(element => {
    //         results.push(element);
    //     });
    // }
    return [...results,...left,...right];
}

//console.dir(merge(left,right));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
