// var MyStack = function () {
//   this.q1 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   this.q1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   let n = this.q1.length;
//   for (let i = 0; i < n - 1; i++) {
//     this.q1.push(this.q1.shift());
//   }
//   return this.q1.shift();
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   let n = this.q1.length;
//   for (let i = 0; i < n - 1; i++) {
//     this.q1.push(this.q1.shift());
//   }
//   let ele = this.q1.shift();
//   this.q1.push(ele);
//   return ele;
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   return this.q1.length === 0;
// };

// /**
//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */

// var MyQueue = function () {
//   this.s1 = [];
//   this.s2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   this.s1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   let n = this.s1.length;

//   for (let i = 0; i < n - 1; i++) {
//     let last = this.s1.pop();
//     this.s2.push(last);
//   }
//   let m = this.s2.length;
//   let ele = this.s1.pop();
//   for (let i = 0; i < m; i++) {
//     this.s1.push(this.s2.pop());
//   }
//   return ele;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   let n = this.s1.length;
//   for (let i = 0; i < n - 1; i++) {
//     let last = this.s1.pop();
//     this.s2.push(last);
//   }
//   let ele = this.s1.pop();
//   this.s2.push(ele);
//   let m = this.s2.length;
//   for (let i = 0; i < m; i++) {
//     this.s1.push(this.s2.pop());
//   }
//   return ele;
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   return this.s1.length === 0;
// };

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var isValid = function (s) {
  let stack = [];
  let map = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || s[i] !== map[top]) {
        return false;
      }
    }
  }

  return stack.length == 0;
};
// console.log(isValid("["));

var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  if (this.s.length == 0) {
    this.s.push([value, val]);
  } else {
    let minVal = Math.min(value, this.s[this.s.length - 1][1]);
    this.s.push(value, minVal);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// var removeOuterParentheses = function (s) {
//   let stack = [];
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       stack.push(s[i]);
//       if (stack.length > 1) {
//         result = result + s[i];
//       }
//     } else {
//       if (stack.length > 1) {
//         result = result + s[i];
//       }
//       stack.pop();
//     }
//   }
//   return result;
// };

var removeOuterParentheses = function (s) {
  let count = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      count++;
      if (count > 1) {
        result = result + s[i];
      }
    } else {
      if (count > 1) {
        result = result + s[i];
      }
      count--;
    }
  }
  return result;
};
// console.log(removeOuterParentheses("(()())(()(()))()"));

// var evalRPN = function (tokens) {
//   let stack = [];

//   for (let i = 0; i < tokens.length; i++) {
//     if (
//       tokens[i] !== "+" &&
//       tokens[i] !== "-" &&
//       tokens[i] !== "/" &&
//       tokens[i] !== "*"
//     ) {
//       stack.push(tokens[i]);
//     } else {
//       let a = Number(stack.pop());
//       let b = Number(stack.pop());
//       let res = eval(b + tokens[i] + a);

//       stack.push(res);
//     }
//   }
//   return stack[0];
// };
var evalRPN = function (t) {
  let s = [];
  let map = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      let a = s.pop();
      let b = s.pop();
      let res = map[t[i]](+a, +b);
      s.push(res);
    } else {
      s.push(t[i]);
    }
  }
  return s.pop();
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));

// var nextGreaterElement = function (nums1, nums2) {
//   let s = [];
//   for (let i = 0; i < nums1.length; i++) {
//     let ele = -1;
//     for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
//       if (nums2[j] > nums1[i]) {
//         ele = nums2[j];
//         break;
//       }
//     }
//     s.push(ele);
//   }
//   return s;
// };

var nextGreaterElement1 = function (nums1, nums2) {
  let s = [];
  let map = {};
  let n = nums2.length;
  map[nums2[n - 1]] = -1;
  s.push(nums2[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (s.length) {
      let top = s[s.length - 1];
      if (top > nums2[i]) {
        map[nums2[i]] = top;
        break;
      } else {
        map[nums2[i]] = -1;
        s.pop();
      }
    }
    s.push(nums2[i]);
  }
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    arr.push(map[nums1[i]]);
  }
  return arr;
};

// console.log(nextGreaterElement1([4, 1, 2], [1, 3, 4, 2]));

var dailyTemperatures = function (t) {
  let s = [];
  let n = t.length;
  let arr = Array(n).fill(0);
  s.push(n - 1);
  for (let i = n - 2; i >= 0; i--) {
    while (s.length) {
      let top = s[s.length - 1];
      if (t[top] > t[i]) {
        arr[i] = top - i;
        break;
      } else {
        s.pop();
      }
    }
    s.push(i);
  }
  return arr;
};
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 78]));

// var nextGreaterElements = function (nums) {                        ///cycle array
//   let arr = [...nums, ...nums];
//   let s = [];
//   let p = [];
//   let n = arr.length;
//   s.push(arr[n - 1]);
//   for (let i = n-2; i >=0; i--) {
//     while (s.length) {
//       let top = s[s.length - 1];
//       if (top > arr[i]) {
//         p[i] = top;
//         break;
//       } else {
//         s.pop();
//       }
//     }
//     if (!s.length) {
//       p[i] = -1;
//     }
//     s.push(arr[i]);
//   }
//   return p.slice(0,n/2);
// };

var nextGreaterElements = function (nums) {
  let n = nums.length;
  let s = [];
  let res = Array(n).fill(-1);
  for (let i = 2 * n - 2; i >= 0; i--) {
    while (s.length) {
      let top = s[s.length - 1];
      if (top > nums[i % n]) {
        res[i % n] = top;
        break;
      } else {
        s.pop();
      }
    }
    s.push(nums[i % n]);
  }
  return res;
};
// console.log(nextGreaterElements([1, 2, 1]));

// var mySqrt = function (x) {

//   for (let i = 0; i <= x; i++) {
//     if (i * i == x) {
//       return i;
//     }
//     if (i * i > x) {
//       return i-1
//     }
//   }
// };


var orangesRotting = function (grid) {
  let q = [];
  let m = grid.length;
  let n = grid[0].length;
  //find rotten oranges
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j, 0]);
      }
    }
  }
  let maxMin = 0;
  while (q.length) {
    let [x, y, level] = q.shift();
    if (x < m - 1 && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      q.push([x + 1, y, level + 1]);
    }
    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      q.push([x - 1, y, level + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      q.push([x, y + 1, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      q.push([x, y - 1, level + 1]);
    }
    maxMin = Math.max(level, maxMin);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return maxMin;
};
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
