let arr = [3, 2, 5, 6, 0, 1];
function linear(n) {
  if (n >= arr.length) return undefined;
  if (arr[n] == 5) return n;
  return linear(n + 1);
}
// console.log(linear(0));

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};
// console.log(search([0, 3, 4, 6, 8, 9], 6));

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
}
// console.log(linearSearch([0, 3, 4, 6, 8, 9], 6));

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    if (arr[middle] == target) {
      return middle;
    } else if (arr[middle] < target) {
      l = l + 1;
    } else {
      r = r + 1;
    }
  }
  return -1;
}
// console.log(binarySearch([0, 3, 4, 6, 8, 9],6));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([8, 5, 2, 6, 3, 9, 7, 1]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
// console.log(selectionSort([8, 5, 2, 6, 3, 9, 7, 1, 4]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    for (; j >= 0 && current < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}
// console.log(insertionSort([8, 5, 2, 6, 3, 9, 7, 1, 4]));

function mergeSortedArray(a1, a2) {
  let arr = [];
  let p = 0;
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      arr[p] = a1[i];
      i++;
      p++;
    } else {
      arr[p] = a2[j];
      p++;
      j++;
    }
  }

  return [...arr, ...a1.slice(i), ...a2.slice(j)];
}
// console.log(mergeSortedArray([1, 4, 5], [2, 3, 6]));

var isPalindrome = function (head) {
    // find the middle element
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse 2nd half
    let prev = null
    let curr = slow
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // check palindrome
    let n = head
    while ( prev !== null) {
        if (n.val == prev.val) {
            n = n.next
            prev = prev.next
        }
        else {
            return false
        }
    }
    return true
};


