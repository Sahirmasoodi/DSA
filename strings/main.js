// var lengthOfLastWord = function (s) {
//   let arr = [];
//   let word = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== " ") {
//       word = word + s[i];
//     } else {
//       word ? arr.push(word) : arr;
//       word = "";
//     }
//   }
//   word ? arr.push(word) : arr;
//   console.log(arr);

//   return arr[arr.length-1].length;
// };
var lengthOfLastWord = function (s) {
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = word + s[i];
    } else {
      if (word) break;
    }
  }
  return word.length;
};
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// var findWordsContaining = function (words, x) {
//   let arr = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(x)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] == x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};
// console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));

// var numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < jewels.length; i++) {
//     for (let j = 0; j < stones.length; j++) {
//       if (jewels[i] == stones[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let set = new Set();
  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }
  for (let j = 0; j < stones.length; j++) {
    if (set.has(stones[j])) {
      count++;
    }
  }
  return count;
};

// console.log(numJewelsInStones("aA", "aAAbbbb"));

var maxFreqSum = function (s) {
  let obj = {};
  let m1 = 0;
  let m2 = 0;
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  for (const key in obj) {
    if ("aeiou".includes(key)) {
      m1 = Math.max(m1,obj[key])
      // m1 < obj[key] ? (m1 = obj[key]) : (m1 = m1);
    } else {
      m2 = Math.max(m2,obj[key])

      // m2 < obj[key] ? (m2 = obj[key]) : (m2 = m2);
    }
  }

  return m1 + m2;
};
// console.log(maxFreqSum("successes"));

var balancedStringSplit = function (s) {
  let temp = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") temp++;
    else {
      temp--;
    }
    temp == 0 && count++;
  }
  return count;
};
// console.log(balancedStringSplit("RLRRLLRLRL"));

var reverseString = function (ss) {
  let s = ss.split("");
  let n = s.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
  return s.join("");
};
// console.log(reverseString("bobai"));
var reverseStr = function (s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    for (let j = 0; j < Math.floor(k / 2); j++) {
      let temp = s[i + j];
      s[i + j] = s[i + k - 1 - j];
      s[i + k - 1 - j] = temp;
    }
  }
  return s.join("");
};
// console.log(reverseStr("abcdefghijk", 4));
//bacdfeg

// var isPalindrome = function (s) {
//   s = s.toLowerCase();
//   s = s.split("");
//   let reverse = "";
//   let filteredStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].match(/[a-z0-9]/i)) {
//       filteredStr = filteredStr + s[i];
//       reverse = s[i] + reverse;
//     }
//   }
//   return filteredStr == reverse;
// };

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let a = 0;
  let b = s.length - 1;
  while (a < b) {
    if (!s[a].match(/[a-z0-9]/i)) {
      a++;
    } else if (!s[b].match(/[a-z0-9]/i)) {
      b--;
    } else if (s[a] == s[b]) {
      a++;
      b--;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// var largestOddNumber = function (num) {
//   for (let i = num.length - 1; i >= 0; i--) {
//     if (num[i] % 2 != 0) {
//       break;
//     } else {
//       num = num.slice(0, -1);
//     }
//   }
//   return num;
// };
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i > 0; i--) {
    if (num[i] % 2 == 0) {
      num = num.slice(0, -1);
    } else {
      break;
    }
  }
  return num;
};

// console.log(largestOddNumber("354274"));

var longestCommonPrefix = function (strs) {
  let x = 0;
  while (x < strs[0].length) {
    let pre = strs[0][x];

    for (let i = 0; i < strs.length; i++) {
      if (strs[i][x] !== pre) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
};
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

var isAnagram = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
  }
  for (let i = 0; i < t.length; i++) {
    // console.log(map[t[i]]);
    if (map[t[i]] || map[t[i]] > 0) {
      map[t[i]] = map[t[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(isAnagram("nagaram", "anagram"));

var isIsomorphic = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = t[i];
  }
  return map;
};
// console.log(isIsomorphic("egg", "add"));

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    map[strs[i].split("").sort().join("")] = map[
      strs[i].split("").sort().join("")
    ]
      ? [...map[strs[i].split("").sort().join("")], strs[i]]
      : [strs[i]];
  }
  return Object.values(map);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(" ".charCodeAt());
