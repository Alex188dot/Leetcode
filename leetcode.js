/*

58. Length of Last Word 💡

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

*/

function lengthOfLastWord(s) {
  arr = s.trim().split(" ");
  lastWord = arr.pop();
  return lastWord.length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));

// Submission accepted ✅

/*

66. Plus One 💡

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
*/

var plusOne = function (digits) {
  number = digits.join("");
  let newNum = Number(number);
  if (newNum > 9007199254740991) {
    newNum = BigInt(number) + BigInt(1);
  } else {
    newNum = newNum + 1;
  }
  newArr = String(newNum).split("");
  return newArr;
};

digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

console.log(plusOne(digits));

// Submission accepted ✅

/*

1. Two Sum 💡


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


*/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < nums.length; y++) {
      if (nums[i] + nums[y] == target) {
        if (i == y) {
          continue;
        } else {
          return [i, y];
        }
      }
    }
  }
};

console.log(twoSum([2, 5, 5, 11], 10));

// Submission accepted ✅

/* 

88. Merge Sorted Array 💡


You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 
*/

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

console.log(merge(nums1, m, nums2, n));

// Submission accepted ✅

/*

20. Valid Parentheses 💡


Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'
*/

var isValid = function (s) {
  const stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else if (closingBrackets.includes(s[i])) {
      if (stack.length === 0) {
        return false;
      }

      const topBracket = stack.pop();

      if (
        (s[i] === ")" && topBracket !== "(") ||
        (s[i] === "}" && topBracket !== "{") ||
        (s[i] === "]" && topBracket !== "[")
      ) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

let s = "(){}}{";
console.log(isValid(s));

// Submission accepted ✅

/*

35. Search Insert Position 💡


Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

var searchInsert = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    nums.unshift(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
  } else {
    return nums.indexOf(target);
  }
};

let nums = [3, 5, 7, 9, 10];

let target = 8;

console.log(searchInsert(nums, target));

// Submission accepted ✅

/*

217. Contains Duplicate 💡

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

var containsDuplicate = function (nums) {
  const equalsCheck = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);
  let newNums = new Set(nums);
  let nums2 = Array.from(newNums);
  console.log(nums2);
  if (equalsCheck(nums, nums2) === true) {
    return false;
  } else {
    return true;
  }
};

nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));

// Submission accepted ✅

/*

219. Contains Duplicate II 💡

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

*/

var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (
        nums[i] === nums[j] &&
        Math.abs(i - j) <= k &&
        Math.abs(i - j) !== 0
      ) {
        return true;
      }
    }
  }
  return false;
};

let numsa = [1, 0, 1, 1];
let ka = 1;

console.log(containsDuplicate(numsa, ka));

// Submission accepted ✅

/*

2621. Sleep 💡


Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000

*/

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Submission accepted ✅

/*

268. Missing Number 💡


Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

var missingNumber = function (nums) {
  return [...Array(nums.length + 1).keys()].filter((x) => !nums.includes(x));
};

nums = [3, 0, 1];

console.log(missingNumber(nums));

// Submission accepted ✅

/*

169. Majority Element 💡


Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

var majorityElement = function (nums) {
  let count = 0;
  let majority = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Submission accepted ✅

/*

14. Longest Common Prefix 💡


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[0][i] !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Submission accepted ✅

/*

2620. Counter 💡

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
At most 1000 calls to counter() will be made
*/

var createCounter = function (n) {
  let counter = n - 1;
  return function () {
    return ++counter;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

// Submission accepted ✅

/*


2635. Apply Transform Over Each Element in Array 💡

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

*/

var map = function (arr, fn) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

function plusI(n, i) {
  return n + i;
}

let arrr = [1, 2, 3];

console.log(map(arrr, plusI));

// Submission accepted ✅

/*

2634. Filter Elements from Array 💡

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109

*/

var filter = function (arr, fn) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    } else if (typeof fn(arr[i]) === "number" && fn(arr[i]) === true) {
      newArr.push(fn(arr[i]));
    }
  }
  return newArr;
};

let arrC = [-2, -1, 0, 1, 2];

function plusOneA(n) {
  return n + 1;
}

console.log(filter(arrC, plusOneA));

// Submission accepted ✅

/*
2619. Array Prototype Last 💡

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

 

Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
 

Constraints:

0 <= arr.length <= 1000

*/

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const numsS = [];
console.log(numsS.last());

// Submission accepted ✅

/*

2626. Array Reduce Transformation 💡

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.

 

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
 

Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
0 <= init <= 1000
Accepted

*/

var reduce = function (nums, fn, init) {
  let val = init;
  nums.forEach((num) => {
    val = fn(val, num);
  });
  return val;
};

let numsx = [1, 2, 5];
function sum(accum, curr) {
  return accum + curr;
}
let init = 10;

console.log(reduce(numsx, sum, init));

// Submission accepted ✅

/*

2665. Counter II 💡

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 

Constraints:

-1000 <= init <= 1000
total calls not to exceed 1000

*/

var createCounter = function (init) {
  let currentVal = init;
  let counter = {
    increment: function () {
      ++currentVal;
      return currentVal;
    },
    decrement: function () {
      currentVal -= 1;
      return currentVal;
    },
    reset: function () {
      return (currentVal = init);
    },
  };
  return counter;
};

const cx = createCounter(5);
console.log(cx);
console.log(cx.increment());
console.log(cx.reset()); // 5 // 6
console.log(cx.decrement());
console.log(cx.increment()); // 6

// Submission accepted ✅

/*

2677. Chunk Array 💡

Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

 

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
Example 3:

Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
Example 4:

Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.
 

Constraints:

arr is a valid JSON array
2 <= JSON.stringify(arr).length <= 105
1 <= size <= arr.length + 1

*/

var chunk = function (arr, size) {
  var chunks = [];
  for (var i = 0; i < arr.length; i += size) {
    var subarray = arr.slice(i, i + size);
    chunks.push(subarray);
  }
  return chunks;
};

arr = [1, 9, 6, 3, 2];
let size = 3;
console.log(chunk(arr, size));

// Submission accepted ✅

/*

203. Remove Linked List Elements 💡

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
Accepted

*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
  let newNode = new ListNode(0);
  newNode.next = head;
  let curr = newNode;
  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return newNode.next;
};

let head = [1, 2, 6, 3, 4, 5, 6];
let val = 6;

console.log(removeElements(head, val));

// Submission accepted ✅

/*

26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
* Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
* Return k.
Custom Judge:
The judge will test your solution with the following code:
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
 
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:
* 1 <= nums.length <= 3 * 104
* -100 <= nums[i] <= 100
* nums is sorted in non-decreasing order.

*/

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      delete nums[i];
    }
  }
  nums.sort(function (a, b) {
    return a - b;
  });
  let ind = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      ind.push(i);
    }
  }
  return nums.slice(0, ind[0]).length;
};

nums = [1, 1, 1, 2, 2, 2, 2];

console.log(removeDuplicates(nums));

// Submission accepted ✅
