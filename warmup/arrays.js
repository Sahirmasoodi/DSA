// write a function that searches for an element in an array and returns the index, else return -1

let arr = [1, 23, 4, 5, 11, 19, 14, 15, 0];
function searchIndexOfElement(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return i;
    }
  }
  return -1;
}
// const val = searchIndexOfElement(arr, 5);
// console.log(val);

// number of negeative numbers inside array .
let arr1 = [-1, 23, -4, 5, -11, 19, -14, -15, 0];
function numberofNegativenumbers(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

// const val2 = numberofNegativenumbers(arr1)
// console.log(val2);

//largest num inside an array
let arr2 = [1, 23, 4, 5, -11, 19, -14, 15, 50];

function largestNumber(array) {
  let largestNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
      largestNum = array[i];
    }
  }
  return largestNum;
}
// const val3 = largestNumber(arr2)
// console.log(val3);

// let arr3 = [1, 63, 92, 110, -11, 19, -14, 120, 51];
let arr3 = [5, 10, 4];
function secondLargestNumber(array) {
  let largestNum = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
      secondLargest = largestNum;
      largestNum = array[i];
    } else if (array[i] > secondLargest && array[i] !== largestNum) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}
const val4 = secondLargestNumber(arr3);
// console.log(val4);

var moveZeroes = function (nums) {

};
function bestTime(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max) {
        max = arr[j] - arr[i];
      }
    }
  }
  return max;
}
// console.log(bestTime([5, 1, 0, 3, 4, 6]));