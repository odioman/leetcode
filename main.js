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

 //googled solution
 var map = function(arr, fn) {
    returnedArray = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
};
//my solution
var map = function(arr, fn) {
    let returnedArray = [];
    for (let i=0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i],i))
    }
    return returnedArray;
}

/* 2634. Filter Elements from Array */
var filter = function(arr, fn) {
    //make empty array
    //for loop to iterate over each element of array
    // if (fn(arr[i], i)) === truthy
    //add (push) filtered elements to empty arrray
    //return array
        const filteredArr = [];
        for (let i=0; i<arr.length; i++) {
            if (fn(arr[i],i)) {
                filteredArr.push(arr[i])
            }
        }
        console.log(filteredArr);
        return filteredArr
    };

/* 1748. Sum of Unique Elements */
/**
 * @param {number[]} nums
 * @return {number} return sum of unique elements
 */
var sumOfUnique = function(nums) {
    //if element appears once, add it to the total 
    //find sum of all elements that appear only one time
    //use an object to keep track of how many times number occurs keys-numbers values-how many times they happen
    const counterObj = {};
    //iterating over nums array to find unique (one-time occurring) element
    for (let i=0; i<nums.length; i++) {
        //if number has occurence, increase value by 1
        //if number not in object yet, add number to object, setting value equal to 1 
        if (counterObj[nums[i]]) {
            counterObj[nums[i]]++
        } else {
            counterObj[nums[i]] = 1
        }
    }
    //get keys where value equals one 
    //filter Object.keys where occurence is 1
    const keys = Object.keys(counterObj)
    console.log(keys)
    const uniqueNums = keys.filter(key => {
        if (counterObj[key] === 1) {
            return true
            //filter places truthy values in the array, so return true
        } else {
            return false
        }
    })
    //This point we will have all the keys where value equals 1   
    console.log(uniqueNums)
    //find sum of these keys 

    const sumOfUniqueNums = uniqueNums.reduce((acc, cur) => {
        console.log("cur:", typeof cur)
        console.log("acc: ", typeof acc)
        return acc + Number(cur)
    }, 0)

    //return sum
    return sumOfUniqueNums
};

/* 58. Length of Last Word */ 

var lengthOfLastWord = function(s) {
    //split and trim the input s
    const words = s.trim().split(' ')
    //find the length of the last word
    const lastWordLength = words[words.length - 1].length
    //return length of last word
    return lastWordLength
    
};

/* 205. Isomorphics Strings */
// 35/44 testcases passing
var isIsomorphic = function(s, t) {
    //create obj1 and obj2. These objs will house the key-value pair of letters(keys) and occurences(values)
    const sObj = {};
    const tObj = {};
    //iterate over word
    //set keys in obj to letters, set values in obj to occurences
    //if letter exists in sObj, add one more to occurences 
    //if it doesn't exist, set occurences to 1
    for (let i=0; i<s.length; i++) {
        if(sObj[s[i]]) {
            sObj[s[i]]++
        } else {
            sObj[s[i]] = 1
        }
    }

    //iterate over second word
    //do the same thing with keys and values with letters and occurences as did above
    for (let j=0; j<t.length; j++) {
        if (tObj[t[j]]) {
            tObj[t[j]]++
        } else {
            tObj[t[j]] = 1
        }
    }
    //get values of sObj and tObj and convert to string in order to compare them. If they equal each other, then s can be replaced by t, if they don't equal each other, then they can't
    sObjString = Object.values(sObj).toString();
    tObjString = Object.values(tObj).toString();
    console.log(sObjString);
    console.log(tObjString);

    //doesn't work: REMEMBER Arrays don't equal each other because of     memory
    //if they do return true, if they don't return false
    if (sObjString === tObjString) {
        return true
    } else {
        return false 
    }

}

//this one passes all tests
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean} true if the characters of s can be replaced by t /*== and if the characters in t can be replaced by the characters in s */

 var isIsomorphic = function(s, t) {

    //initialize two Objects to hold the letters of s and t
        const object = {};
        const object2 = {};
    //for loop it iterate over the strings
    //s = 'bob' and t = 'cat'
        for (let i=0; i<s.length; i++) {
            //match a letter in s to a letter in t 
            //if indexed letter does not line up with indexed letter of t, return false
            //if letter of s already is lined up with a letter of t and does not equal undefined, return false
            if (object[s[i]] !== undefined && object[s[i]] !== t[i]) {
                return false        
            }
            if (object2[t[i]] !== undefined && object2[t[i]] !== s[i]) {
                return false
            }
                //assign letter of s to letter of t
            object[s[i]] = t[i] 
            //assign letter of t to letter of s
            object2[t[i]] = s[i]
            }
        return true
    }

/* 1. Two Sum */
var twoSum = function(nums, target) {
    //array to push indices to
    finalArr = [];
    //for loop to iterate over numbers
    for (let i = 0; i < nums.length; i++) {
        for (let j=1; j<nums.length; j++) {
           if (nums[i]+ nums[i+j] === target) {
            finalArr.push(i, i+j)
           }        
        }
    }
    return finalArr
}

/* 136. Single Number */
var singleNumber = function(nums) {
    const obj = {};

    for (i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            delete obj[nums[i]]
        } else {
            obj[nums[i]] = 1;
        }
    }
    return parseInt(Object.keys(obj)[0])
}
/* 88. Merge Sorted Array */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    //choose m elements of nums1 => nums1[m - 1]
        nums1.splice(m);
    //choose n elements of nums2
        nums2.splice(n);
        console.log(nums2)
    //join elements together
    for (let i=0; i<nums2.length; i++) {
        nums1.push(nums2[i]) // edited nums2 
    
    }
    //sort array (nums1)
        nums1.sort(sortIncreasing)
        function sortIncreasing(a,b) {
            return a - b    
    }    
    // 
    }

    /* 344. Reverse String */
    var reverseString = function(s) {
        const reverseS = s.reverse()
        return reverseS
    };

    /* 2667. Create Hello World Function */
    var createHelloWorld = function() {
        return function(...args) {
          return "Hello World"  
        }
    };

    /* 2620. Counter */
    var createCounter = function(n) {
        return function() {
            return n++
            
        };
    };

    /* 2704. To Be Or Not To Be */ 
    var expect = function(val) {
        return {
          toBe: function(val2) {
            if (val === val2) {
              return true
            } else {
              throw new Error('Not Equal')
            }
          },
          notToBe: function(val2) {
            if (val === val2) {
              throw new Error('Equal')
            } else {
              return true
            }
          }
        }
          
    };

/* 219. Contains Duplicate II */

    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //iterate over the array ith times
    //iterate over the array jth times
    //if nums[i] == nums[j]
    //  if Math.abs(i - j) <= k
    //      return true
    //else return false
    for (let i=0; i<nums.length; i++) {
        for (let j=1; j<nums.length; j++) {
            if (i !== j) {
                if (nums[i] === nums[j] && Math.abs(i-j) <= k) {
                    console.log("i:", i, "j: ", j)
                    return true
                }
            }
        }
    }
    return false
};

/* 2677. Chunk Array */
/**
 * @param {Array} arr - original array
 * @param {number} size - the number of elements in the subarrays
 * @return {Array[]} - return array for chunked subarrays of length size
*/
var chunk = function(arr, size) {
    //declare a variable that's data structure is an array outside for loop;
    const finalArr = [];
    
    //declare a variable that is subarray that is an array
    let subArr = [];
    // [1]
    //clear out subArr, subArr = [];
    //[[1]]
    //push second number to subArr
    // [2]
    //push [2] to finalArr;
    //[[1],[2]]
    //for loop to iterate over elements in arr
    for (let i=0; i<arr.length; i++) { 
        subArr.push(arr[i])
        if (subArr.length == size) {
            finalArr.push(subArr)
            subArr = [];       
        } else if (i === arr.length - 1) {
            finalArr.push(subArr)
        }
    }
    return finalArr
    //possibly subArr.push(element)
    //finalArr.push(subArr)
    //return finalArr  


};

/* Find the Index of the First Occurrence in a String */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/* 217. Contains Duplicate */
var containsDuplicate = function(nums) {
    //declare an object
        const obj = {}
    //iterate over the elements of the array
        for (let i=0; i<nums.length; i++) {
            //if obj[key] add another to its value
            if (obj[nums[i]]) {
                obj[nums[i]]++
                return true
            } else {
                //else obj[key] = 1
                obj[nums[i]] = 1           
            }
            
            }
        return false 
        }
 
/* 283. Move Zeroes */
var moveZeroes = function(nums) {
    //declare a zeroArray
    const zeroArray = [];
    //iterate over each element of nums with a for loop
    for (let i=0; i<nums.length; i++) {
      console.log("i: ", i, nums[i]);
        if (nums[i] === 0) {
            //if nums[i] === 0, remove 0 from the array
            //this is only getting one 0 for test [0,0,1]
            //the output is [0,1,0] for that failing test
            //this should work because the test [0,1,0,3,12] passes
            nums.splice(i, 1);
            //add a zero to zeroArray
            zeroArray.push(0);
            i--;
        }
    }
    //add zeroArray to nums
    nums.push(...zeroArray)
    console.log(nums)
    console.log(zeroArray)
    //logging zeroArray only gives one zero for test [0,0,1]
    //I don't really understand why it's not working
};

/* 350. Intersection of Two Arrays II */
var intersect = function(nums1, nums2) {
    //arr to hold answer
    const finalArr = [];
    //iterate over one of the arrays
    for (let i=0; i<nums2.length; i++) {
        //find overlapping numbers using indexOf 
        let index = nums1.indexOf(nums2[i]);
        //if index is 0 or greater, indicates number is in both arrays
        if (index >= 0) {
            //add num to results array
            finalArr.push(nums2[i]);
            //remove element from array
            nums1.splice(index, 1)
        }
    }
    return finalArr
}

/* 350. Intersection of Two Arrays II - doesn't mutate array */ 
var intersect = function(nums1, nums2) {
    const numCount = {};
    //arr to hold answer
    const finalArr = [];
    //iterate over one of the arrays
    for (let i=0; i<nums2.length; i++) {
        //find overlapping numbers using indexOf 
        let index = nums1.indexOf(nums2[i]);
        //if index is 0 or greater, indicates number is in both arrays
        if (index >= 0) {
            if (numCount[nums2[i]] !== undefined) {
            //add num to results array
            finalArr.push(nums2[i]);
            } else {
                numCount[nums2[i]] = 1
            }
            
            //remove element from array
            //nums1.splice(index, 1)
        }
    }
    return finalArr
} 

/* 290. Word Pattern */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    //declare an empty object
    const patternToWordObj = {}; 
    const wordToPatternObj = {};
    //split s
    const wordsArr = s.split(' ');
    console.log(wordsArr);
    //iterate over wordsArr
    if (pattern.length !== wordsArr.length) {
        return false
    }
    for (let i=0; i<wordsArr.length; i++) {
    //store letter of pattern with word in object
        if (wordToPatternObj[wordsArr[i]] && typeof wordToPatternObj[wordsArr[i]] !== 'function') {
            if (patternToWordObj[pattern[i]] !== wordsArr[i]) {
                console.log('21',patternToWordObj[pattern[i]], wordsArr[i], pattern[i])

                return false
            }
            if (wordToPatternObj[wordsArr[i]] !== pattern[i]) {
                console.log('25')
                return false;
            }
        } else {
            wordToPatternObj[wordsArr[i]] = pattern[i]
            if (patternToWordObj[pattern[i]]) {
                console.log('31')
                return false
            }
            patternToWordObj[pattern[i]] = wordsArr[i]
        }
    }
    //if a:dog, a:fish we have a problem should return false
    //if make it through the loop, return true; 
    console.log('39')
    return true
}; 

/* 445. Add Two Numbers II */
var addTwoNumbers = function(l1, l2) {
    //Convert to stacks
    const firstStack = [];
    const secondStack = []; 
    //How is the stack made?
        //iterate over a list, adding each value to the stack
        while(l1) {
        firstStack.push(l1.val);
        l1 = l1.next 
        }
        while(l2) {
            secondStack.push(l2.val);
            l2 = l2.next 
            }
        //Use an JS array as a stack, limits us to using only push() and pop()

    //create a new list to store our answer
    let l3 = new ListNode(0)

    //iterate until both stacks are exhausted
    while(firstStack.length > 0|| secondStack.length > 0) { // 0 is a falsy value, can get rid of > 0 part
        let sum = 0;
        //grab the next element in each stack
        //Null check each stack
        //sum the plates
        if (firstStack.length) {
            sum += firstStack.pop()
        }
        if (secondStack.length) {
            sum += secondStack.pop()
        }
        sum += l3.val
        //figure out if the sum is more than 10
        //use the mod operator to get the last digit
        l3.val = sum % 10
        //divide by 10 to get the "tens' digit and flooring the number
        //we store the first digit (tens place digit) in new node
        //and point that node at the current node
        const head = new ListNode(Math.floor(sum/10))
        head.next = l3
        //finally, we update our 'head' (where our pointer is looking at) to the new node
        l3 = head
    
    } 
        
        
    //it's possible that our first digit is a zero
    //if so, we return the entry to the second node instead of the first

    return l3.val === 0 ? l3.next : l3;
}

/* 405 Convert a Number to Hexadecimal - not working */
var toHex = function(num) {
    const finalAns = [];
    const decimalToHexLibrary = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:'a', 11:'b', 12:'c', 13:'d', 14:'e', 15:'f'}
   while (num > 0){ 
        const formula = num % 16
        finalAns.push(decimalToHexLibrary[formula])
   } 
    return finalAns
};

/* 414. Third Maximum Number */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    const newSet = new Set(nums)
    console.log(newSet)
    const newSetArr = [...newSet];
    console.log(newSetArr)
    const sortNewSetArr = newSetArr.sort((a,b) => {
        return a - b
    })
    
    if (sortNewSetArr.length < 3) {
        return sortNewSetArr[sortNewSetArr.length - 1]
    }

    if (sortNewSetArr.length >= 3) {
        return sortNewSetArr[sortNewSetArr.length - 3]
    }
};

/* 435. Non-overlapping Intervals */
var eraseOverlapIntervals = function(intervals) {
    let answer = 0;
    //sort the intervals by the end points
    intervals.sort((a,b) => {
        return a[1] - b[1]
    })

    //grab the end point of the first interval
    let previousEndPoint = intervals[0][1]
    //iterate over intervals starting with the second index
        for (let i=1; i<intervals.length; i++) {
            //check if last end is greater than the current start point
            if (previousEndPoint > intervals[i][0]) {
                //if yes, increment answer
                answer++    
            } else {
                //if no, update the last end point
                previousEndPoint = intervals[i][1]    
            }     
            

        }
    return answer
};

/* 27. Remove Element */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    //remove instances of val from nums
//iterate over the array    
for (let i = nums.length - 1; i >= 0; i--) {
    console.log("nums: ", nums)
    //find the index of val
    const indexVal = nums.indexOf(val)
    //indexOf -1 means not in the array, yet when added to splice function, it takes off the last element of the array, so break when indexVal === -1
    if (indexVal === -1) {
        break
    } 
    console.log(indexVal)
    //remove val from nums array
    const spliceNums = nums.splice(indexVal, 1)
    console.log(spliceNums)
    
    }
};

/* 27. Remove Element better complexity */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    //want a pointer to track currentVal character
    let currentVal = 0;
    //iterate over nums;
    for (let i = 0; i < nums.length; i++) {
    //each iteration check if current number is val
        if (nums[i] === val) {
            //if yes, continue
            continue
        } else {
            //if no, swap and nums[i] and currentVal then increment value of currentVal
            nums[currentVal] = nums[i]
            currentVal++
        }
    }
    //return currentVal
    return currentVal;    
}

/* 557. Reverse Words in a String III */
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    //break s up into an array of words
    const arrWords = s.split(' ');
    //Iterate over an array of words
    for (let i = 0; i < arrWords.length; i++) {
        //reverse current word
        const currentWord = arrWords[i]
        const currentWordArray = currentWord.split('')
        currentWordArray.reverse()
        arrWords[i] = currentWordArray.join('');
    }
    //join all words into a string

    //return answer
    return arrWords.join(' ')
};

/* 859. Buddy Strings */
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    const finalArr = [];
    const letters = new Set(s);

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            finalArr.push([s[i], goal[i]]);
        }
    }

    console.log(finalArr);

    if (s.length !== goal.length) {
        return false
    } 

    if (s === goal) {
        return letters.size < goal.length
    }

    if (finalArr.length === 2) {
        const word1 = finalArr[0].join('');
        const word2 = finalArr[1].reverse().join('');

        return word1 === word2 
    }

    return false;
};

/* 1331. Rank of Transform an Array */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    //declare final array
    const finalArr = []; 
    //copy array and sort
    const sortedArr = [...arr].sort((a,b) => {
        return a - b
    }); 
    //create a variable to hold index set default to 1
    let rank = 1;
    //create a Map to store the ranks of each number
    const numberToRanks = new Map();
    //iterate over sorted array
     for (const number of sortedArr) {
         //check to see if current element exists in Map
         if (numberToRanks.has(number)) {
             //continue 
             continue   
         }
         numberToRanks.set(number, rank); 
         rank++;
         //if it doesn't exist in Map, add current number and its rank to the Map
         //increment the variable
      }
     //iterate over arr 
     for (const number of arr) {
         //Map.get to receive rank of number
         const getRank = numberToRanks.get(number)
         //push to final array
         finalArr.push(getRank)    
     }
     //return final array 
     return finalArr 
 };

 /* 645. Set Mismatch - 7/49 Testcases passing */
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    //declare an array to house final numbers
    const finalObj = new Set();
    //iterate using for loop
    for (let i = 0; i < nums.length; i++) {
        //iterate using second for loop
        for (let j = 1; j < nums.length; j++) {
            //i !== j so it doesn't equal the same element
            if (i !== j) {
                //if array[i] === array[j]
                if (nums[i] === nums[j]) {
                    //finalArr.push(nums[j])
                    finalObj.add(nums[i]);
                    console.log(nums[i])
                    //finalArr.push(nums[j] + 1)
                    finalObj.add(nums[i] + 1);
                } 
               
            } 
            
        }
        
    }
     return [...finalObj]
};

/* 345. Reverse Vowels of a String */
var reverseVowels = function(s) {
    //create vowels array to help with finding vowels
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    //split string
    const letterArray = s.split('');
    //left and right pointers, one at start, one at end
    left = 0
    right = letterArray.length - 1;
    //iterate over split string array while left < right
        while (left < right) {
            leftLetter = letterArray[left]
            rightLetter = letterArray[right]
            //look for consonants, if consonant increment left, decrement right
            if (!vowels.includes(leftLetter)) {
                left++;
                continue;
            }

            if (!vowels.includes(rightLetter)) {
                right--;
                continue;
            }
        //swap leftLetter for split string array[right] if vowel
        letterArray[right] = leftLetter;
        letterArray[left] = rightLetter;

        //move pointers off of current letters
        left++;
        right--;
        }
    //join split string
    return letterArray.join('');
    //return split string
};

/* 21. Merge Two Sorted Lists */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //make two pointers, pointer1 and pointer2
    //assign heads of the two lists to the pointers
    let pointer1 = list1;
    let pointer2 = list2
    const answer = new ListNode()
    let answerPointer = answer
    
    //iterate until both pointers are null (while loop)
        while (pointer1 || pointer2) {
        //null check
        if (!pointer1) {
            answerPointer.next = new ListNode(pointer2.val)
            answerPointer = answerPointer.next
            pointer2 = pointer2.next
            continue;
        }

        if (!pointer2) {
            answerPointer.next = new ListNode(pointer1.val)
            answerPointer = answerPointer.next
            pointer1 = pointer1.next
            continue;
        }

        //compare which number is lower or higher
        if (pointer1.val > pointer2.val) {
        //take the lower one and add to list
            answerPointer.next = new ListNode(pointer2.val)
            //move pointer forward one
            answerPointer = answerPointer.next
            pointer2 = pointer2.next
        } else {
            answerPointer.next = new ListNode(pointer1.val)
            answerPointer = answerPointer.next
            pointer1 = pointer1.next
        }


        }
    //return the head of merged linked list
    return answer.next
};

/* 645. Set Mismatch */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    //set an array to hold output
    const finalArr = [];
    //set an object to track numbers;
    const numberHash = {};
    //iterate over the nums array 
    for (let i = 0; i < nums.length; i++) {
        if (numberHash[nums[i]]) {
            finalArr.push(nums[i])
        } else {
            numberHash[nums[i]] = 1
        }
    }

    for (let i = 1; i <= nums.length; i++ ) {
        if (!numberHash[i]) {
            finalArr.push(i)
            break;
        }            
    }
    return finalArr
 };

 /* 142. Linked List Cycle II*/
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    //variables to hold pointers 
    let slow = head;
    let fast = head;

    //loop through LL with 2 pointers
    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next
        //if pointers are equal, loop present, return node
        if (slow === fast) {
            //reset slow to head
            slow = head
            //increment slow and fast by 1 node a piece
            while(slow !== fast) {
                //until slow and fast are the same
                slow = slow.next
                fast = fast.next
            }
            //return node in which they aer the same agian
            return slow
        }
    }
    return null

};

/* 441. Arranging Coins */
/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    //first row is going to be 1, second row 2, 3rd row 3, etc
    //use a while loop to iterate over coin amount
    let counter = 1;
    
    while (n > counter) {
    //use a counter, if counter is same as amount of coins in staircase level, return coins in staircase
        n -= counter;
        if (counter >= n) {
            break
        }
        counter++ ; 
    }
    return counter
};

/* 389. Find the Difference */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    //split s
    const splitS = s.split('')
    //split t
    const splitT = t.split('')
    //sort s
    const sortS = splitS.sort()
    //sort t
    const sortT = splitT.sort()
    
    for (let i = 0; i < sortT.length; i++) {
        if (sortS[i] !== sortT[i]) {
            console.log(sortT[i])
            return sortT[i]
        }
    }
};

/* 268. Missing Number */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    //sort nums
    const sortNums = nums.sort((a, b) => a - b) 
    //iterate over nums
    for (let i = 0; i < sortNums.length; i++) {
        //nums[i] === i 
        //if nums[i] !== i
        //return i
        if (sortNums[i] !== i) {
            return i
        }
    }

    return sortNums.length
};

/* 509. Fibonacci Number */
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
    //for base case 
        // n === 0 
        if (n === 0) {
            // return 0
            return 0
        //if n === 1
        } else if (n === 1) {
            //return 1
            return 1
        } else if (n > 1) {
            //denote n - 1
            //denote n - 2
            //add together
           return fib(n - 1) + fib(n - 2)
        }
    }

    /* 13. Roman to Integer */
    /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //make an object with the corresponding values of Roman to Decimal Numbers
    const romanToInteger = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    //add up the values of the Roman Number
    const eachDigit = s.split('');

    const mappedDigits = eachDigit.map((digit, i) => {
        //if the value before a digit is less than it
        if (i < eachDigit.length - 1 && romanToInteger[digit] < romanToInteger[eachDigit[i + 1]]) {
            return romanToInteger[digit] * -1
        }   
        return romanToInteger[digit]
    })
    const reduceDigits = mappedDigits.reduce((a,b) => a + b, 0);

    return reduceDigits
    //Give special case for IX(9) or IV(4), XL(40) or XC(90), CD(400) or CM (900) 
    //return integer number


};

**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const finalArr = [];
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            finalArr.push([1]);
        } else {
            const curLastRow = finalArr[finalArr.length - 1]
            const dummyRow = [0, ...curLastRow, 0];
            //[0,1,2,1,0]
            const rowAdd = [];
            for (let j = 0; j < dummyRow.length - 1; j++) {
                const finalNumber = dummyRow[j] + dummyRow[j+1];
                rowAdd.push(finalNumber);
                
            }
            
            finalArr.push(rowAdd)
            
            
        }
    }
    return finalArr

};