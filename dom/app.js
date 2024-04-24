// Q:1 Password Generator
// Generate a random password of length 10 characters. Ensure that the password contains a mix of uppercase letters, lowercase letters, and digits. Print the generated password.

// var special = "!@#$*_"
// var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var number = "0123456789"

// var password = prompt("Password must be in 10 characters, 1 Uppercase, and 1 Digit")

// console.log(password);

// Q:2 Word Reverser
// Ask the user to input a sentence. Reverse the order of words in the sentence and print the reversed sentence.

var sentence1 = document.getElementById("para2")

function reversed() {
    var words = para2.value
    var words1 = words.split(" ")
    var words_reverse = words1.reverse()
    var answer = words_reverse.join(" ")
    console.log(answer);
}

// Q:3 Word Capitalizer:
// Ask the user to input a sentence. Capitalize the first letter of each word in the sentence and print the modified sentence.

var sentence = document.getElementById("para")

function seeinfo() {
    var value = para.value
    var arr = value.split(" ")

    console.log(value);
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i]
        arr[i] = word[0].toUpperCase() + word.slice(1);
    }
    console.log(arr)
       var updated = arr.join(" ")
       console.log(updated)
}

// Q:4 Word Finder:
// Ask the user to input a sentence and a word. Check if the word is present in the sentence. If it is, print "Word found", otherwise print "Word not found".

var para4 = document.getElementById("para3")
var find = document.getElementById("find word")

function ok () {
    var lower_case_sentence = para4.toUpperCase();
    var lower_case_word = find.toUpperCase();

    if (lower_case_sentence == lower_case_word) 
    {console.log("Word Found");
    } else {
     console.log('Word Not Found');   
    }
    
}

// Q:5 String Concatenation:
// Ask the user to input their first name and last name separately. Concatenate the first name and last name together with a space in between and print the full name.

var first_name = prompt('Enter first name')
var last_name = prompt('Enter last name')

var full_name = first_name + " " + last_name
full_name.trim()
console.log(full_name);