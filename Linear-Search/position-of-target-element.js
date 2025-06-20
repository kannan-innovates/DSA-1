function linerSearch (arr,target){
     for (let i = 0; i < arr.length; i++){
          if (arr[i] === target){
               return i;
          }
     }
     return -1;
}

let arr = [4, 10, 7, 3, 15, 8];
let result = linerSearch(arr,15);
console.log(result);