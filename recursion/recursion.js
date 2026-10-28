function sum(n) {
  if (n < 1) return 0;
  return n + sum(n - 1);
}
// console.log(sum(5));

function arraySum(arr, n) {
  if (n > arr.length - 1) return 0;

  return arr[n] + arraySum(arr, n + 1);
}
// console.log(arraySum([1, 2, 3 , 9, 6], 0));

function sumOfOddNumbers(arr, n) {
  if (n > arr.length - 1) return 0;
  return arr[n] % 2 == 0
    ? 0 + sumOfOddNumbers(arr, n + 1)
    : arr[n] + sumOfOddNumbers(arr, n + 1);
}
// console.log(sumOfOddNumbers([1, 2, 3, 4, 5, 6, 7], 0));

function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5));

var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
};
// console.log(isPowerOfTwo(18));


