function reverseArray(arr, left = 0, right = arr.length - 1) {
     if (left >= right) return;

     [arr[left], arr[right]] = [arr[right], arr[left]];

     return reverseArray(arr,left+1,right-1)
}

let arr = [1, 2, 3, 4, 5];
reverseArray(arr);

console.log(arr)