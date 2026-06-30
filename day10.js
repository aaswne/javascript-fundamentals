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

let nme = "Aswin Krishna";

console.log(nme.replaceAll(" ", "").toLowerCase() + "07");

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

// Q4: Hide Phone Number
// Input:
// 8089459939
//
// Output:
// ******9939
//
// Show only the last 4 digits.

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

// Q6: Student Result
//
// let marks = [45, 78, 90, 35, 67]
//
// Print:
// Passed = ?
// Failed = ?
// Highest = ?
// Lowest = ?
// Average = ?

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
