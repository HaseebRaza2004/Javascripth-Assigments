// Q:1
// var number = prompt('enter number')

// if (number % 2 == 0) {console.log(`${number} is even`)}
// else{console.log(`${number} is odd`)}

// Q:2
// var num = prompt('enter number')

// if(num > 0){console.log(`the number is positive`)}
// else 
// if(num < 0){console.log(`the number is negative`)}
// else{console.log(`the number is zero`)}

// Q:3
// var num_1 = prompt('enter first number')
// var num_2 = prompt('enter second number')

// if(num_1 > num_2){console.log(`${num_1}`)}
// if(num_1 < num_2){console.log(`${num_2}`)}

// Q:4
var number_1 = prompt('enter first number')
var number_2 = prompt('enter second number')
var number_3 = prompt('enter third number')

var smallest_number = number_1

if(number_2 < smallest_number){smallest_number = number_2} 
if(number_3 < smallest_number){smallest_number = number_3}
console.log(`${smallest_number}`)
