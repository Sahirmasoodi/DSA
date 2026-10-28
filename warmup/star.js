let arr = [0, 1, 2, 2, 3, 0, 4, 2];

function star1() {
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + " * ";
    }
    console.log(row);
  }
}
// star1();

function star2() {
  let n = 4;
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + " * ";
    }
    console.log(row);
  }
}

// star2();

function star3() {
  let n = 5;
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}
// star3();

function star4() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " - ";
    }
    for (let k = 0; k < i + 1; k++) {
      row = row + " * ";
    }
    console.log(row);
  }
}
// star4();

function star5() {
  let n = 5;
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + toggle;
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
// star5();

// let n = 4;
// let array = ["A", "B", "C", "D"];
// for (let i = 0; i < array.length; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + array[j];
//   }
//   console.log(row);
// }

// HOLLOW SQUARE
// let n = 7;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
//       row = row + " * ";
//     } else {
//       row = row + "   ";
//     }
//   }
//   console.log(row);
// }

var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  let xCopy = x;

  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  return xCopy === rev;
};

// console.log(isPalindrome(11211));
var reverse = function (x) {
  let rev = 0;
  let xCopy = x;
  x = Math.abs(x);
  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }
  let range = 2 ** 31;
  if (rev < -range || rev > range) return 0;

  return xCopy < 0 ? -rev : rev;
};
// console.log(reverse());
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
// console.log(twoSum(arr, 6),"d");

var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return nums;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k = k + 1;
    }
  }
  return k;
};

// console.log(removeElement(arr, 2));

var reverseString = function (s) {
  let temp = "";
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    temp = s[n - 1 - i];
    s[n - 1 - i] = s[i];
    s[i] = temp;
  }
  return s;
};
// console.log(reverseString(["h", "e", "l", "l", "o"]));

var maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];
  let k = 0;
  for (let i = k + 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return max;
};

// console.log(maxProfit([7, 6, 4, 3, 1]));

var moveZeroes = function (nums) {
  let k = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    } else {
      zeroCount++;
    }
  }

  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
// console.log(moveZeroes([0,1,0,3,12]));

// const str = "sahir";
// str.includes("Script")
// str.startsWith("Java")
// str.endsWith("view")
// str.indexOf("S")
// str.lastIndexOf("e")
// console.log(str.split("").reverse().join(''));

// function countChars(str) {
//   let obj = {};
//   for (let char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }
//   return obj;
// }

// console.log(countChars("hello"));

var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let countStreak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      count = 0;
    }
    if (countStreak < count) {
      countStreak = count;
    }
  }
  return countStreak;
};
// console.log(
//   findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,1,1]),
// );

var missingNumber = function (prices) {
  let newSum = 0;
  let n = prices.length;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < prices.length; i++) {
    newSum = newSum + prices[i];
  }
  return sum - newSum;
};
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// var singleNumber = function (nums) {
//   let obj = {};
//   let val = 0;
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = (obj[nums[i]] || 0) + 1;
//   }

//   for (let i = 0; i < Object.keys(obj).length; i++) {
//     if (Object.values(obj)[i] == 1) {
//       val = Object.keys(obj)[i];
//     }
//   }
//   return val;
// };
// console.log(singleNumber([4, 4, 0, 1, 2, 1, 2]));

var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
