// ======================================
// JavaScript Practice - Day 17 (Medium)
// ======================================

// 1. Find the first non-repeating character.
const str1 = "javascript";
// Output: "j"

let nonrepeting = ""



for(let i = 0 ; i <str1.length ; i++){

  let count =  0 

  for(let j = 0 ;j<str1.length;j++){
    if(str1[i]==str1[j]){
      count++
    }
  }


  if(count==1){
  nonrepeting=str1[i]
  break
}

}console.log(nonrepeting)



// 2. Rotate an array to the right by k positions.
const arr1 = [1, 2, 3, 4, 5];
const k = 2;
// Output: [4, 5, 1, 2, 3]


// 3. Find the frequency of each word.
const sentence = "react js react javascript js react";
// Output:
// {
//   react: 3,
//   js: 2,
//   javascript: 1
// }


// 4. Flatten the array without using flat().
const arr2 = [1, [2, [3, 4], 5], 6];
// Output:
// [1, 2, 3, 4, 5, 6]


// 5. Find all duplicate numbers.
const arr3 = [1, 2, 3, 2, 4, 5, 3, 6, 2];
// Output:
// [2, 3]


// 6. Group people by department.
const employees = [
  { name: "John", dept: "IT" },
  { name: "Sam", dept: "HR" },
  { name: "Alex", dept: "IT" },
  { name: "Mary", dept: "Sales" },
  { name: "Tom", dept: "HR" }
];

// Output:
// {
//   IT: [...],
//   HR: [...],
//   Sales: [...]
// }


// 7. Find the longest word.
const str2 = "React developers love solving javascript problems";
// Output:
// "javascript"


// 8. Find the intersection of two arrays.
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
// Output:
// [3, 4, 5]


// 9. Sort an array of objects by age (ascending).
const users = [
  { name: "John", age: 28 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "David", age: 25 }
];

// Output:
// [
//   { name: "Alice", age: 22 },
//   { name: "David", age: 25 },
//   { name: "John", age: 28 },
//   { name: "Bob", age: 30 }
// ]


// 10. Find the second most frequent character.
const str3 = "aaabbbbccddeeeee";
// Output:
// "b"