let arr = [1, 3, 4, 5, 7, 10];
let target = 10;
let found = false;
for(let i = 0; i < arr.length; i++){
     for(let j =i+1; j < arr.length;  j++){
          if(arr[i] + arr[j] === target){
            found = true;
            break;
          }
     }

}
console.log(found)

let arr = [1, 3, 4, 5, 7, 10];
let target = 10;
let left = 0;
let right = arr.length - 1;
let found = false;

while (left < right) {
  if (arr[left] + arr[right] === target) {
    found = true;
    console.log(`Pairs are ${arr[left]} and ${arr[right]}`);
    break;
  } else if (arr[left] + arr[right] < target) {
    left++;
  } else {
    right--;
  }
}

if (!found) {
  console.log("No pair found.");
}

let arr = [1, 3, 4, 5, 7, 10];
let target = 10;
let left = 0;
let right = arr.length - 1;
let found = false;

while (left < right) {
  let currentSum = arr[left] + arr[right];

  if (currentSum === target) {
    found = true;
    console.log(`Pairs are ${arr[left]} and ${arr[right]}`);
    left++;
    right--;
  } else if (currentSum < target) {
    left++;
  } else {
    right--;
  }
}

if (!found) console.log("No pair found.");
