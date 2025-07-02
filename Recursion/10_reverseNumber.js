function reverseNumber(n){
     function helper(n,rev){
          if ( n === 0) return rev;
          return helper( Math.floor( n / 10 ) , rev * 10 + ( n % 10 ) ) ;
     }
     return helper(n,0)
}

console.log(reverseNumber(1234));