// Count Characters (Ignore Spaces)

const text = "aswin krishna";

console.log(text.replace(" ", "").length);

// reverse a string

const word = "javascript";

let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
}
console.log(reversed);

// Count Vowels (Uppercase Included)

const word = "AsWin";
let vowels = 0
for(let i = 0;i<word.length;i++){

    if(
        word[i].toLocaleLowerCase()!=="a"&&
        word[i].toLocaleLowerCase()!=="e"&&
         word[i].toLocaleLowerCase()!=="i"&&
          word[i].toLocaleLowerCase()!=="o"&&
           word[i].toLocaleLowerCase()!=="u"
    ){
        vowels++
    }
} console.log(vowels)

