// Q:1
var number = prompt('enter number')

if (number % 2 == 0) {console.log(`${number} is even`)}
else{console.log(`${number} is odd`)}

// Q:2
var num = prompt('enter number')

if(num > 0){console.log(`the number is positive`)}
else 
if(num < 0){console.log(`the number is negative`)}
else{console.log(`the number is zero`)}

// Q:3
var num_1 = prompt('enter first number')
var num_2 = prompt('enter second number')

if(num_1 > num_2){console.log(`${num_1}`)}
if(num_1 < num_2){console.log(`${num_2}`)}

// Q:4
var number_1 = prompt('enter first number')
var number_2 = prompt('enter second number')
var number_3 = prompt('enter third number')

var smallest_number = number_1

if(number_2 < smallest_number){smallest_number = number_2} 
if(number_3 < smallest_number){smallest_number = number_3}
console.log(`${smallest_number}`)

// Q:5
var num = prompt("enter any number for factorial");

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else if (num < 0) {
      return "Factorial is not defined for negative numbers";
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  var answer = factorial(num);
console.log(`The factorial of ${num} is ${answer}`);



// Q:6 
var Math_Marks = prompt('enter math marks')
var English_Marks = prompt('enter english marks')
var Science_Marks = prompt('enter science marks')

if (isNaN(Math_Marks) || isNaN(English_Marks) || isNaN(Science_Marks))
 {alert("Please enter valid numbers for marks.")}

var average = (Math_Marks + English_Marks + Science_Marks) / 3
var Grade = average

if(average >= 90){Grade="AA"}else
if(average >= 80){Grade="A"}else
if(average >= 70){Grade="B"}else
if(average >= 60){Grade="C"}else
if(average >= 50){Grade="D"}
else{Grade = "F"}

console.log(`Your average score is: ${average.toFixed(2)}`)
console.log(`Your grade is: ${Grade}`)

// Q:7
var celsius =prompt("Enter temperature in Celsius:");
  
var fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);

// Q:8
var side1 = prompt("Enter the length of side 1:");
var side2 = prompt("Enter the length of side 2:");
var side3 = prompt("Enter the length of side 3:");

if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
  alert("Please enter valid positive numbers for side lengths.");

}

if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
  console.log("Invalid triangle: The sum of any two sides must be greater than the third side.");
  
}

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle: All three sides are equal.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles Triangle: Two sides are equal.");
} else {
  console.log("Scalene Triangle: All three sides are unequal.");
}

// Q:9
var character = prompt("Enter a character:").toLowerCase();

if (character.length !== 1 || !isNaN(character)) {
  alert("Please enter a single alphabetical character.");
}

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "y") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// Q:10
var base = prompt("Enter the base number:");
var exponent = prompt("Enter the exponent (whole number):");

var result = 1;
for (var i = 0; i < exponent; i++) {
  result *= base;
}

console.log(`${base} raised to the power of ${exponent} is ${result}`);

// Q:11
var age =prompt("Enter your age:");

var message;
if (age >= 0 && age <= 12) {
  message = "Child";
} else if (age >= 13 && age <= 19) {
  message = "Teenager";
} else if (age >= 20 && age <= 64) {
  message = "Adult";
} else {
  message = "Senior";
}
console.log(`You are classified as: ${message}`);
