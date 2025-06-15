let arr = [1, 1, 2, 2, 3];
function removeDuplicates(arr) {
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}
let length = removeDuplicates(arr);
console.log(arr.splice(0, length));
