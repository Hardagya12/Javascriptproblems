//Array Questions
//1) sum of numbers in an array

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5])); 
  
  //2) largest number in an array
  function findLargestNumber(numbers) {
    return Math.max(...numbers);
  }
  console.log(findLargestNumber([1, 5, 3, 9, 2]))
  
  //3)smallest  number in an array
  function findSmallestNumber(numbers) {
    return Math.min(...numbers);
  }
  console.log(findSmallestNumber([1, 5, 3, 9, 2]))
  
  //4) array in ascending order
   const points = [40, 100, 1, 5, 25, 10];
   points.sort(function(a, b) {
      return a - b;
   });
   console.log(points);
  
   //5) array in descending order
   
   const desc = [40, 100, 1, 5, 25, 10];
   desc.sort(function(a, b) {
      return b - a;
   });
   console.log(desc);
  
   //6)Reverse an array
  
   
   const rev = [40, 100, 1, 5, 25, 10];
   rev.reverse(function(a, b) {
      return a,b;
   });
   console.log(rev);
  
   //7)Check if an Array Contains a Specific Elements
  
   function containsElement(arr, element) {
    return arr.includes(element);
  }
  console.log(containsElement([1, 2, 3, 4, 5], 4));
  
  //8)Find the Index of a Specific Element in an Array
  function findIndexOfElement(arr, element) {
    return arr.indexOf(element);
  }
  console.log(findIndexOfElement([1, 2, 3, 4, 5], 3))
  
  //9)Remove Duplicates from an Array
  
  var arr=[1, 2, 2, 3, 4, 4, 5]
  function removeDuplicates(data){
    return[...new Set(data)]
  }
  console.log(removeDuplicates(arr))
  
  //10) Merge two arrays into one
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

  //11)Find the Intersection of Two Arrays
  function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1, 2, 3], [2, 3, 4]))

//12) Find Union of two arrays
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(union([1, 2, 3], [2, 3, 4]))

//13)Check  if an array is sorted in ascending order

function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; 
        }
    }
    return true; 
}
console.log(isSortedAscending([1, 2, 3, 4, 5]))

//14) Find difference between two arrays
function difference(arr1, arr2) {
    const set2 =new  Set(arr2); 
    return arr1.filter(item => !set2.has(item));
}
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

console.log(difference(array1, array2));

//15) FUNCTION THAT ROTATES AN ARRAY WITH 'K' POSITION

function rotateArray(arr, k) {
    const n = arr.length;
    if (n === 0) return arr; 
    k = k % n; 
    
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1,2,3,4,5],2))

//16) Maximum difference between two elements in an array 

function maxDifference(arr) {
    if (arr.length < 2) {
        return 0;
    }
    
    let minValue = arr[0];
    let maxValue = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    
    return maxValue - minValue;
}

const ar = [2, 3, 10, 6, 4, 8, 1];
console.log(maxDifference(ar));  

//17) Write a function that returns the second largest element in an array. 

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

  //18)  Write a function that finds the pair of elements with the maximum sum in an array.  

  function maxSumPair(arr) {
    if (arr.length < 2) {
        return null;
    }
    
    let max1 = -Infinity;
    let max2 = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    
    return [max1, max2];
}

const arry =[1, 2, 3, 4, 5]
console.log(maxSumPair(arr));  

//19)  Write a function that finds the pair of elements with the minimum sum in an array.  
function minSumPair(arr) {
    if (arr.length < 2) {
        return null;
    }
    
    let min1 = Infinity;
    let min2 = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] < min2) {
            min2 = arr[i];
        }
    }
    
    return [min1, min2];
}

const arr1 = [3, 10, 6, 1, 15];
console.log(minSumPair(arr));

//20)Move all zeroes to end of an array

