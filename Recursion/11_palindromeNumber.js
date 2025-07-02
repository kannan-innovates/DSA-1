function isPalindrome(n){ 
     function reverse(n,rev){
          if (n === 0) return rev;
          return reverse( Math.floor( n / 10), rev * 10 + (n % 10) );
     }
     return  n === reverse(n,0)
}
console.log(isPalindrome(121))