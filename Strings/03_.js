//  Return the count of each vowel separately

let str = "Chapterless is an amazing project";
str = str.toLowerCase();
let vowels = "aeiou"
let count = { a : 0, e : 0, i : 0, o : 0 , u: 0};

// for (let i = 0; i < str.length; i++){
//      for (let key in count){
//           if (key === str[i]){
//                count[key]++
//           }
//      }
// }    
// console.log(count)

for (let i = 0; i < str.length; i++){
     if (count.hasOwnProperty(str[i])){
          count[str[i]]++;
     }
}
console.log(count)