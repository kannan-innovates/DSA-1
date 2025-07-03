function rotateRight(arr,k){
     let n = arr.length;
     k = k % n;
     let rotated = [];

     for (let i = n - k; i < arr.length; i++){
          rotated.push(arr[i]);
     }
     for (let i = 0 ; i < n - k; i++){
          rotated.push(arr[i]);
     }
     return rotated;
}

let arr = [1, 2, 3, 4, 5];
let result = rotateRight(arr, 2);
console.log(result);  // Output: [4, 5, 1, 2, 3]