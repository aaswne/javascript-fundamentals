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
let arr2 = [10, -5, 0, 8, -2, 0, 15];
//
// Output:
// Positive = 3
// Negative = 2
// Zero = 2

let negative = 0 

let positive = 0 

for (let each of arr2){
    if(each>0){
        positive = positive+1
    }

    if(each<0){
        negative=negative+1
    }
}console.log("positive:",positive)
console.log("negative",negative)



// --------------------------

// Q3: Find Duplicate Numbers
//
let arr3 = [1, 2, 3, 2, 4, 5, 1];
//
// Output:
// 1
// 2
//
// Print each duplicate only once.


for(let i = 0 ; i<arr3.length;i++){
    for(let j = i+1;j<arr3.length;j++){
        if(arr3[i]===arr3[j]){
            console.log(arr3[i])
        }
    }
}


// --------------------------

// Q4: Remove Duplicates
//
let arr4 = [10, 20, 10, 30, 20, 40];
//
// Output:
// 10
// 20
// 30
// 40
//
// Don't use Set()


const newArr = arr4.filter((item,index)=>
arr4.indexOf(item)===index)

console.log(newArr)




// --------------------------

// Q5: Linear Search with Function
//
let arr5 = [5, 10, 15, 20, 25];
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

const searchNumber = (num) =>{
  if(num){
      console.log(arr5.indexOf(num))
  }else{
    console.log(" not found")
  }
}

searchNumber(27)