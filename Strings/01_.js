// Return all words that start with a vowel from a sentence.

let sentence = "Every owl is over a huge orange umbrella";
let word = sentence.split(" ");
let vowels = "aeiou";
let result = [];

for (let i = 0; i < word.length; i++) {
     //1 let char = word[i].slice(0,1).toLowerCase();
     let char = word[i].charAt(0).toLowerCase()
     //2 let char = word[i][0].toLocaleLowerCase()
     if (vowels.includes(char)) {
          result.push(word[i])
     }
}



console.log(result.join(" "))