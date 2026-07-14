let arr = [
  {
    "id": 1,
    "name": "Aswin",
    "role": "Frontend Developer"
  },
  {
    "id": 2,
    "name": "John",
    "role": "Backend Developer"
  },
  {
    "id": 3,
    "name": "Sara",
    "role": "UI Designer"
  }
]


for (let item of arr){
    console.log(item)
}

 

const users = [
  { id: 1, name: "Aswin", age: 22 },
  { id: 2, name: "John", age: 25 },
  { id: 3, name: "Sara", age: 20 }
];


for(let items of users){

    console.log(items.age>18)
}