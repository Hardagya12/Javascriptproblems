//1)
console.log("Hello World")
//2)SUM OF 2 NUMBERS
function sum(a, b) {
    return a + b;
}

const result = sum(3, 4);
console.log(result);
//3)LARGEST

let a=3
let b=4
let c=6

function num(a,b,c){
    if(a>b && a>c){
        console.log("a is the largesst")
    }
    else if(b>a && b>c){
        console.log("b is the largest")
    }
    else {
        console.log("c is the largest")
    }
}
num(a,b,c)

//4 ODD OR EVEN

function oddoreven(number){
    if(number%2==0){
        console.log("number is even")
}
    else {
    console.log("number is odd")
}
}
oddoreven(4)
oddoreven(5)

//5) FACTORIAL 

function fac(number) {
    if (number < 0) {
        console.log("Factorial not defined for negative numbers");
    } else {
        let factorial = 1;
        let i = 1;
        do {
            factorial *= i; 
            i++; 
        } while (i <= number);
        console.log(factorial);
    }
}

fac(4); 

//6)Reverse string chatgpt

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"))

//7)Palindrome chatGpt

function isPalindrome(str) {
   
    const reversedStr = str.split('').reverse().join('');
    
    
    return str === reversedStr;
}

console.log(isPalindrome('madam')); 
console.log(isPalindrome('hello')); 

//8) minimum number in an array 

function findSmallestNumber(arr) {
   
    return Math.min(...arr);
}

console.log(findSmallestNumber([5, 3, 8, 1, -9])); 
console.log(findSmallestNumber([-10, -50, 0, 100])); 

//9)ascending order https://www.w3schools.com/js/js_array_sort.asp

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return a - b;
});
console.log(points);

//10)contains substring or not chatGpt

function containsSubstring(str, substring) {
    return str.includes(substring);
}


console.log(containsSubstring('Hello, world!', 'world')); 
console.log(containsSubstring('Hello, world!', 'moon'));  

//11) Sum of all elements in an array 

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray)); 

//12) fibonacci

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

const n = 10;
console.log(generateFibonacci(n)); 

//13) Prime or not

function checkPrime(number) {
    var count = 0;
    
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        count++;
      }
    }
    
    if (count > 0) {
      console.log(number, "is not a prime number");
    } else {
      console.log(number, "is a prime number");
    }
  }
  checkPrime(15)
  
//   //14)Vowels check (chatGpt)

  function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
  
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    console.log("Number of vowels:", count);
  }
  
  countVowels("hello")

//   //15)array index finder
  function findElementIndex(arr, element) {
    const index = arr.indexOf(element);
    
    console.log(index);
  }

  const yourArray = [10, 20, 30, 40, 50];
  findElementIndex(myArray, 30); 
  findElementIndex(myArray, 60); 

//   16)REMOVE DUPLICATES 
function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
    
      if (uniqueArray.includes(arr[i]) === false) {
        uniqueArray.push(arr[i]);
      }
    }
  
    console.log(uniqueArray);
  }
  

  const mineArray = [1, 1, 2, 2, 3, 3, 4, 4, 5];
  removeDuplicates(myArray);  

// //   17)common elements in an array
function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
    
        if (commonElements.indexOf(arr1[i]) === -1) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    console.log(commonElements);
  }
  
  const array1 = [1, 2, 3,];
  const array2 = [2,3,4];
  findCommonElements(array1, array2);  

  // 18)Check if Two Strings are Anagrams (chat gpt)

  

  function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const count1 = {};
    const count2 = {};
  
    for (let i = 0; i < str1.length; i++) {
      const char1 = str1.charCodeAt(i);
      const char2 = str2.charCodeAt(i);
    //The charCodeAt() method is a Javascript function that returns a Unicode value representing the character at the specified index in a string. Unicode is a standard encoding system that is used to represent character from almost all languages. Every character has a unique Unicode value.
      if (!count1[char1]) {
        count1[char1] = 1;
      } else {
        count1[char1]++;
      }
  
      if (!count2[char2]) {
        count2[char2] = 1;
      } else {
        count2[char2]++;
      }
    }
  
    for (const key in count1) {
      if (count1[key] !== count2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(areAnagrams('cartk', 'track')); 
  
  ///19)Capitalize the First Letter of Each Word (chatGpt)
  
  
  function capitalizeWords(str) {
    let result = '';
    let capitalizeNext = true;
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      if (charCode === 32) { // space character
        result += ' ';
        capitalizeNext = true;
      } else {
        if (capitalizeNext) {
          result += String.fromCharCode(charCode - 32); // convert to uppercase
          capitalizeNext = false;
        } else {
          result += String.fromCharCode(charCode); // keep as lowercase
        }
      }
    }
  
    return result;
  }
  
  console.log(capitalizeWords('hello world')); 
  
  
  //20)Flatten a Nested Array
  
  
  function flattenArray(arr) {
    while (arr.some(Array.isArray)) {
      arr = [].concat(...arr);
    }
    return arr;
  }
  console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
  
  //21)
  
  
  //22)valid email
  
  
  function isValidEmail(email) {
    var parts = email.split('@');
    if (parts.length !== 2) return false;
    var username = parts[0];
    var domain = parts[1];
    if (username.length < 1) return false;
    if (domain.indexOf('.') === -1) return false;
    return true;
  }
  
  console.log(isValidEmail('ptldevkumar@gmail.com')); 
  console.log(isValidEmail('ptldevkumar@gmilcom')); 
  
  //23)Convert Celsius to Fahrenheit
  
  
  celsius=1
  function toFahrenheit() {
      return (celsius * 9/5) + 32;
  }
    
  console.log(toFahrenheit()); 
  
  //24)Remove a Specific Element from an Array
  
  
  function removeElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  console.log(removeElement([3, 1, 4, 1, 5],4))
  
  
  //25)Find the Second Largest Number in an Array
  
  
  function secondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      }
    }
  
    return secondMax;
  }
  console.log(secondLargest([1, 2, 3, 4, 5]));
  
  //26)Find the Longest Word in a String
  function longestWord(str) {
    let words = [];
    let word = '';
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        if (word.length > maxLength) {
          maxLength = word.length;
          longestWord = word;
        }
        word = '';
      } else {
        word += str[i];
      }
    }
  
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  
    return longestWord;
  }
    console.log(longestWord('The quick brown fox jumped over the lazy dog')); 
  //27)Find the Missing Number in an Array**
    
  function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return totalSum - actualSum;
  }
  
  console.log(findMissingNumber([1, 2, 4, 5, 6]));
  
  //28)Calculate the GCD of Two NumbersCalculate the GCD of Two Numbers
  
  function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
  }
  
  console.log(gcd(12, 18)); 
  
  //29)Calculate the LCM of Two Numbers
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  
  console.log(lcm(2,3));
  
  //30)Check for Balanced Parentheses
  
  
  function isBalanced(str) {
    let stack = [];
    let pairs = {')': '(', '}': '{', ']': '['};
  
    for (let char of str) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else {
            stack.push(char);
        }
    }
  
    return stack.length === 0;
  }
  console.log(isBalanced('()')); 
  
  //31)Rotate an Array

  
function rotateArray(arr, k) {
    const n = arr.length;
    if (n === 0) return arr; 
    k = k % n; 
    
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1,2,3,4,5],2))




