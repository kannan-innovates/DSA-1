// function isPalindrome(str){
//      let left = 0;
//      let right = str.length-1;

//      while (left < right){
//           if (str[left] !== str[right]){
//                return false;
//           }
//           left++;
//           right--;
//      }
//      return true;
// }
// console.log(isPalindrome("madam"));     
// console.log(isPalindrome("racecar"));  
// console.log(isPalindrome("hello"));     

function isPalindromeRecursive(str,left = 0,right = str.length-1){
     if (left >= right) return true;

     if (str[left]!== str[right]){
          return false;
     }
     return isPalindromeRecursive(str,left+1,right-1);
}
console.log(isPalindromeRecursive("madam"));     
console.log(isPalindromeRecursive("hello"));