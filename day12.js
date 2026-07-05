// ==========================
// DSA - Day 12
// ==========================

// Q1: Find Second Largest Number
//
let arr = [12, 45, 7, 89, 23, 89];
//
// Output:
// Second Largest = 45
//
// Don't use sort()

let largest = arr[0];
let secondLargest = arr[0];

for (let item of arr) {
  if (item > largest) {
    largest = item;
  }
}

for(let item of arr){
    if(item>secondLargest && item<largest){
        secondLargest = item
    }
}
console.log("secondLargest",secondLargest)
console.log("largest",largest);

// --------------------------

// Q2: Count Positive, Negative, Zero
//
// let arr = [10, -5, 0, 8, -2, 0, 15];
//
// Output:
// Positive = 3
// Negative = 2
// Zero = 2

// --------------------------

// Q3: Find Duplicate Numbers
//
// let arr = [1, 2, 3, 2, 4, 5, 1];
//
// Output:
// 1
// 2
//
// Print each duplicate only once.

// --------------------------

// Q4: Remove Duplicates
//
// let arr = [10, 20, 10, 30, 20, 40];
//
// Output:
// 10
// 20
// 30
// 40
//
// Don't use Set()

// --------------------------

// Q5: Linear Search with Function
//
// let arr = [5, 10, 15, 20, 25];
//
// Create function:
//
// searchNumber(num)
//
// Example:
// searchNumber(20)
//
// Output:
// Found at index 3
//
// If not found:
// Not Found
