function numberToWords(n) {
     let words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

     if (n < 10) {
          console.log(words[n]);
          return;
     }
     if (n === 0) {
          console.log("Zero");
          return;
     }
     numberToWords(Math.floor(n / 10));

     console.log(words[n % 10]);

}
numberToWords(402);