let arr = [4, 5, 9, 4, 9, 8, 7, 5, 6, 4];
let seen = [];
let duplicates = [];

for(let i=0; i<arr.length; i++){
     if(seen.includes(arr[i])){
          if(!duplicates.includes(arr[i])){
               duplicates.push(arr[i]);
          }
     }else{
          seen.push(arr[i])
     }
}

console.log(duplicates)