

const arr = [1, 2];
arr.push(3);
console.log(arr);   // valid 

arr[1] = arr[1]+2;
console.log(arr);   // valid

const newArr = [1, 2, 3]
arr = newArr // it is not valid