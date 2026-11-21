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
var hasCycle = function (head) {
  let map = new Set();
  let curr = head;
  while (curr) {
    if (map.has(curr)) return true;
    map.add(curr);
    curr = curr.next;
  }
  return false;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeElements = function (head, val) {
  let sentinal = new ListNode(0, head);
  let curr = sentinal;
  while (curr && curr.next) {
    if (curr.next.val == val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return sentinal.next;
};

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  let l = length - n;
  console.log(l);
};

// console.log(Math.floor(12%3));

var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] == x) {
        arr.push(i);
        break;
      }
    }
  }
  return arr;
};
// console.log(findWordsContaining(["leet", "code"], "e"));
var numJewelsInStones = function (jewels, stones) {
  let map = new Set();
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    map.add(jewels[i]);
  }
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      count++;
    }
  }

  return count;
};

var maxFreqSum = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] = map[s[i]] + 1;
    } else {
      map[s[i]] = 1;
    }
  }

  let l1 = 0;
  let l2 = 0;

  for (let i in map) {
    if (["a", "e", "i", "o", "u"].includes(i)) {
      l1 = l1 < map[i] ? map[i] : l1;
    } else if (l2 < map[i]) {
      l2 = map[i];
    }
  }
  return l1 + l2;
};
// console.log(maxFreqSum("aeiaeia"));

var reverseStr = function (s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let mid = Math.floor(k / 2);
    for (let j = 0; j < mid; j++) {
      let temp = s[i + j];
      s[i + j] = s[i + k - j - 1];
      s[i + k - j - 1] = temp;
    }
  }
  return s.join("");
};

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let e = s.length - 1;
  while (i < e) {
    if (!s[i].match(/[a-z0-9]/)) {
      i++;
    } else if (!s[e].match(/[a-z0-9]/)) {
      e--;
    } else if (s[i] !== s[e]) {
      return false;
    } else {
      i++;
      e--;
    }
  }
  return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(Math.floor("32476"/10));

var largestOddNumber = function (num) {
  if (num % 2 !== 0) return num;
  let n = num;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 == 0) {
      n = Math.floor(n / 10);
      console.log(i);
    } else {
      break;
    }
  }
  return `${n}`;
};
// console.log(largestOddNumber("3542272722120"));

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    if (map[strs[i].split("").sort().join("")]) {
      map[strs[i].split("").sort().join("")] = [
        ...map[strs[i].split("").sort().join("")],
        strs[i],
      ];
    } else {
      map[strs[i].split("").sort().join("")] = [strs[i]];
    }
  }

  return Object.values(map);
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var isValid = function (s) {
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else {
      let ele = stack.pop();
      if (map[ele] !== s[i]) {
        return false;
      }
    }
  }
  console.log(stack);
  return true;
};
// console.log(isValid("(({}))"));
var removeOuterParentheses = function (s) {
  let stack = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
      if (stack.length > 1) res = res + s[i];
    } else {
      if (stack.length > 1) res = res + s[i];
      stack.pop();
    }
  }
  return res;
};
// console.log(removeOuterParentheses("(()())(())"));
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!["+", "-", "/", "*"].includes(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let res;
      switch (tokens[i]) {
        case "+":
          res = a + b;
          break;
        case "-":
          res = b - a;
          break;
        case "*":
          res = a * b;
          break;

        case "/":
          res = b / a;
          break;
      }
      stack.push(res);
    }
  }
  return stack.pop();
};
// var evalRPN = function (tokens) {
//   let stack = [];
//   for (let i = 0; i < tokens.length; i++) {
//     if (!["+", "-", "/", "*"].includes(tokens[i])) {
//       stack.push(Number(tokens[i]));
//     } else {
//       let a = stack.pop();
//       let b = stack.pop();
//       let res = eval(`${b}${tokens[i]}${a}`);
//       stack.push(Math.trunc(res));
//     }
//   }
//   return stack.pop();
// };
// console.log(evalRPN(["2", "1", "+", "3", "*"]));

var nextGreaterElement = function (nums1, nums2) {
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    let x = -1;
    let y = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] == nums1[i]) y = true;
      console.log(i, j, y);

      if (y && nums2[j] > nums1[i]) {
        x = nums2[j];
        break;
      }
    }
    res.push(x);
  }
  return res;
};
// var nextGreaterElement = function (nums1, nums2) {
//   let stack = [];

// };
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));

var isPerfectSquare = function (num) {
  for (let i = 0; i < num; i++) {
    let res = i * i;
    if (res == num) {
      return true;
    }
    if (res > num) return false;
  }
  return false;
};
// console.log(isPerfectSquare(8));

var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let s = [];
  s.push(nums2[nums2.length - 1]);
  map[nums2[nums2.length - 1]] = -1;

  for (let i = nums2.length - 2; i >= 0; i--) {
    if (nums2[i] < s[s.length - 1]) {
      map[nums2[i]] = s[s.length - 1];
      s.push(nums2[i]);
    } else {
      while (s.length) {
        if (s[s.length - 1] < nums2[i]) {
          s.pop();
        } else {
          map[nums2[i]] = s[s.length - 1];
          break;
        }
      }
      if (!s.length) map[nums2[i]] = -1;
      s.push(nums2[i]);
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      nums1[i] = map[nums1[i]];
    }
  }
  return nums1;
};
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// [4,1,2] [1,3,4,2,6]

var dailyTemperatures = function (t) {
  let n = t.length;
  let s = [];
  s.push(n - 1);
  let ans = Array(n).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    while (s.length) {
      let top = s[s.length - 1];
      if (t[top] > t[i]) {
        ans[i] = top - i;
        break;
      } else {
        s.pop();
      }
    }
    s.push(i);
  }
  return ans;
};
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
var nextGreaterElements2 = function (nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;
  let stack = [];
  stack.push(arr[n - 1]);
  let ans = Array(n).fill(-1);
  ans[n - 1] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > arr[i]) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }

  return ans.slice(0, nums.length);
};
// console.log(nextGreaterElements2([1, 2, 3, 4, 3]));

var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let q = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j,0]);
      }
    }
  }
  let maxMin = 0
  while (q.length) {
    let [x, y,minutes] = q.shift();
    if (x < m - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      q.push([x+1,y,minutes+1])
    }
    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      q.push([x-1,y,minutes+1])
    }
    if (y < n - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      q.push([x,y+1,minutes+1])
    }
    if (y > 0 && grid[x][y - 1] == 1) {
       grid[x][y - 1] = 2;
      q.push([x,y-1,minutes+1]) = 2;
    }
    maxMin = Math.max(maxMin,minutes)
  }
  
  for (let i = 0; i < m; i++) {
     for (let j = 0; j < n; j++) {
     
       if (grid[i][j]==1) {
        return -1
       }
     }
    
  }
  return maxMin
};

console.log(
  orangesRotting([[2,1,1],[1,1,0]]),
);
var mySqrt = function (x) {
    if(x==0) return 0
    for (let i = 0; i <= x; i++) {
        let y = i * i
        if (y == x) {
            return i
        }
        if (y > x) {
            return i - 1
        }
    }
};