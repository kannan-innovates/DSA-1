function linearSearch(arr, target) {
     let first = -1;
     let last = -1;

     for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
               if (first === -1) {
                    first = i;
               }

               last = i;
          }
     }
     return [first, last];
}
let arr = [4, 7, 2, 7, 9, 7];
let target = 7;
let result = linearSearch(arr, target);
console.log(result)