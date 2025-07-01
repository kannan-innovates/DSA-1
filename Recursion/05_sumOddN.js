function sumOdd(n){
     if ( n === 0) return 0;

     if (n % 2 !== 0){
          return n + sumOdd ( n - 1)
     }else{
          return sumOdd( n - 1);  
     }
}
 
console.log(sumOdd(5)) // Output: 9 (because 1 + 3 + 5)