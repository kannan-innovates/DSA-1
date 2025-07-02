function countZeros(n) {
     function helper(n,count){
          if ( n === 0) return count;

          if (n % 10 === 0){
               return helper(Math.floor(n/10),count +1);
          }else{
               return helper(Math.floor(n/10),count)
          }
     }
     return (helper(n,0))
}
console.log(countZeros(1020300)); 