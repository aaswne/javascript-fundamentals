// // Count characters in a string

const word = "aswin";

count = word.length;

console.log(count);

// Reverse a string

let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
}
console.log(reversed);

// Count vowels

let vowels = 0;

for (let i = 0; i < word.length; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    vowels++;
  }
}

console.log(vowels);

// Count consonants

let consonants = 0;

for (let i = 0; i < word.length; i++) {
  if (
    word[i] !== "a" &&
    word[i] !== "e" &&
    word[i] !== "i" &&
    word[i] !== "o" &&
    word[i] !== "u"
  ) {
    consonants++;
  }
}
console.log(consonants);

// Check if a word is a palindrome

let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed =reversed +word[i];


}    if(reversed==word){
    console.log("palindrome")
  }else{
    console.log("not a palindrome")
  }


