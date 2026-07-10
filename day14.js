// ================================
// Day 14 - JavaScript Practice
// ================================


// Q1: Move All Zeros to End
let arr1 = [0, 1, 0, 3, 12];
// Output:
// [1, 3, 12, 0, 0]

let newArr = []

for(let i = 0;i<arr1.length;i++){
    if(arr1[i]!==0){
        newArr.push(arr1[i])
    }
}

let count = arr1.length-newArr.length



for(let i = 1;i<=count;i++){

    newArr.push(0)

}console.log(newArr)









// Q2: Count Even and Odd Numbers
let arr2 = [10, 21, 34, 55, 68, 77];
// Output:
// Even = 3
// Odd = 3

let odd = 0 
let even = 0 

for(let i = 0 ;i<arr2.length;i++){
    if(arr2[i]%2==0){
        even=even+1
    }else{
        odd = odd+1
    }
}console.log(odd,even)



// Q3: Find the Longest Word
let words3 = ["apple", "banana", "kiwi", "watermelon"];
// Output:
// watermelon

let largestCount  = words3[0]

for(let i = 0 ;i<words3.length;i++){

    if(words3[i].length>largestCount.length){
        largestCount=words3[i]
    }
}console.log(largestCount)




// Q4: Check if Two Arrays are Equal
let arr4a = [1, 2, 3];
let arr4b = [1, 2, 3];
// Output:
// Equal




// Q5: Find Common Elements
let arr5a = [1, 2, 3, 4, 5];
let arr5b = [3, 4, 5, 6, 7];
// Output:
// [3, 4, 5]




// Q6: Find Intersection Count
let arr6a = [10, 20, 30, 40];
let arr6b = [20, 30, 50];
// Output:
// 2




// Q7: Find Pair Whose Sum is Target
let arr7 = [2, 7, 11, 15];
let target7 = 9;
// Output:
// 2 7




// Q8: Check Palindrome Number
let num8 = 1221;
// Output:
// Palindrome

// Example:
// let num8 = 1234;
// Output:
// Not Palindrome




// Q9: Find Maximum Consecutive 1's
let arr9 = [1, 1, 0, 1, 1, 1, 0, 1];
// Output:
// 3




// Q10: Merge Two Arrays Without Duplicates
let arr10a = [1, 2, 3];
let arr10b = [3, 4, 5];
// Output:
// [1, 2, 3, 4, 5]




// ================================
// Rules
// ================================

// ❌ Don't use sort()
// ❌ Don't use Set()
// ❌ Don't use filter()
// ❌ Don't use map()
// ❌ Don't use reduce()

// ✅ Use loops
// ✅ Use if/else
// ✅ Use arrays
// ✅ Use objects if needed