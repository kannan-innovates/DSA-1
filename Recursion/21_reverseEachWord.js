let str = "hello world" //output = "olleh dlrow"

//dry logic
// let words = str.split(" ");
// let result = [];
// for ( let word of words){
//      result.push(word.split("").reverse().join(""))
// }
// console.log(result.join(" "))

//convert this logic into recursion

// function reverseWord(str){
//      if (str.length === 0) return "";
//      return reverseWord(str.slice(1)) + str[0];
// }

// let words = str.split(" ");
// let result = [];
// for ( let word of words){
//      word = word.split("");
//      result.push(reverseWord(word))
// }
// console.log(result.join(" "))

//single string reverse logic applying

function reverseWord(word,left = 0 , right = word.length-1){
     if (left >= right) return;
     [word[left],word[right]] = [word[right],word[left]];
     return reverseWord(word,left +1, right -1)
}
let words = str.split(" ");
let result = [];

for (let word of words){
     word = word.split("")
     reverseWord(word);
     result.push(word.join(""))
}
console.log(result.join(" "))

