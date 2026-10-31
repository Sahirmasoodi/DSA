function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }
    if (secondLargest < arr[i] && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// console.log(findSecondLargest([2, 8, 9, 12, 34, 98, 51,3,65]));

function star(n) {
  let x = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      x = x + " * ";
    }

    console.log(x);
    x = "";
  }
}
// console.log(star(5));

function countDigits(n) {
  if (n == 0) {
    return 1;
  }

  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
// console.log(countDigits(12345));

// function isPalindrome(){

// }
// console.log(isPalindrome());

function removeDuplicates(arr) {
  let n = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[n] < arr[i]) {
      ++n;
      arr[n] = arr[i];
    }
  }
  return n;
}
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var removeElement = function (nums, val) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[n] = nums[i];
      n++;
    }
  }

  return nums;
};
// console.log(removeElement([3, 3, 2, 2, 3], 3));

var reverseString = function (strs) {
  let n = 0;
  let m = strs.length - 1;
  while (n < m) {
    let temp = strs[n];
    strs[n] = strs[m];
    strs[m] = temp;
    n++;
    m--;
  }
  return strs;
};
// console.log(reverseString(["h", "e", "L","Z", "l", "o"]));

var maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return max;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// var merge = function (nums1, m, nums2, n) {
//   let num1Copy = nums1.slice(0, m);
//   let p1 = 0;
//   let p2 = 0;
//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && num1Copy[p1] < nums2[p2])) {
//       nums1[i] = num1Copy[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }
//   return nums1;
// };
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0 || (p1 >= 0 && nums1[p1] > nums2[p2])) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};
// console.log(merge([1, 1, 0, 0, 0, 0], 2, [3, 3, 3, 3], 4));

var moveZeroes = function (nums) {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[p];
      nums[p] = nums[i];
      nums[i] = temp;
      p++;
    }
  }
  return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let streak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    }
    if (streak < count) {
      streak = count;
    }
    if (nums[i] !== 1) {
      count = 0;
    }
  }
  return streak;
};
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1]));

var missingNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result = result + nums[i];
    }
  }
  let n = 0;
  for (let i = 1; i <= nums.length; i++) {
    n = n + i;
  }
  return n - result;
};
// console.log(missingNumber([3, 0, 1]));

var singleNumber = function (nums) {
  // nums.sort((a, b) => a - b);
  // let i = 0;
  // while (i < nums.length) {
  //   if (nums[i] !== nums[i + 1]) {
  //     return nums[i];
  //   } else {
  //     i = i + 2;
  //   }
  // }
  // return nums;

  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
// console.log(singleNumber([4, 1, 2, 1, 2]));

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}
// console.log(sum(5));

function arraySum(arr, n) {
  if (n == 0) return arr[n];
  return arr[n] + arraySum(arr, n - 1);
}

// console.log(arraySum([5, 2, 6, 1, 3],[5, 2, 6, 1, 3].length - 1));

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5));

function powerOfTwo(n) {}
// console.log(powerOfTwo(14));

// function fib(n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    // console.log(m);

    if (target == nums[m]) {
      return m;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      i = m + 1;
    }
  }
  return -1;
};
// console.log(search([-1, 0, 3, 4, 9, 10, 12], 9));

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubble([4, 5, 7, 1, 6, 2]));

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
// console.log(selection([4, 5, 7, 1, 6, 2]));

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {}

  return arr;
}
// console.log(insertion([4, 5, 7, 1, 6, 2]));

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
   let map = new Set()
   let curr = head
   while(curr){
    if(map.has(curr)) return true
    map.add(curr)
    curr= curr.next

   }
   return false
};

var removeElements = function (head, val) {
 let sentinal = new ListNode(0,head)
 let curr = sentinal
 while(curr && curr.next){
    if(curr.next.val==val){
        curr.next = curr.next.next
    } else{
        curr= curr.next
    }
 }
 return sentinal.next
};
