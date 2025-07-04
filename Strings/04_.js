// Count the repetition of every letter in a string

let str = "Chapterless is an amazing project";
let obj = {};
str = str.toLowerCase()

for (let i = 0; i < str.length; i++) {
     let char = str[i]

     if (char >= "a" && char <= "z") {
          if (obj[char]) {
               obj[char]++;
          } else {
               obj[char] = 1;
          }
     }



}
console.log(obj)