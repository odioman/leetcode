/*var isPowerOfTwo = function(n) {
    if (n=1) {
        return true;
    } else if (n % 2 == 0) {
        for (let i=0; i<=n; i++) {
            n / 2;
            console.log(n)
        }
    } else {
        return false;
    }
}; */

/*function isPowerofTwo(n) {
        if (n=1) {
            return true;
        } else if (n % 2 === 0) {
            for (let i=0; i<=n; i++) {
                n / 2;
                console.log(n)
            }
        } else {
            return false;
        }
    };
*/ 
/*function isPowerOfTwo(n) {
    if (n === 0) {
        return false;
    } else if (n === 1) {
        return true;
    } else if (n % 2 !== 0) {
        return false;
    } else {
    }  
    return isPowerOfTwo(n / 2);
};
*/

/*(var lengthOfLastWord = function(s) {
   const words = s.trim().split(' ');
   return words.length > 0 ? words[words.length - 1].length : 0;
};*/

/* 242. Valid Anagram */
/* var isAnagram = function(s, t) {

   if (s.split('').sort().join('') === t.split('').sort().join('')) {
       return true;
   } else {
       return false;
   }
}; */

/* 66. Plus one */

/* var plusOne = function(digits) {
  for (let i = digits.length -1; i >= 0; i--) {
      if (digits[i] != 9) {
          digits[i]++
          return digits
      }
      digits[i] = 0
  }
  digits.unshift(1)
  return digits
} */

/* 69. sqrt(x) */

/* function mySqrt(x) {
    let left = 0;
    let right = x;

    if (x <= 1) {
        return x;
    }

    while (left < right) {
        let middle = Math.floor((right+left)/2);
        let square = middle * middle;
        console.log(middle)
        if (square === x) return middle;

        if (square < x) {
            left = middle + 1
        } else {
            right = middle
        }
    }
    return left - 1; 
} */

/* 70. Climbing Stairs */

/* var climbStairs = function(n) {
    let total = 0;
    let first = 0;
    let second = 1;
    let i = 0;

    while (i < n) {
        total = first + second;
        first = second;
        second = total;
        i++
    }
    return total;
} */

/* Fibonacci Number */
/*var fib = function (n) {
    if (n === 0 || n === 1) return n;

    let first = 0;
    let second = 1;
    let sum = first + second;

    for (let i = 2; i < n; i++) {
        first = second;
        second = sum;

        sum = first + second;
    }

    return sum
} */

/* Javascript info Recursion Practice */
/* https://javascript.info/recursion */
/* Write a function sumTo(n) that calculates the sume of numbers 1 + 2 + ... + n
make 3 solution variants 
1. Using a for loop
2. Using a recursion, cuase sumTo(n) = n + sumTo(n-1) for n > 1
3. Using the arithmetic progression formula */

/* for loop */
/* function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
        console.log(sum)
    }
    return sum;
} */

/* Recursion */
/* function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
} */

/* Arithmetic Progression Formula */

/* function sumTo(n) {
    return n * (n + 1) / 2;
} */

/* Factorial 
function factorial(n) {
    if (n == 1) {
        return n;
    } else {
        return n * factorial(n - 1)
    } 
} */

/* function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
} */

/* Fibonacci Sequence */
/* function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
} */

/* function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
} */

/* Collatz Conjecture */
/* function collatz(n) {
        if (n == 1) {
            return 0;
        } else if (n % 2 == 0) {
            return 1 + collatz(n / 2);  
        } else {
            return 1 + collatz(3 * n + 1);       
        }
    
    } */
    
/* Code Quiz */

/* function sumRange(n) {
    if (n === 1) {
        return n
    } else {
        return n + sumRange(n-1)
    }
} */

/* function power(base, exponent) {
    if (exponent == 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
} */

/* function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1)
    }

} */

/* function all(array, callback) {
    let copy = array.slice()

    if (copy.length === 0) return true;

    if (callback(copy[0])) {
        copy.shift();
        return all(copy, callback)
    } else {
        return false
    }
} */

/* function productOfArray(array) {
    if (array.length === 0) return 1;

    return array.shift() * productOfArray(array)
} */

/* var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
*/

/*
function contains(obj, value) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value);
        }
        if (obj[key] === value) {
            return true;
        }
    }
    return false
}
*/

/* var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);

function totalIntegers(array) {
    if (array.length === 0) return 0;

    let total = 0;
    let first = array.shift();

    if (Array.isArray(first)) {
        total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
        total += 1;
    }
    return total + totalIntegers(array)
}
*/

/* function SumSquares(array) {
    let total = 0;
    if (array.length === 0) return 0;
    
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            total += SumSquares(array[i])  
        } else { 
            total += array[i] * array[i];
        }
        
    } 
    return total;
}
*/

/* function replicate(times, number) {
    let arr = []
    if (times < 0) return [];
    for (i = 0; i < times; i++) {
        arr.push(number);
    }
    return arr;
}
*/

/* function replicate(times, number) {
    if (times <= 0) return [];

    return [number].concat(replicate(times - 1, number))
}
*/

/* 83. Remove Duplicates from Sorted List */
/* Solution did not work in sandbox */
/* var deleteDuplicates = function(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head;
};
*/

/* 88 merge sorted arrays */

/* var merge = function(nums1, m, nums2, n) {
    while (n) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m];
        } else {
            nums1[m + n - 1] = nums2[--n]
        }
    }
    return nums1;
}
*/

/* 118. Pascal's Triangle */

/* var generate = function(numRows) {
    const table = [];
    for (let i = 0; i < numRows; i++) {
        table[i] = [];
        table[i][0] = 1;
        for (let j = 1; j < i; j++) {
            table[i][j] = table[i-1][j-1] + table[i-1][j]
        }
        table[i][i] = 1;
    }
    return table
} */

/* 121. Best Time to Buy and Sell Stock */

/* var maxProfit = function(prices) {
    let profit = 0;
    let stockToBuy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (stockToBuy > prices[i]) {
            stockToBuy = prices[i];
        }

        const currentProfit = prices[i] - stockToBuy;

        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }
    return profit;
} */

/* 125. Valid Palindrome */
/* var isPalindrome = function(s) {
    let str = s.match(/[A-Za-z0-9]/g)
    if (str === null) {
        return true;
    }
    str = str.join("").toLowerCase()
    
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
} */

/* 136. Single Number */
/* var singleNumber = function(nums) {
    map = {};

    for (i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            console.log(map[nums[i]])
            delete map[nums[i]]
        } else {
            console.log(map[nums[i]])
            map[nums[i]] = 1;
        }
    }
    return parseInt(Object.keys(map)[0])
} */

/* 141. Linked List Cycle */

/* var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) return true;
    }
    return false;
} */
 
/* 94. Binary Tree Inorder Traversal */

/* var inorderTraversal = function(root) {
    let list = [];

    return checkTree(root, list);

    function checkTree(root, list) {
        if (root === null) {
            return list;
        }
        list = checkTree(root.left, list);
        list.push(root.val);
        return checkTree(root.right, list);
    }
}; */

/* Maximum Depth of Binary Tree */
/* var maxDepth = function(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
} */

/* 217. Contains Duplicate */
/* var containsDuplicate = function(nums) {
    const set = new Set([...nums]);
    if (set.size == nums.length) {
        return false;
    } else {
        return true;
    }
} */

/* 53. Maximum Subarray */

/* var maxSubArray = function(nums) {
    let solution = nums[0];
    for (let i = 1; i< nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        solution = Math.max(solution, nums[i])
    }
    return solution;
} */

/* 1. Two Sum */

/* const hashTable = new Map();

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const substractionGoal = target - num;

    if (hashTable.has(substractionGoal)) {
        return [i, hashTable.get(substractionGoal)];
    } else {
        hashTable.set(num, i);
    } */

/* Previous submission for Two Sum */

/* var twoSum = function(nums, target) {
 
    let numObj = {};
    for (let i=0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i]
        }
        numObj[nums[i]] = i;
    }
}; */

/* 88. Merge Sorted Array */
/* Previous Solution */
/* var merge = function(nums1, m, nums2, n) {
    while (n) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m];
        } else {
            nums1[m + n - 1] = nums2[--n]
        }
    }
    return nums1;
} */

/* var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1

    while(second >= 0) {
        let fVal = nums1[first];
        let sVal = nums2[second];

        if (fVal > sVal) {
            nums1[i] = fVal;
            i--;
            first--;
        } else {
            nums1[i] = sVal;
            i--;
            second--
        }
    }
} */

/* 350. Intersection of Two Arrays II */
/* var intersect = function(nums1, nums2) {
    let solution = [];
    for (let i = 0; i < nums2.length; i++) {
        let index = nums1.indexOf(nums2[i]);
        if (index >= 0) {
            solution.push(nums2[i]);
            nums1.splice(index, 1);
        }
    }
    return solution.sort();
} */

/* 121. Best Time to Buy and Sell Stock */

/* var maxProfit = function(prices) {
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
            prices[i] = 0;
        } else {
            profit = Math.max(prices[i] - buy, profit)
        }
    }
    return profit;
} */

/* 566. Reshape the Matrix */
var matrixReshape = function(nums,r,c) {
    let solution = [];
    if (r * c !== nums.length * nums[0].length) return nums;
    nums = nums.flat();
    for (let i = 0, k = 0; i < r; i++) {
        let temp = [];
        for (let j = 0; j < c; j++) {
            temp.push(nums[k]);
            k++;
        }
        solution.push(temp);
    }
    return solution;
}

/* 118. Pascal's Triangle */
var generate = function(numRows) {
    if (numRows < 1) return [];
    if (numRows === 1) return [[1]];

    const triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        const curRow = [];
        
        curRow.push(1);

        for (let j = 1; j < prevRow.length; j++) {
            curRow[j] = prevRow[j] + prevRow[j - 1];
        }
        curRow.push(1);
        triangle.push(curRow);
    }
    return triangle;
}

/* 36. Valid Sudoku */

var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        const set = new Set();
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if (cell === '.') continue;
            if (set.has(cell)) return false;
            set.add(cell)
        }
    }

    for (let i = 0; i < board.length; i++) {
        const set = new Set();
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[j][i];
            if (cell === '.') continue;
            if (set.has(cell)) return false;
            set.add(cell);
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            const set = new Set()
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    const cell = board[3 * i + k][3 * j + l]
                    if (cell === '.') continue;
                    if (set.has(cell)) return false;
                    set.add(cell);
                }
            }
        }
    }
    return true;
}
   
/* 74. Search a 2D Matrix */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left));
        let midVal = matrix[Math.floor(right/cols)][right % cols];

        if (midVal === target) return true;
        if (target < midVal) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};

/* 387. First Unique Character in a String */

var firstUniqChar = function(s) {
  let strMap = {};

  for (let i = 0; i<s.length; i++) {
      if (strMap[s[i]] == undefined) {
          strMap[s[i]] = true;
      } else {
          strMap[s[i]] = false;
      }
  }

  for (let i = 0; i < s.length; i++) {
      if (strMap[s[i]]) {
          return i;
      }
  }
  return -1;
}

/* 383. Ransom Note */

var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (let i = 0; i < magazine.length; i++) {
        if (map.has(magazine[i])) {
            map.set(magazine[i], map.get(magazine[i]) + 1)
        } else {
            map.set(magazine[i], 1)
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
            return false;
        }
        map.set(ransomNote[i], map.get(ransomNote[i]) -1)
    }
    return true
};

/* 144. Binary Tree Preorder Traversal */ 
/* iterative approach */
var preorderTraversal = function(root) {
    if (!root) return [];
    const stack = [root];
    const result = [];

    while (stack.length) {
        let node = stack.pop()

        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
}

/* 145. Binary Tree Postorder Traversal */
/* iterative approach */
var postorderTraversal = function(root) {
    if (!root) return [];
    const stack = [root];
    const result = [];

    while(stack.length) {
        let node = stack.pop();

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
        result.push(node.val);
    }
    return result;
}

/* 202. Happy Number */
const getNumSum = num => {
    let total = 0;

    while (num !== 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        total += Math.pow(lastDigit, 2);
    }
    return total
}

var isHappy = function(n) {
    let fast = n;
    let slow = n;

    while (true) {
        fast = getNumSum(getNumSum(fast))
        slow = getNumSum(slow)

        if (fast === slow) {
            return fast === 1;
        }
    }
}

/* 2727. Is Object Empty */

var isEmpty = function(obj) {
    const objKeys = Object.keys(obj);
    const objlength = obj.length
    
    if (objKeys.length > 0 || objlength > 0) {
        return false
    } else {
        return true
    } 
 };

 /* 2635. Apply Transform Over Each Element in Array */

 var map = function(arr, fn) {
    returnedArray = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
};