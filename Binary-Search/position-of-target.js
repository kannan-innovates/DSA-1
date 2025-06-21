function binarySearch(target,arr){
     let left = 0;
     let right = arr.length-1;

     while (left <= right){
          let mid = Math.floor((left + right)/2);
          if( arr[mid] === target){
               return mid;
          }else if (arr[mid] < target){
               left = mid + 1;
          }else{
               right = mid - 1;
          }
          
     }
     return -1;
}
let arr = [2,4,6,8];
let target = 2;
let result = binarySearch(target,arr);
console.log(result);