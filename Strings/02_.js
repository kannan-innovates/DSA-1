// Count the number of vowels in a given string

let str = "Chapterless is an amazing project";

let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < str.length; i++){
     if (vowels.includes(str[i])){
          count++;
     }
}
console.log(count);

