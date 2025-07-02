function reverseArray(start,end,arr){
     if (start >= end) return arr;

     let temp = arr[start];
     arr[start] = arr[end];
     arr[end] = temp;

     return reverseArray(start+1,end-1,arr)
}
let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;
reverseArray(start,end,arr);
console.log(arr)