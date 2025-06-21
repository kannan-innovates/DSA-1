function binarySearch(target,arr){
     let left = 0;
     let right = arr.length-1;
     let first = -1;

     while(left <= right){
          let mid = Math.floor((left+right)/2);
          if(arr[mid] === target){
               first = mid;
               right = mid-1;
          }else if (arr[mid] < target){
               left = mid +1;
          }else {
               right = mid -1;
          }
     }
     return first;
}
let arr = [2, 4, 4, 4, 6, 8];
let target = 4;
console.log(binarySearch(target, arr));