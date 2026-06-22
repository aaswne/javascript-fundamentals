// Find largest number in an array

const num = [1, 2, 3, 4, 5];

let largest = num[0];

for (let i = 1; i <= num.length; i++) {
  if (num[i] > largest) {
    largest = num[i];
  }

  // Find smallest number in an array
}
console.log(largest);

let smallest = num[0];

for (let i = 1; i <= num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}
console.log(smallest);

// Find sum of all numbers in an array

let sum = 0;

for (let i = 1; i <= num.length; i++) {
  sum = sum + i;
}
console.log(sum);

// Find average of an array

sum = 0;

for (let i = 1; i < num.length; i++) {
  sum = sum + i;
}
let average = sum / num.length;
console.log(average);

// Count how many numbers are even

let even = 0;

for (let i = 1; i <= num.length; i++) {
  if (i % 2 == 0) {
    even = even + 1;
  }
}
console.log(even);
