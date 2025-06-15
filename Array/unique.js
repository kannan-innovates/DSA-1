let arr = [3, 1, 2, 3, 4, 2, 1, 5];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}

console.log("✅ Unique elements:", unique);
