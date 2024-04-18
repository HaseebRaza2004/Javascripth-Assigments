// Q:1 *String Length Calculation*:
var str = "Hello World"
let length = 0;

for (i=0; i<=str.length; i++) {
 
    length++;

}
console.log(str)
console.log(length)


// Q:2 *String to Uppercase*:
var name = "my name is haseeb raza"
var name_upper_case = name.toUpperCase()
console.log(name)
console.log(name_upper_case)

// Q:3 3. *String to Lowercase*:
var name_1 = "IT'S RAINING"
var name_1_lower_case = name_1.toLowerCase()
console.log(name_1)
console.log(name_1_lower_case)

// Q:4 *Count Specific Character*:
var char = prompt("enter any characters to count the occurence")
var charToCheck = prompt("enter any char to check ")
count = 0;

for(i=0 ; i<= char.length; i++) {
    
    if(char[i] === charToCheck) {
            count++;
    }

}

console.log(char)
console.log(count);

// Q:5 *Substring Extraction*:

var stringSub = prompt("enter any string?")
var startIndex = prompt("enter Start index string")
var endIndex = prompt("enter the end index of the string")

let results = "";
for (let i = startIndex; i < endIndex; i++) {
  results += str[i]
}

console.log(results);

//  Q6 *Capitalize Each Word*:

const cap = "hello world! ";
let result = "";

for (let i = 0; i < cap.length; i++) {
  if (i === 0 || cap[i - 1] === " ") {
    result += cap[i].toUpperCase();
  } else {
    result += cap[i];
  }
}

console.log(result);


// Q7 *Trim Whitespace*

var wordToTrim = "  My name is Muhammad Haseeb Raza    "
var trims = wordToTrim.trim()

console.log(wordToTrim)
console.log(trims);

// Q8  *Count Vowels and Consonants*:

const wordToCheckForVowel = "The quick brown fox jumps over the lazy dog.";

let vowels = 0;
let consonants = 0;

for (let i = 0; i < wordToCheckForVowel.length; i++) {
  const char = wordToCheckForVowel[i];

  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels++;
  } else if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
    consonants++;
  }
}

console.log(`Number of vowels: ${vowels}`);
console.log(`Number of consonants: ${consonants}`);

// Q9 *Substring Extraction with Index*:

// const subStringWord = "Hello, World!";
// const startIndex = prompt("enter index for substring");

// let substring = "";

// for (let i = startIndex; i < subStringWord.length; i++) {
//   substring += subStringWord[i];
// }

// console.log(substring);


// // Q10 *Remove Duplicates*:

// const wordToRemove = "hellwoowsdsdsowwaaaaskdnSMITTTT";

// let uniqueStr = "";

// for (let i = 0; i < wordToRemove.length; i++) {
//   if (uniqueStr.indexOf(wordToRemove[i]) === -1) {
//     uniqueStr += wordToRemove[i];
//   }
// }

// console.log(wordToRemove)
// console.log(uniqueStr); 

// Q11 *Word Count in String*:

var countWords = "Saylani mass it training has more than 5 courses"
var wordCount = 0;

for (i= 0; i<=countWords.length ; i++) {

    if (countWords[i] === " " && countWords[i - 1] !== " ") {
        wordCount++;
      }

}

if (countWords[0] !== " ") {
    wordCount++;
  }

console.log(wordCount)

// Q12 *Remove All Instances*:

const substringSub = "The quick brown fox jumps over the lazy dog.";
const substringToRemove = "the";

let newStr = "";

for (let i = 0; i < substringSub.length; i++) {
  if (substringSub.substring(i, i + substringToRemove.length) !== substringToRemove) {
    newStr += substringSub[i];
  }
}

console.log(newStr); 