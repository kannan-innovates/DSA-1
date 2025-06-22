function sumOfNumbers(num){
     if (num === 0) return 0;
     return (num % 10) + sumOfNumbers(Math.floor(num/10));
}
let number = 1234;
console.log(sumOfNumbers(number));
