function linerSearch(arr,target){
     let count = 0;
     for (let i = 0; i < arr.length; i++){
          if(arr[i] === target){
               count++;
          }
     }
     return count;
}
let arr = [4, 4, 4, 4, 13, 13];
let result = linerSearch(arr,13);
console.log(result);
