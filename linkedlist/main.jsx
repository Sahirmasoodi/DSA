function Node(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 && index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  if (this.size == 0) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.size == 0) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  if (index < 0 || index > this.size) return;

  let curr = this.head;
  if (index == 0) {
    newNode.next = curr;
    this.head = newNode;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  let curr = this.head;
  if (index == 0) {
    curr = curr.next;
    this.head = curr;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

MyLinkedList.prototype.print = function () {
  let curr = this.head;
  let count = 0;
  while (curr !== null) {
    console.log(curr.val, " ", count);
    curr = curr.next;
    count++;
  }
};

const list = new MyLinkedList();
// list.addAtHead(10);
// list.addAtHead(10);
// list.addAtHead(20);
// list.addAtHead(30);
// list.addAtHead(40);
// list.addAtTail(99);
// list.addAtTail(99);
// list.addAtTail(99);
// list.addAtTail(99);
// list.addAtIndex(0, 99);
// list.addAtIndex(1, 200);
// list.addAtIndex(0, 300);
// list.addAtIndex(3, 400);
// list.deleteAtIndex(0);
// list.print();
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(2);
let n5 = new Node(1);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (slow == fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

function palindrome(arr) {
  let m = Math.floor(arr.length / 2);
  let l = arr.length - 1;
  for (let i = 0; i < m; i++) {
    console.log(i);

    if (arr[i] == arr[l]) {
      l--;
    } else {
      return false;
    }
  }
  return true;
}

// var isPalindrome = function (head) {
//   let curr = head;
//   let arr = [];
//   while (curr) {
//     arr.push(curr.val);
//     curr = curr.next;
//   }
//   let m = Math.floor(arr.length / 2);
//   let l = arr.length - 1;
//   for (let i = 0; i < m; i++) {
//     console.log(i);

//     if (arr[i] == arr[l]) {
//       l--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

var isPalindrome = function (head) {
  // finding middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse from slow
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let first = head;
  let second = prev;
  while (second) {
    if (first.val == second.val) {
      first = first.next;
      second = second.next;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(isPalindrome(n1));

// var getIntersectionNode = function (headA, headB) {
//   let p1 = headA;
//   let p2 = headB;
//   while (p1) {
//     while (p2) {
//       if (p1 == p2) {
//         return p2;
//       } else {
//         p2 = p2.next;

//       }
//     }
//     p1 = p1.next;
//     p2 = headB
//   }
//   return null;
// };

var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  let set = new Set();
  while (p2) {
    set.add(p2);
    p2 = p2.next;
  }
  while (p1) {
    if (set.has(p1)) {
      return p1;
    }
    p1 = p1.next;
  }
  return null;
};

var removeElements = function (head, val) {
  let sentinel = new ListNode(0, head);
  let current = sentinel;
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return sentinel.next;
};

// var removeNthFromEnd = function (head, n) {
//   let sentinel = new ListNode(0, head);
//   let first = head;
//   let length = 0;
//   while (first) {
//     first = first.next;
//     length++;
//   }
//   let prev = sentinel;
//   for (let i = 0; i < length - n; i++) {
//     prev = prev.next;
//   }
//   prev.next = prev.next.next;
//   return sentinel.next;
// };

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(0, head);
  let first = sentinel;
  let second = sentinel;
  for (let i = 0; i < n; i++) {
    second = second.next;
  }
  while (second.next) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
  return sentinel.next;
};
// ["s", 5, 4, 3, 5, 6, 4,null];

var deleteDuplicates = function (head) {
  let sentinel = new ListNode(0, head);
  let curr = sentinel;
  while (cuur && curr.next) {
    if (curr == curr.next) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let p1 = even;
  while (even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = p1;
  return head;
};

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let digit = 0;
  while (condition) {}
};

var oddEvenList = function (head) {
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(0, head);
  let first = sentinel;
  let second = sentinel;
  for (let i = 0; i < n; i++) {
    second = second.next;
  }
  while (second) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
  return sentinel.next;
};

var mergeTwoLists = function (list1, list2) {
  let newNode = new ListNode();
  while (!list1 && !list2) {
    if (list1.val < list2.val) {
      let n = new ListNode(list1.val);
      newNode.next = n;
      list1 = list1.next;
    } else {
      let n = new ListNode(list2.val);
      list2 = list2.next;
      newNode.next = n;
    }
    return newNode.next;
  }
};

var addTwoNumbers = function (l1, l2) {
  let newNode = new ListNode();
  let start = newNode;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let node = new ListNode(digit);
    newNode.next = node;
    newNode = newNode.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return start.next;
};

var rotateRight = function (head, k) {
  let slow = head;
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = head;
  head = slow.next;
  return head;
};


