function reverseString(start, end, arr) {
    if (start >= end) return arr;

  
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return reverseString(start + 1, end - 1, arr);
}

let str = "kannan";
let arr = str.split(""); 

reverseString(0, arr.length - 1, arr);

let reversed = arr.join(""); 
console.log(reversed); 