function reverse(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;

    [arr[left], arr[right]] = [arr[right], arr[left]];

    return reverse(arr,left+1,right-1);

}
let str = "kannan";
let arr = str.split("");
reverse(arr);
let result = arr.join("");
console.log(result)