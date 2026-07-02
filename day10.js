// ==============================
// Day 10 - JavaScript Logic Challenge
// Solve using loops, conditions, functions, arrays, and objects.
// Don't use ChatGPT or Google.
// ==============================

// Q1: Username Generator
// Input:
// "Aswin Krishna"
// Output:
// "aswinkrishna07"
//
// Rules:
// - Convert to lowercase.
// - Remove all spaces.
// - Add "07" at the end.

let name = "Aswin Krishna";

console.log(name.replaceAll(" ", "").toLowerCase() + "07");

// Q2: Password Strength Checker
// Input:
// "Aswin123"
//
// Output:
// "Strong Password"
//
// Rules:
// - Minimum 8 characters.
// - At least one uppercase letter.
// - At least one lowercase letter.
// - At least one number.

let input = "Aswin1234";

let upper = false;
let lower = false;
let num = false;
let char = false;

if (input.length >= 8) {
  char = true;
}

for (let i = 0; i < input.length; i++) {
  if (
    input[i] == input[i].toUpperCase() &&
    input[i] !== input[i].toLowerCase()
  ) {
    upper = true;
  }
  if (
    input[i] == input[i].toLowerCase() &&
    input[i] !== input[i].toUpperCase()
  ) {
    lower = true;
  }
  if (input[i] > "0" && input[i] < "9") {
    num = true;
  }
}

if (num && upper && lower && char) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

// Q3: Email Validator
// Input:
// "abc@gmail.com"
//
// Output:
// "Valid Email"
//
// Check:
// - Contains '@'
// - Contains '.'
// - Doesn't start with '@'

let input2 = "abc@gmail.com";

let contains1 = false;
let contains2 = false;
let startWith = false;

for (let i = 0; i < input2.length; i++) {
  if (input2[i] == "@") {
    contains1 = true;
  }
  if (input2[i] == ".") {
    contains2 = true;
  }
  if (input2[0] !== "@") {
    startWith = true;
  }
}

if (contains1 && contains2 && startWith == true) {
  console.log("valied email");
} else {
  console.log("not valied");
}

// Q4: Hide Phone Number
// Input:
// 8089459939
//
// Output:
// ******9939
//
// Show only the last 4 digits.

let number = "8089459939";

let hidden = "*".repeat(number.length - 4) + number.slice(-4);

console.log(hidden);

// Q5: Shopping Cart Total
//
// let cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1200 }
// ]
//
// Output:
// Total = 52000
//
// Don't use reduce().

let total = 0;
let cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1200 },
];
for (let item of cart) {
  total = total + item.price;
}
console.log(total);

// Q6: Student Result
//
let marks = [45, 78, 90, 35, 67];
//
// Print:
// Passed = ?
// Failed = ?
// Highest = ?
// Lowest = ?
// Average = ?
let passed = 0;
let failed = 0;
let highest = marks[0];
let lowest = marks[0];

let tottal = 0;
let average = tottal / marks.length;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 50) {
    passed = passed + 1;
  }

  if (marks[i] < 50) {
    failed = failed + 1;
  }
  if (marks[i] > highest) {
    highest = marks[i];
  }
  if (marks[i] < lowest) {
    lowest = marks[i];
  }

  total = total + marks[i];
}
console.log("passed",passed,"failed",failed,"highest",highest,"lowest",lowest,"average",average,"tottal",tottal)
// Q7: Find Duplicate Names
//
// let names = [
//   "Aswin",
//   "John",
//   "John",
//   "Alex",
//   "Aswin"
// ]
//
// Output:
// John
// Aswin
//
// Print each duplicate only once.

// Q8: ATM Simulator
//
// Starting Balance:
// let balance = 5000
//
// Create functions:
//
// deposit(amount)
// withdraw(amount)
// checkBalance()
//
// Example:
//
// deposit(1000)
// Balance = 6000
//
// withdraw(2500)
// Balance = 3500
//
// If balance is insufficient, print:
// "Insufficient Balance"

// Q9: Login System
//
// let username = "admin"
// let password = "1234"
//
// Create a login() function.
//
// If both values match:
// "Login Successful"
//
// Otherwise:
// "Invalid Username or Password"

// Q10: Employee Salary Calculator
//
// let employee = {
//   name: "Aswin",
//   salary: 35000,
//   bonus: 5000,
//   tax: 2500
// }
//
// Print:
//
// Employee : Aswin
// Basic Salary : 35000
// Bonus : 5000
// Tax : 2500
// Net Salary : 37500
//
// Net Salary = salary + bonus - tax
