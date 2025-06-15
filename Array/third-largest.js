let arr = [12, 35, 1, 10, 34, , 33, 1];
let max = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    thirdMax = secondMax;
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
    thirdMax = secondMax;
    secondMax = arr[i];
  } else if (arr[i] > thirdMax && arr[i] !== max && arr[i] !== secondMax) {
    thirdMax = arr[i];
  }
}

if (thirdMax == -Infinity) {
  console.log(`Not found`);
} else {
  console.log(`ThirdLargest is ${thirdMax}`);
}
