var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (x == mid ** 2) return mid;
    else if (x > mid ** 2) l = mid + 1;
    else {
      r = mid - 1;
    }
  }
  return r;
};
// console.log(mySqrt(40));

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] == target) return m;
    if (nums[l] < nums[m]) {
      if (target < nums[m] && target >= nums[l]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};

// console.log(search([6, 7, 0, 1, 2, 4, 5], 0));

var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] > nums[l]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return r;
};
// console.log(findMin([3, 4, 5, 1, 2]));

function firstBadVersion(n) {
  let l = 1;
  let r = n;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (!isBadVersion(m)) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return r;
}
//[1,2,3,4,5,6,7]

var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};
// console.log(findPeakElement([1, 2, 3, 1]));

var searchRange = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      res.push(i);
      // console.log(nums[i]);
    }
  }
  return res.length !== 0 ? [res[0], res[res.length - 1]] : [-1, -1];
};
// console.log(searchRange([5,7,7,8,8,10], 8));

var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] == nums[m - 1]) {
      let leftCount = m - 1 - l;
      if (leftCount % 2 == 0) {
        l = m + 1;
      } else {
        r = m - 2;
      }
    } else if (nums[m] == nums[m + 1]) {
      let leftCount = m - l;
      if (leftCount % 2 == 0) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    } else {
      return nums[m];
    }
  }
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
