const person = {
name: "abc",
age: 21,
skills: ["JavaScript", "React", "Node.js"],
isStudent: true
};

const jsonString = JSON.stringify(person);//object to json ~ packing to json format

let res = JSON.parse(jsonString)//json to object ~ unpacking json

console.log(res);