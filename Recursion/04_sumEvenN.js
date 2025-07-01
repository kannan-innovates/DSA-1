function sumEven(n) {
     if (n === 0) return 0;

     if (n % 2 === 0) {
          return n + sumEven(n - 1);
     } else {
         return sumEven(n - 1)
     }
}
console.log(sumEven(5))  // Output: 6 (because 2 + 4)