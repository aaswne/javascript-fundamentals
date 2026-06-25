// - [ ] Find the largest number in an array

const numbers = [12, 5, 8, 20, 15];

let largest = 0 

for(let i = 0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }
        
}console.log(largest)


// - [ ] Find the smallest number in an array

const numbers = [12, 5, 8, 20, 15];

let smallest = numbers[0]

for (let i = 0;i<numbers.length;i++){
    if(numbers[i]<smallest){
        smallest=numbers[i]
    }
}console.log(smallest)


// - [ ] Calculate the sum of all array elements

const numbers = [4, 8, 12, 16, 20];

let sum = 0 


for (let i = 0 ; i<numbers.length;i++){
    sum=sum+numbers[i]
}console.log(sum)

// - [ ] Calculate the average of all array elements

const numbers = [10, 20, 30, 40, 50];

let sum = 0


    let average = 0

for(let i = 0 ; i<numbers.length;i++){
    sum = sum+numbers[1]

     average = sum/numbers.length
     
}console.log(average)

// - [ ] Count how many even numbers are in the array

const numbers = [3, 6, 8, 11, 14, 17, 20];

let evennum = 0

for (let i = 0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evennum++
    }
}console.log(evennum)


