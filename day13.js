// Q1: Find the Third Largest Number
let arr1 = [12, 45, 78, 23, 90, 56, 78];
// Output: 56

let largest = -Infinity;

let secondLargest = -Infinity;

let thirdLargest = -Infinity;

for (let i = 0; i < arr1.length; i++) {
  let num = arr1[i];

  if (num > largest) {
    thirdLargest = secondLargest;
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    thirdLargest = secondLargest;
    secondLargest = num;
  } else if (num > thirdLargest && num !== secondLargest && num !== largest) {
    thirdLargest = num;
  }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
console.log("Third Largest:", thirdLargest);

// Q2: Count how many times each number appears
let arr2 = [10, 20, 10, 30, 20, 10, 40];
// Output:
// 10 -> 3
// 20 -> 2
// 30 -> 1
// 40 -> 1

count = {};

for (let i = 0; i < arr2.length; i++) {
  let num = arr2[i];

  if (count[num]) {
    count[num]++;
  } else {
    count[num] = 1;
  }
  for (let key in count) {
    console.log(key + "->" + count[num]);
  }
}

// Q3: Move all zeros to the end
let arr3 = [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0]

let newArray = [];
let zeroCount = 0 

for (let i = 0; i < arr3.length; i++) {
  let num1 = arr3[i];

  if (num1 !== 0) {
    newArray.push(num1);
  }else{
    zeroCount++

  }
}console.log(zeroCount)
console.log(newArray);

for(let i = 0;i<zeroCount;i++){
  newArray.push(0)
}console.log(newArray)


// Q4: Find the first non-repeating number
let arr4 = [2, 3, 4, 2, 3, 5, 4];
// Output: 5

let count2 = {}

for(let i = 0;i<arr4.length;i++){
  let num2 = arr4[i]

  if(count2[num2]){
    count2[num2]++
  }else{
    count2[num2] = 1
  }

}console.log(count2)

 for ( let key in count2){
  if(count2[key]===1){
    console.log("non repeting number is",key)
  }
 }



// Q5: Check if array is sorted
let arr5 = [10, 20, 30, 40];
// Output: Sorted

// Q6: Reverse array without reverse()
let arr6 = [10, 20, 30, 40];
// Output: [40, 30, 20, 10]

// Q7: Find common elements
let arr7a = [10, 20, 30, 40];
let arr7b = [20, 40, 50, 60];
// Output: [20, 40]

// Q8: Remove duplicates without Set()
let arr8 = [10, 20, 10, 30, 20, 40];
// Output: [10, 20, 30, 40]

// Q9: Rotate array left by one
let arr9 = [10, 20, 30, 40, 50];
// Output: [20, 30, 40, 50, 10]

// Q10: Find missing number
let arr10 = [1, 2, 3, 5];
// Output: 4
