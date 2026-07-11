// ======================================
// Day 15 - JavaScript DSA (Level 1.5)
// Based on Day 1 to Day 14
// ======================================


// Q1: Find the Number That Appears Only Once
let arr1 = [4, 3, 2, 4, 3, 2, 7];
// Output:
// 7

let result = [ ]

for(let i = 0 ;i<arr1.length;i++ ){
    let number = arr1[i]

    if(number!==result){
        result.push(number)
    }else if(number==result){
        result
    }

}console.log(result)



// Q2: Find All Repeating Numbers
let arr2 = [1, 2, 3, 2, 4, 1, 5, 3];
// Output:
// [1, 2, 3]
// Each repeating number should appear only once in the result



// Q3: Find the Second Most Frequent Number
let arr3 = [1, 1, 1, 2, 2, 3, 3, 3, 3];
// Output:
// 1
// 3 appears 4 times
// 1 appears 3 times



// Q4: Move All Negative Numbers to the Beginning
let arr4 = [1, -2, 3, -4, 5, -6];
// Output:
// [-2, -4, -6, 1, 3, 5]
// Order should remain the same



// Q5: Separate Even and Odd Numbers
let arr5 = [1, 2, 3, 4, 5, 6];
// Output:
// Even: [2, 4, 6]
// Odd: [1, 3, 5]



// Q6: Find the Longest Repeated Number Sequence
let arr6 = [1, 1, 2, 2, 2, 3, 3, 4];
// Output:
// Number: 2
// Count: 3



// Q7: Check Whether One Array is a Subset of Another
let arr7a = [1, 2, 3, 4, 5];
let arr7b = [2, 4, 5];
// Output:
// true
// Every value in arr7b must exist in arr7a



// Q8: Find All Missing Numbers Between 1 and N
let arr8 = [1, 2, 4, 6, 7];
let n8 = 7;
// Output:
// [3, 5]



// Q9: Find Pairs With the Same Difference
let arr9 = [1, 3, 5, 7];
let difference9 = 2;
// Output:
// [1, 3]
// [3, 5]
// [5, 7]



// Q10: Find the Longest Increasing Continuous Part
let arr10 = [1, 2, 3, 1, 2, 3, 4, 2];
// Output:
// 4
// Longest increasing part: [1, 2, 3, 4]