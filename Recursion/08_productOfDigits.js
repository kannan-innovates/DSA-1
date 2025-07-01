function productOfDigits(n){
     if (n < 10) return n;

     return (n % 10) * productOfDigits(Math.floor(n/10))
}
console.log(productOfDigits(55)) // 5*5 = 25;git a