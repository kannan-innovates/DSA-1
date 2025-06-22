function isPalindrome(str,start,end){
     if(start >=end) return true;
     if (str[start] !== str[end]){
          return false;
     }
     return isPalindrome(str,start+1 ,end-1)
}
let start = 0;
let str = 'racecar'
let end = str.length-1;
console.log(isPalindrome(str,start,end))