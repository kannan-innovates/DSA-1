let arr = [1, 2, 3, 4, 5];
// function rotateLeft(arr,k){
//     for (let i = 0; i < k; i++){
//       let first = arr.shift();
//       arr.push(first)
//     }
//     return arr;
// }

// console.log(rotateLeft(arr,2))

// function rotateLeft(arr,k){
//     let left = arr.slice(0,k);
//     let right = arr.slice(k);
//     return right.concat(left);
// }

// console.log(rotateLeft(arr,2))

function rotateLeft(arr,k){
    return arr.slice(k).concat(arr.slice(0,k))
}

console.log(rotateLeft(arr,2))