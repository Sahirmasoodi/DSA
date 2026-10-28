// var twoSum = function (nums, target) {
//   let a = 0;
//   while (a < nums.length) {
//     let b = a + 1;
//     while (b < nums.length) {
//       if (nums[a] + nums[b] == target) {
//         return [a, b];
//       } else {
//         b++;
//       }
//     }
//     a++;
//   }
// };
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (map[num] && map[num] !== i) {
      return [i, map[num]];
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 18));

var twoSumSorted = function (arr, target) {
  let i = 1;
  let j = arr.length - 1;
  while (i < arr.length || j > 0) {
    let res = arr[i] + arr[j];
    if (res == target) {
      return [i, j];
    }
    if (res < target) {
      i++;
    } else {
      j--;
    }
  }
};
// console.log(twoSumSorted([2, 4, 5, 6, 7, 8, 9], 13));

var isSubsequence = function (s, t) {
  let a = 0;
  let b = 0;
  while (b < t.length) {
    if (s[a] == t[b]) {
      a++;
      b++;
    } else {
      b++;
    }
  }

  return a == s.length;
};
// console.log(isSubsequence("abc", "ahbgdc"));
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let isTrue = false;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] == needle[j]) {
        isTrue = true;
      } else {
        isTrue = false;
      }
    }
    if (isTrue) return i;
  }
  return -1;
};
console.log(strStr("sarbutsad", "sad"));
