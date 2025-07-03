function rotateLeft(arr, k) {
     let n = arr.length;
     k = k % n;
     let rotated = [];

     for (let i = k; i < n; i++) {
          rotated.push(arr[i]);
     }
     for (let i = 0; i < k; i++) {
          rotated.push(arr[i]);
     }
     return rotated;
}
let arr = [1, 2, 3, 4, 5];
let k = 2;
let result = rotateLeft(arr, k);
console.log(result); 