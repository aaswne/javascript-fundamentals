// // Q1: Count Characters (Ignore Spaces)

// const text = "aswin krishna";

// console.log(text.replace(" ","").length)

// // Q2: Reverse a String

// const word = "javascript";

// let reversed = "";

// for (let i = word.length - 1; i >=0; i--) {
//   reversed = reversed + word[i];
// }console.log(reversed)

// // Q3: Count Vowels (Uppercase Included)

// const word = "AsWin";

// let vowel = 0;

// for (let i = 0; i < word.length; i++) {
//   if (
//     word[i].toLocaleLowerCase() === "a" ||
//     word[i].toLocaleLowerCase() === "e" ||
//     word[i].toLocaleLowerCase() === "i" ||
//     word[i].toLocaleLowerCase() === "o" ||
//     word[i].toLocaleLowerCase() === "u"
//   ) {
//     vowel++;
//   }
// }
// console.log(vowel);

// Q4: Count Consonants (Uppercase Included)

// const word = "FrontEnd";

// let constants = 0 

// for(let i = 0;i<word.length;i++){
//     if(word[i].toLowerCase()!=="a"&&
//     word[i].toLowerCase()!=="e"&&
//     word[i].toLowerCase()!=="i"&&
//     word[i].toLowerCase()!=="o"&&
//     word[i].toLowerCase()!=="u"
// ){
//     constants++
// }
// }console.log(constants)

// Q5: Check Palindrome (Ignore Case)


const word = "Madam";

let palindrome = ""

for(let i =word.length-1;i<0;i--){
    palindrome=palindrome+word[i]
    
}console.log(palindrome)

// // Q6: Check Sentence Palindrome (Ignore Spaces)

// const text = "nurses run";

// // Q7: Find Most Frequent Character

// const word = "javascript";
