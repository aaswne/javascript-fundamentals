// ===============================
// Day 9 - JavaScript String Practice
// ===============================

// Q1: Check if a string starts with a specific word.
// Example:
// "JavaScript" starts with "Java" -> true

let wordd  = "javascript"

console.log(wordd.startsWith("java"))


// Q2: Check if a string ends with a specific word.
// Example:
// "photo.png" ends with ".png" -> true

let str = "photo.png"

console.log(str.endsWith("png"))


// Q3: Find the index of the first occurrence of a character.
// Example:
// "banana"
// Find: "a"
// Output: 1


const word = "banana"

console.log(word.indexOf("a"))



// Q4: Find the index of the last occurrence of a character.
// Example:
// "banana"
// Find: "a"
// Output: 5

let worddd = "banana"

console.log(worddd.lastIndexOf("a"))


// Q5: Get a part of a string using slice().
// Example:
// "JavaScript"
// Output: "Script"

let lang = "javascript"

console.log(lang.slice(4))


// Q6: Get the first 4 characters using substring().
// Example:
// "Frontend"
// Output: "Fron"

let langu = "frontend"

console.log(langu.slice(0,5))


// Q7: Get the character at a specific index.
// Example:
// "React"
// Get character at index 2
// Output: "a"




// Q8: Repeat a string multiple times.
// Example:
// "Hi"
// Repeat 3 times
// Output: "HiHiHi"


// Q9: Count how many times a character appears.
// Example:
// "banana"
// Count how many times "a" appears.
// Output: 3


// Q10: Capitalize the first letter of a string.
// Example:
// "javascript"
// Output: "Javascript"