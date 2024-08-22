
//string questions

//1)Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"))

//2)
//3)
//4)
//5)Number of words in a string
function countWords(str) {
  return str.split(' ').length;
}
console.log(countWords("This is a test string"));
//6)ANAGRAMS

//7)REPLACCIING SPACES WITH HYPHENS-


function replaceSpaces(str) {
  return str.replace(/ /g, '-');
}
console.log(replaceSpaces("hARDAGYA RAJPUT"))

//8)Convert a String to Title Case

//9)nUMERIC OR NOT 

function isNumeric(str) {
  return /^\d+$/.test(str);
}
console.log(isNumeric("12345"))

//10)Remove Duplicates Characters from a String

function removeDuplicates(str) {
  return [...new Set(str)].join('');
}
console.log(removeDuplicates("PROGRAMING"))

//11)Find the Longest Word in a String

//12)capitalize first letter of each word in a string (chat gpt)

function capitalizeWords(str) {
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode === 32) {
      result += ' ';
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += String.fromCharCode(charCode - 32); 
        capitalizeNext = false;
      } else {
        result += String.fromCharCode(charCode);
      }
    }
  }

  return result;
}
//13)repeat a string 'n' times

  function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString("abc",3))

//14)check  if the string has a substring 
function containsSubstring(str, substring) {
  return str.includes(substring);
}
console.log(containsSubstring("hello world", "world"));
console.log(containsSubstring("hello world", "planet"));

//15)Convert a String to an Array of Words

function stringToWords(str) {
 
  return str.split(/\s/);//(/\s/ removes whitespaces)
}
console.log(stringToWords("This is a test"));

//16)

//17)Check if a String Starts with a Specific Substring
function startsWith(str, substring) {
  return str.startsWith(substring);
}
console.log(startsWith("hello world", "hello"));
console.log(startsWith("hello world", "world"));


//18)Check if a String Ends with a Specific Substring
function endsWith(str, substring) {
  return str.endsWith(substring);
}

console.log(endsWith("hello world", "world"));
console.log(endsWith("hello world", "hello"));

//19)insert substring at a specific position
function insertSubstring(originalString,substring,position){
  return originalString.slice(0, position) + substring + originalString.slice(position);
}

console.log(insertSubstring("Hello World", "Beautiful ", 6));

//20)Write a function that removes all instances of a substring from a string.
