// # ## Day 5 - Pattern Printing

// - [ ] Print:

// *
// **
// ***
// ****
// *****

// for(let i =1;i<=5;i++){

//     let row = ""

//     for(let j = 1;j<=i;j++){
//         row=row+"*"
//     }console.log(row)
// }

// - [ ] Print:

// *****
// ****
// ***
// **
// *

// for(let i= 5;i>=1;i--){
//     let raw= ""
//     for(let j=1;j<=i;j++){
//         raw=raw+"*"
//     }
//     console.log(raw)
// }

// - [ ] Print:

// 1
// 12
// 123
// 1234
// 12345

// for(let i = 1;i<=5;i++){
//     let row = ""
//     for(let j =1;j<=i;j++){

//         row = row+j

//     }console.log(row)
// }

// // - [ ] Print:
// //     *
// //    **
// //   ***
// //  ****
// // *****

//  for (let i = 1;i<=5;i++){
//     let raw = ""
//     for(let j = 5;j>i;j--)
//         raw=raw+" "
//     for(let s = 1;s<=i;s++){
//         raw=raw+"*"
//     }
//     console.log(raw)
//  }

// - [ ] Print:

//     1
//    12
//   123
//  1234
// 12345

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (j = 5; j > i; j--) {
//     row = row + " ";
//   }
//   for (let n = 1; n <= i; n++) {
//     row = row + n;
//   }
//   console.log(row);
// }

// - [ ] Print:

// 12345
// 1234
// 123
// 12
// 1

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 6 - i; j++) {
    row = row + j;
  }

  console.log(row);
}