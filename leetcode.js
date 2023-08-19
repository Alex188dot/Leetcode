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
