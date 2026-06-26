// # ## Day 5 - Pattern Printing

// - [ ] Print:

// *
// **
// ***
// ****
// *****


for(let i =1;i<=5;i++){

    let row = ""

    for(let j = 1;j<=i;j++){
        row=row+"*"
    }console.log(row)
}


// - [ ] Print:

// *****
// ****
// ***
// **
// *

for(let i= 5;i>=1;i--){
    let raw= ""
    for(let j=1;j<=i;j++){
        raw=raw+"*"
    }
    console.log(raw)
}


// - [ ] Print:
// ```
// 1
// 12
// 123
// 1234
// 12345
// ```

// - [ ] Print:
// ```
//     *
//    **
//   ***
//  ****
// *****
// ```

// - [ ] Print:
// ```
//     1
//    12
//   123
//  1234
// 12345
// ```