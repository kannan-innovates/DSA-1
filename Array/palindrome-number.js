
// let isPalindrome = true;
// let arr = [1,2,3,4,3,2,1,0];
// for(let i = 0; i < arr.length; i++){
//      for (let j = arr.length-1-i; j >= arr.length-1-i; j --){
//           if(arr[i]!== arr[j]){
//                isPalindrome = false;
//           }
//      }
// }
// console.log(isPalindrome)


// let arr = [1,2,3,4,3,2,1];
// let isPalindrome = true;
// for(let i = 0; i < Math.floor(arr.length/2); i++){
//      if(arr[i]!== arr[arr.length-1-i]){
//           isPalindrome = false;
//           break;
//      }
// }

// console.log(isPalindrome)



let arr = [1,2,3,4,3,2,1,0];
let left = 0;
let right = arr.length-1;
let isPalindrome = true;
while(left < right){
     if(arr[left] !== arr[right]){
          isPalindrome = false;
          break;
     }
     left++;
     right--;
}

console.log(isPalindrome)






