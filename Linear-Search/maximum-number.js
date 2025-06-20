function findMax(arr){
     let max = arr[0];
     for (let i = 1; i < arr.length; i++){
          if(arr[i] > max){
               max = arr[i]
          }
     }
     return max;
}
let arr = [12, 45, 3, 22, 67, 5];
console.log(findMax(arr));  