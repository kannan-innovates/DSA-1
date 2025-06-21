function firstOccurrence(arr, target) {
     let left = 0;
     let right = arr.length - 1;
     let first = -1;
     while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
               first = mid;
               right = mid - 1;
          } else if (arr[mid] < target) {
               left = mid + 1;
          } else {
               right = mid - 1;
          }
     }
     return first;

}

function lastOccurrence(arr, target) {
     let left = 0;
     let right = arr.length - 1;
     let last = -1;

     while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
               last = mid;
               left = mid + 1;
          } else if (arr[mid] < target) {
               left = mid + 1;
          } else {
               right = mid - 1;
          }
     }
     return last;
}

function countOccurrence(arr, target) {
     let first = firstOccurrence(arr, target);
     let last = lastOccurrence(arr, target);
     if (first === -1 || last === -1) return 0;
     return last - first + 1;
}
let arr = [1, 2, 4, 4, 4, 5, 6];
let target = 4;
console.log(countOccurrence(arr, target));